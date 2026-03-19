-- Add HSN code column to products table for GST/export classification
alter table public.products
  add column if not exists hsn_code text;
