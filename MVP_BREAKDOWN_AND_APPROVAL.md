# Source Central — MVP Breakdown & Approval

**Purpose:** Investor meeting prep. This doc breaks down every MVP item, what exists vs what’s missing, and asks for your approval before implementation.

---

## 1. Company positioning (for copy)

- **What:** Intelligence-led B2B sourcing platform connecting global buyers with verified Indian manufacturers (India’s 60M+ MSME).
- **Why:** India has IndiaMART (directory only); China has Alibaba (Trade Assurance, payment, RFQ, inspection, logistics). You fill the trust + infrastructure gap.
- **Problem:** Fragmented data, invisible risk, expensive middlemen → $500B+ untapped.
- **Solution:** Sourcing intelligence (discovery, verification, quote intelligence, tariff analysis, auto-translation, payment/logistics connections).
- **Why now:** US tariffs, China+1, 63M MSMEs, no dominant Indian export sourcing platform.

---

## 2. Current codebase vs requirements

| Area | Exists | Missing / To change |
|------|--------|---------------------|
| **Branding** | "Source Central" in nav, hero, footer | Ensure consistent "Source Central" everywhere |
| **Routes** | `/`, `/chatbot`, `/supplier-discovery` | `/country/china`, `/country/india`, `/blog`, `/competitor/competitor-alibaba`, `/productpedia`, `/marketplace`, Resources (India Export Dashboard, etc.) |
| **Header** | Nav with Platform, Solutions, Resources | Optional: add Pricing; ensure CTA links point to your app (sourcentral.com) |
| **Hero** | Tagline + single search bar → chatbot | 1) Add **changing last word** in hero line. 2) Reposition/rename search as **ProductPedia** (HSN/product search) |
| **Features section** | Section1 (tabs), Section2 (Supplier Discovery, Outreach, Quote Intelligence) | Explicitly call out: **AI-powered RFQ/quote comparison** and **tracking all chats across platforms** |
| **Before/After** | Section4: Before Source Central / After Source Central | Keep; optionally tighten copy to India/MSME angle |
| **Country pages** | Footer links to `/country/china`, `/country/india` | **Pages don’t exist** — need full country pages (China, India) with India vs other hubs, Why Source Central |
| **ProductPedia** | None | **New section/page**: HSN search, trade data, tariffs, manufacturer table; use a comparable product-index UX for reference once |
| **Marketplace** | None | **New**: Signup/Login, user/manufacturer details, dashboard listings |
| **Blog** | Footer link `/blog` | **Page doesn’t exist** — add blog listing (standard listing + post layout) |
| **Comparison** | Footer link `/competitor/competitor-alibaba` | **Page doesn’t exist** — add Source Central vs Alibaba (industry-standard comparison layout) |
| **Resources** | Resources dropdown + footer | Add **India Export Dashboard** (embed/link to Vercel), **full Resources** section, and **Services** list |
| **Services list** | Not on site | Add: AI RFQ, Communication management, Logistics tracking, Working capital for manufacturers, CRM integration, Trade Assurance, Quality check |

---

## 3. MVP task list (for your approval)

### Phase A — Landing page (investor-first)

| # | Task | Details |
|---|------|--------|
| A1 | **Header** | Keep current nav; ensure all links and CTAs use your domains (sourcentral.com / app.sourcentral.com). Add Pricing in nav if you want. |
| A2 | **Hero: changing last word** | One line of copy where the last word rotates (e.g. "…from India **easily** / **smarter** / **faster**"). You approve the exact line and list of words. |
| A3 | **Hero: ProductPedia search bar** | Either: (a) Second search bar labeled "ProductPedia" that goes to ProductPedia page with query, or (b) Single search that you can later route to ProductPedia vs Chatbot. Need your choice. |
| A4 | **Features section** | Keep Section1 + Section2; add explicit bullets/cards for: **AI-powered RFQ / Quote comparison** and **Tracking all chats across platforms**. |
| A5 | **Before / After Source Central** | Keep Section4; optionally tweak copy to India focus. |
| A6 | **India vs other sourcing hubs** | New section on homepage OR inside country pages: short comparison (India vs China, Vietnam, etc.) — data/copy you provide or we use public stats. |
| A7 | **Why choose Source Central** | New section: 3–5 value props (e.g. verification, tariffs, one platform, India focus). Can sit on homepage and/or on `/country/india`. |

### Phase B — Country pages

| # | Task | Details |
|---|------|--------|
| B1 | **`/country/china`** | Full page: hero, key stats, why source from China, link to discovery; adapt a strong country-hub layout, rebrand to Source Central. |
| B2 | **`/country/india`** | Full page: hero, India stats (60M+ MSME, export target, etc.), “Why India”, “Why Source Central for India”; same layout pattern as China. |

### Phase C — ProductPedia

| # | Task | Details |
|---|------|--------|
| C1 | **ProductPedia page/route** | Dedicated page at `/productpedia` (or `/product-pedia`). |
| C2 | **Search by HSN code** | Input HSN code → show product/description; use open HSN dataset or your API if any. |
| C3 | **Import/Export data & potential** | For chosen HSN: show import/export volume or potential (we need data source: API, CSV, or static for MVP). |
| C4 | **Top 10 manufacturing countries** | For the HSN product: list top 10 manufacturing countries (data source TBD). |
| C5 | **Top 10 importing countries** | For the HSN product: list top 10 importing countries (data source TBD). |
| C6 | **Tariffs / special conditions** | For product: show tariffs or special conditions (link to tariff calculator or static text for MVP). |
| C7 | **“Show manufacturers for this HSN”** | If user asks (or button): show a **table of sample manufacturers** for that HSN. For MVP use mock/static table or your backend if ready. |
| C8 | **Extra ProductPedia value** | Add 1–2 more useful items (e.g. related HSN codes, growth trend, or “similar products”) — you pick. |

### Phase D — Marketplace (simplified MVP)

| # | Task | Details |
|---|------|--------|
| D1 | **Signup / Login** | Link to app.sourcentral.com (or build simple login/signup UI on site if you prefer). |
| D2 | **Input user/manufacturer details** | Form(s) to capture buyer vs manufacturer profile (stored where? Airtable/backend — need your backend or we do front-end only and you plug later). |
| D3 | **Dashboard with listings** | Simple dashboard view: “My listings” (for manufacturers) or “Saved suppliers” (for buyers). Depends on auth and backend — confirm scope. |

### Phase E — Blog & comparison

| # | Task | Details |
|---|------|--------|
| E1 | **`/blog`** | Blog listing page. Do you have existing posts (CMS/API) or static list for MVP? |
| E2 | **`/competitor/competitor-alibaba`** | Source Central vs Alibaba page: structure and content adapted to Source Central. |

### Phase F — Resources & services

| # | Task | Details |
|---|------|--------|
| F1 | **Full Resources section** | Replicate structure: Learn & Connect (Blog, Partner, About Us, Career, Help), Comparison (vs Alibaba, Global Sources, etc.), Tool (Tariff Calculator). All rebranded to Source Central and your URLs. |
| F2 | **India Export Dashboard** | Add under Resources: link or embed to `https://sourcentral.vercel.app/India_Export_Dashboard.html`. |
| F3 | **Add reports if any** | E.g. “Global Supply Chain Report 2025”, “Industry Report” — only if you have them; otherwise skip or placeholders. |
| F4 | **Services we provide** | New section or page listing: 1) AI-generated RFQ, 2) Communication management across platforms, 3) Tracking logistics, 4) Working capital for manufacturers, 5) CRM integration, 6) Trade Assurance, 7) Quality check. You can add short blurbs per service. |

### Phase G — Design

| # | Task | Details |
|---|------|--------|
| G1 | **Subtle, professional design** | Tidy spacing, typography, and palette; reduce visual noise; align with “investor-ready” and “enterprise B2B”. |
| G2 | **Reference (optional)** | If you have a reference site (e.g. linear.app, vercel.com), share and we align tone. |

---

## 4. Questions for you (please answer so we can implement)

### Branding & copy

1. **Hero line with changing word:** What exact sentence do you want? Example: “Source from India’s 60M+ MSME **easily**.” Rotating words: easily | smarter | faster | with confidence — or different?
2. **Primary CTA:** Should “Sign up” / “Book a demo” go to app.sourcentral.com and calendly.com/sourcentral/…? Any other URLs to use?
3. **Contact:** Keep +91 9311139914 and naveenkumarofficial026@gmail.com, or use different contact for investors?

### ProductPedia & data

4. **HSN + trade data:** Do you have an API or dataset for HSN codes, import/export stats, and top countries? If not, should we use mock/static data for the demo and plug real data later?
5. **Manufacturer table:** For “show manufacturers for this HSN”, do you have a supplier list/API we should use, or mock/static for MVP?
6. **Tariff calculator:** Link to your existing tariff tool or build a simple one on your site?

### Marketplace

7. **Auth:** Will signup/login use app.sourcentral.com only, or do you want login UI on the marketing site too?
8. **Backend:** For “input user/manufacturer details” and “dashboard listings”, do you have a backend/DB or Airtable? Or should we build only front-end forms and static dashboard for the demo?

### Blog & content

9. **Blog:** Do you have a CMS or list of posts? Or should we create a static “Blog” page with 2–3 placeholder posts for the meeting?
10. **Country pages:** Prefer long-form or shorter, punchier versions for India/China?

### Resources & dashboard

11. **India Export Dashboard:** Prefer “Open in new tab” link or iframe embed in a “Resources” or “Data” page?
12. **Reports:** Do you have a “Global Supply Chain Report” or “Industry Report” to link, or skip for now?

### Design

13. **Design direction:** Prefer (a) minimal (e.g. white/gray, one accent, lots of space), (b) warm (soft colors, approachable), or (c) “same structure as now but cleaned up”? Any site you want to look like (e.g. stripe.com, linear.app)?
14. **Timeline:** Investor meeting date? So we can suggest what to do first (e.g. Phase A + B + E2 + F for a “landing + India story + comparison + resources”).

---

## 5. Design suggestion (short)

- **Typography:** One clear sans (e.g. Inter, DM Sans, or Geist) for headings and body; keep hierarchy obvious.
- **Color:** Single primary (e.g. deep blue or green) for CTAs and key highlights; rest neutral (grays, white). Avoid too many bright accents.
- **Layout:** More whitespace; sections with clear headings; optional subtle gradients or soft backgrounds for “Before/After” and “Why Source Central”.
- **India angle:** Optional small touch (e.g. map or “60M+ MSME” stat) in hero or a dedicated India strip to reinforce positioning.

If you tell me your preferred direction (minimal / warm / clean-only) and one reference site, I can align the next steps to that.

---

## 6. Approval checklist

Before moving to implementation, please confirm:

- [ ] **Phases:** Which phases to do first? (Suggested: A → B → E2 → F → then C, D, E1 as time allows.)
- [ ] **Scope:** Any task you want to drop or add?
- [ ] **Data:** ProductPedia and manufacturer table: real API vs mock/static for MVP?
- [ ] **Marketplace:** Front-end only vs connected to your backend?
- [ ] **Design:** Minimal / warm / clean-only + one reference site if any.
- [ ] **Answers:** Reply to the numbered questions above (even briefly) so we can build exactly what you need.

Once you confirm the above, we’ll implement in the order you approve and won’t move to the next phase without your go-ahead.
