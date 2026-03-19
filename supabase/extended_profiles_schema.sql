-- Extended profile tables: one per business type (manufacturer, supplier, distributor).
-- Common profile stays in public.profiles (id, full_name, business_type, country, etc.).
-- Each user has at most one row in the table matching their business_type.

-- =============================================================================
-- MANUFACTURER / EXPORTER EXTENDED PROFILE
-- =============================================================================
create table if not exists public.manufacturer_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  -- Business Details
  year_established smallint,
  number_of_employees text,
  annual_turnover_inr text,
  export_experience_yes boolean,
  export_experience_years int,
  export_top_markets text,
  iec_number text,
  -- Production Capabilities
  primary_product_categories jsonb default '[]',
  hs_codes jsonb default '[]',
  plant_locations jsonb default '[]',
  total_plant_area_value numeric,
  total_plant_area_unit text,
  types_of_machines text,
  max_production_capacity_value numeric,
  max_production_capacity_unit text,
  max_production_capacity_period text,
  normal_production_capacity_value numeric,
  normal_production_capacity_unit text,
  lead_time_standard text,
  moq_value numeric,
  moq_unit text,
  sample_availability boolean,
  sample_lead_time text,
  sample_cost text,
  -- Quality & Compliance
  certifications jsonb default '[]',
  certificate_documents jsonb default '[]',
  quality_control_process text,
  third_party_audit boolean,
  third_party_audit_details text,
  gst_certificate_url text,
  msme_registration_number text,
  msme_document_url text,
  -- Trade & Logistics
  export_markets_current jsonb default '[]',
  target_export_markets jsonb default '[]',
  incoterms_offered jsonb default '[]',
  ports_of_shipment jsonb default '[]',
  payment_terms_accepted jsonb default '[]',
  annual_export_volume_usd text,
  -- Bank & Compliance (optional)
  bank_ifsc text,
  bank_account_number text,
  trade_references jsonb default '[]',
  financial_summary_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.manufacturer_profiles enable row level security;

create policy "Users can read own manufacturer_profile"
  on public.manufacturer_profiles for select using (auth.uid() = user_id);
create policy "Users can insert own manufacturer_profile"
  on public.manufacturer_profiles for insert with check (auth.uid() = user_id);
create policy "Users can update own manufacturer_profile"
  on public.manufacturer_profiles for update using (auth.uid() = user_id);

-- =============================================================================
-- SUPPLIER EXTENDED PROFILE (simplified: categories, capacity, locations, terms)
-- =============================================================================
create table if not exists public.supplier_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  year_established smallint,
  number_of_employees text,
  annual_turnover_inr text,
  primary_categories jsonb default '[]',
  hs_codes jsonb default '[]',
  locations jsonb default '[]',
  moq_value numeric,
  moq_unit text,
  certifications jsonb default '[]',
  payment_terms_accepted jsonb default '[]',
  incoterms_offered jsonb default '[]',
  export_experience_yes boolean,
  export_experience_years int,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.supplier_profiles enable row level security;

create policy "Users can read own supplier_profile"
  on public.supplier_profiles for select using (auth.uid() = user_id);
create policy "Users can insert own supplier_profile"
  on public.supplier_profiles for insert with check (auth.uid() = user_id);
create policy "Users can update own supplier_profile"
  on public.supplier_profiles for update using (auth.uid() = user_id);

-- =============================================================================
-- DISTRIBUTOR EXTENDED PROFILE (territories, categories, terms)
-- =============================================================================
create table if not exists public.distributor_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  year_established smallint,
  number_of_employees text,
  annual_turnover_inr text,
  distribution_territories jsonb default '[]',
  primary_categories jsonb default '[]',
  payment_terms_accepted jsonb default '[]',
  incoterms_offered jsonb default '[]',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.distributor_profiles enable row level security;

create policy "Users can read own distributor_profile"
  on public.distributor_profiles for select using (auth.uid() = user_id);
create policy "Users can insert own distributor_profile"
  on public.distributor_profiles for insert with check (auth.uid() = user_id);
create policy "Users can update own distributor_profile"
  on public.distributor_profiles for update using (auth.uid() = user_id);
