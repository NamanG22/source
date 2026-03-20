# Supabase setup for auth (signup / login)

Follow these steps to connect your app to Supabase so signup and login work with a real database.

---

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in (or create an account).
2. Click **New project**.
3. Pick an organization (or create one), name the project (e.g. `source-central`), set a database password and region, then click **Create new project**.
4. Wait until the project is ready.

---

## 2. Get your API keys

1. In the Supabase dashboard, open **Project Settings** (gear icon in the sidebar).
2. Go to **API**.
3. Copy:
   - **Project URL** (e.g. `https://xxxx.supabase.co`)
   - **anon public** key (under "Project API keys").

---

## 3. Create the `profiles` table

Signup stores the auth user in Supabase Auth and extra fields (name, business type, country, phone) in a `profiles` table.

1. In the dashboard, open **SQL Editor**.
2. Click **New query** and run this SQL:

```sql
-- Table for extra user profile data (linked to auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  business_type text,
  country text,
  country_code text,
  phone text,
  created_at timestamptz default now()
);

-- Allow users to read/update only their own profile
alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Profile row is also created by a trigger when a user signs up (fallback: app upserts after signUp).
-- Trigger: when a new row is inserted into auth.users, insert a row into public.profiles from metadata.
drop trigger if exists on_auth_user_created on auth.users;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, business_type, country, country_code, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'business_type', ''),
    coalesce(new.raw_user_meta_data->>'country', ''),
    coalesce(new.raw_user_meta_data->>'country_code', ''),
    coalesce(new.raw_user_meta_data->>'phone', '')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

3. Click **Run**. You should see “Success. No rows returned.”

---

**If you already created the table earlier:** run only the trigger part (from `drop trigger if exists` through `create trigger ...` above) in a new query. Without this trigger, signups will succeed but no row will appear in `profiles`. If you get "trigger already exists", the block above now drops it first so you can re-run it safely.

### 3b. Backfill profiles for users who already signed up

If you created the trigger **after** someone signed up, that user will exist under **Authentication → Users** but have no row in **Table Editor → profiles**. Run this once in the SQL Editor to create profile rows for them (from their signup metadata):

```sql
insert into public.profiles (id, full_name, business_type, country, country_code, phone)
select
  id,
  coalesce(raw_user_meta_data->>'full_name', ''),
  coalesce(raw_user_meta_data->>'business_type', ''),
  coalesce(raw_user_meta_data->>'country', ''),
  coalesce(raw_user_meta_data->>'country_code', ''),
  coalesce(raw_user_meta_data->>'phone', '')
from auth.users
where id not in (select id from public.profiles);
```

Then check **Table Editor → profiles** — you should see the missing row(s).

### 3c. If the app creates the profile (client fallback)

The app also upserts a profile row right after signup. For that to work, the insert policy must exist. If you only ran the table + trigger earlier and never had an insert policy, run this once in the SQL Editor:

```sql
drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);
```

Then new signups will create a row in `profiles` either via the trigger or via the app.

### 3d. Marketplace: products table

For the marketplace (products listed by suppliers/manufacturers/etc.), create the `products` table. In the SQL Editor, run:

```sql
create table public.products (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  category text,
  subcategory text,
  price text,
  unit text,
  quantity_available text,
  image_url text,
  specifications jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.products enable row level security;

create policy "Anyone can read products"
  on public.products for select
  using (true);

create policy "Users can insert own product"
  on public.products for insert
  with check (auth.uid() = user_id);

create policy "Users can update own products"
  on public.products for update
  using (auth.uid() = user_id);

create policy "Users can delete own products"
  on public.products for delete
  using (auth.uid() = user_id);
```

To add MOQ (Minimum Order Quantity) to products, run:

```sql
alter table public.products add column if not exists moq text;
```

The app does not enforce “non-buyer” in RLS (Supabase RLS cannot read `profiles.business_type` in a simple policy). The app only shows “List your product” to users whose profile has `business_type` ≠ buyer and sends them to the list form; listing is still restricted by the insert policy (only your own `user_id`). To fully restrict inserts to non-buyers you’d need a trigger or function; for now the UI restriction is sufficient.

### 3e. Extended profiles by business type (manufacturer, supplier, distributor)

The app uses **separate extended-profile tables** per business type, linked to the common `profiles` table by `user_id`. Run the full schema in **`supabase/extended_profiles_schema.sql`** in the SQL Editor (creates `manufacturer_profiles`, `supplier_profiles`, `distributor_profiles` with RLS). The profile page shows different questions based on whether the user is a manufacturer, supplier, or distributor.

### 3f. Profile extended fields (legacy / simple non-buyer fields on profiles)

For backward compatibility, these columns on `profiles` are still used. Add them if you haven’t:

```sql
alter table public.profiles
  add column if not exists company_name text,
  add column if not exists plant_location text,
  add column if not exists website text;
```

## 4. (Optional) Email confirmation

- By default Supabase may require users to confirm their email before signing in.
- To turn this off for development: **Authentication** → **Providers** → **Email** → disable **Confirm email**.

---

## 5. Add env vars in your app

1. In your project root, copy the example env file:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and set:

   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

   Use the **Project URL** and **anon public** key from step 2. Do not commit `.env` (it should be in `.gitignore`).

3. Restart the dev server so Vite picks up the new env:

   ```bash
   npm run dev
   ```

---

## 6. Test signup and login

1. Open the app and go to the signup page (e.g. **Sign up** in the header).
2. Fill the form and submit. You should be redirected home and the new user + profile should appear in Supabase:
   - **Authentication** → **Users**: new user.
   - **Table Editor** → **profiles**: new row with the same `id` as the user.
3. Use **Log in** with the same email and password to confirm login works.

---

## Troubleshooting: "Failed to fetch" or "Could not reach Supabase"

This usually means the browser couldn’t complete the request to Supabase. Check in order:

1. **Restart the dev server**  
   Vite only reads `.env` when it starts. After adding or changing `.env`, stop the server (Ctrl+C) and run `npm run dev` again.

2. **Correct URL in `.env`**  
   - Use the exact **Project URL** from Supabase (e.g. `https://abcdefgh.supabase.co`).  
   - No trailing slash.  
   - No quotes around the value.

3. **Correct variable names**  
   Must be exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (so Vite exposes them to the client).

4. **Browser / network**  
   Try in an incognito/private window, or temporarily disable ad blockers or VPNs that might block the request.

5. **Supabase project**  
   In the dashboard, confirm the project is running (not paused). Free projects can pause after inactivity.

---

## Summary

| Step | What you did |
|------|----------------|
| 1 | Created a Supabase project |
| 2 | Copied Project URL and anon key |
| 3 | Ran SQL to create `profiles` and RLS policies |
| 4 | (Optional) Disabled email confirmation |
| 5 | Added `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env` and restarted dev server |
| 6 | Tested signup and login |

If auth is not configured (missing env), the auth page will show: *Auth is not configured. Add Supabase URL and anon key to .env — see SUPABASE_SETUP.md*.
