/**
 * Canonical ProductPedia products.
 * Any search (keyword, HSN, category, subcategory) is normalized to one of these slugs.
 * Used for dashboard URL and marketplace filter.
 */
export const PRODUCTS = [
  {
    slug: 'apparels',
    name: 'Apparels & Garments',
    description: 'Clothing, garments, textiles and apparel products including knitwear, woven wear, and fashion accessories.',
    hsnCode: '61',
    category: 'Apparels',
    keywords: ['apparel', 'apparels', 'garments', 'clothing', 'textiles', 'knitwear', 'woven', 'fashion', 'garment'],
    subcategories: ['Knitwear', 'Woven', 'Innerwear', 'Outerwear'],
  },
  {
    slug: 'electronics',
    name: 'Electronics & Consumer Electronics',
    description: 'Electronic components, consumer electronics, electrical machinery and equipment.',
    hsnCode: '85',
    category: 'Electronics',
    keywords: ['electronics', 'consumer electronics', 'electrical', 'components', 'machinery'],
    subcategories: ['Components', 'Consumer Electronics', 'Industrial Electronics'],
  },
  {
    slug: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Yarns, fabrics, textile materials and home textiles.',
    hsnCode: '54',
    category: 'Textiles',
    keywords: ['textile', 'textiles', 'fabric', 'fabrics', 'yarn', 'yarns', 'cotton', 'silk', 'wool'],
    subcategories: ['Cotton', 'Synthetic', 'Silk', 'Wool', 'Home Textiles'],
  },
  {
    slug: 'machinery',
    name: 'Machinery & Mechanical Appliances',
    description: 'Industrial machinery, mechanical appliances, engines and parts.',
    hsnCode: '84',
    category: 'Machinery',
    keywords: ['machinery', 'mechanical', 'industrial', 'engines', 'equipment', 'parts'],
    subcategories: ['Industrial', 'Agricultural', 'Construction', 'Parts'],
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals & Medicinal Products',
    description: 'Medicinal and pharmaceutical products, bulk drugs and formulations.',
    hsnCode: '30',
    category: 'Pharmaceuticals',
    keywords: ['pharma', 'pharmaceuticals', 'medicine', 'medicinal', 'drugs', 'bulk drugs'],
    subcategories: ['Formulations', 'Bulk Drugs', 'Ayush', 'Surgical'],
  },
  {
    slug: 'gems-jewellery',
    name: 'Gems & Jewellery',
    description: 'Precious stones, pearls, jewellery and articles of precious metals.',
    hsnCode: '71',
    category: 'Gems & Jewellery',
    keywords: ['gems', 'jewellery', 'jewelry', 'diamonds', 'precious', 'stones', 'pearls'],
    subcategories: ['Diamonds', 'Gold Jewellery', 'Silver', 'Coloured Gemstones'],
  },
  {
    slug: 'chemicals',
    name: 'Chemicals & Allied Products',
    description: 'Organic and inorganic chemicals, dyes, pigments and chemical products.',
    hsnCode: '28',
    category: 'Chemicals',
    keywords: ['chemicals', 'chemical', 'dyes', 'pigments', 'organic', 'inorganic'],
    subcategories: ['Organic', 'Inorganic', 'Dyes', 'Fertilizers'],
  },
  {
    slug: 'food-beverages',
    name: 'Food & Beverages',
    description: 'Processed food, beverages, agricultural products and food ingredients.',
    hsnCode: '16',
    category: 'Food & Beverages',
    keywords: ['food', 'beverages', 'processed food', 'agricultural', 'ingredients', 'beverage'],
    subcategories: ['Processed Food', 'Beverages', 'Dairy', 'Spices', 'Seafood'],
  },
]

/**
 * Normalize user search (product name, category, subcategory, HSN, keyword) to a canonical product slug.
 * Returns first matching product or null if no match.
 */
export function resolveProductSlug(search) {
  if (!search || typeof search !== 'string') return null
  const q = search.trim().toLowerCase()
  if (!q) return null

  // Exact HSN match (chapter level, e.g. 61, 85)
  const byHsn = PRODUCTS.find((p) => p.hsnCode === q || q === p.hsnCode)
  if (byHsn) return byHsn.slug

  // Slug match
  const bySlug = PRODUCTS.find((p) => p.slug === q || p.slug.replace(/-/g, ' ') === q)
  if (bySlug) return bySlug.slug

  // Category / subcategory match
  const byCat = PRODUCTS.find(
    (p) =>
      p.category.toLowerCase() === q ||
      p.subcategories.some((s) => s.toLowerCase() === q)
  )
  if (byCat) return byCat.slug

  // Keyword match (any keyword contains or equals q)
  const byKeyword = PRODUCTS.find((p) =>
    p.keywords.some((k) => k === q || k.includes(q) || q.includes(k))
  )
  if (byKeyword) return byKeyword.slug

  // Partial name match
  const byName = PRODUCTS.find((p) =>
    p.name.toLowerCase().includes(q) || q.includes(p.name.toLowerCase())
  )
  if (byName) return byName.slug

  return null
}

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null
}
