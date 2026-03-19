/**
 * Generates an Excel file with 200 random product rows for bulk upload.
 * Run: node scripts/generate-sample-products.js
 * Output: public/products_sample_200.xlsx
 */

import XLSX from 'xlsx'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_PATH = join(__dirname, '..', 'public', 'products_sample_200.xlsx')

const HEADERS = [
  'Product name',
  'Description',
  'Category',
  'Subcategory',
  'HSN code',
  'Price',
  'Unit',
  'MOQ (Minimum Order Quantity)',
  'Quantity available',
  'Image URL',
]

// Common HSN codes (4-digit chapter level) for the categories we use
const HSN_BY_CATEGORY = {
  'Textiles & Apparel': ['6109', '6110', '6205', '6206', '6302', '6304'],
  'Electronics': ['8517', '8471', '8544', '8528', '8473'],
  'Home & Kitchen': ['7323', '7324', '9403', '9405', '7013'],
  'Sports & Outdoors': ['9506', '6310', '4015', '3926'],
  'Health & Beauty': ['3304', '3305', '3306', '3401', '3307'],
  'Toys & Games': ['9503', '9504', '9608', '3926'],
  'Automotive': ['8708', '4016', '7326', '8479'],
  'Office Supplies': ['4820', '9403', '8471', '3926'],
  'Food & Beverage': ['0904', '2106', '2008', '1704', '2202'],
  'Handicrafts': ['4419', '7013', '7326', '7117', '6304'],
}

const CATEGORIES = [
  'Textiles & Apparel',
  'Electronics',
  'Home & Kitchen',
  'Sports & Outdoors',
  'Health & Beauty',
  'Toys & Games',
  'Automotive',
  'Office Supplies',
  'Food & Beverage',
  'Handicrafts',
]

const SUBCATEGORIES = {
  'Textiles & Apparel': ['Cotton Wear', 'Silk Sarees', 'Woolens', 'Denim', 'Activewear', 'Home Textiles'],
  'Electronics': ['Mobile Accessories', 'Power Banks', 'Cables', 'Audio', 'Smart Devices'],
  'Home & Kitchen': ['Cookware', 'Storage', 'Decor', 'Lighting', 'Furniture'],
  'Sports & Outdoors': ['Fitness', 'Camping', 'Cycling', 'Outdoor Gear'],
  'Health & Beauty': ['Skincare', 'Hair Care', 'Personal Care', 'Wellness'],
  'Toys & Games': ['Educational', 'Action Figures', 'Board Games', 'Outdoor Toys'],
  'Automotive': ['Accessories', 'Parts', 'Tools', 'Care Products'],
  'Office Supplies': ['Stationery', 'Furniture', 'Tech', 'Organizers'],
  'Food & Beverage': ['Snacks', 'Beverages', 'Spices', 'Ready to Eat'],
  'Handicrafts': ['Wooden', 'Metal', 'Ceramic', 'Textile Art', 'Jewelry'],
}

const UNITS = ['piece', 'kg', 'dozen', 'set', 'meter', 'box', 'pack', 'unit', 'pair', 'liter']
const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
  '',
]

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randPrice() {
  const n = (Math.random() * 900 + 10).toFixed(2)
  return String(n)
}

const PRODUCT_PREFIX = [
  'Premium', 'Classic', 'Eco-Friendly', 'Professional', 'Deluxe', 'Standard',
  'Organic', 'Handmade', 'Industrial', 'Commercial', 'Export Quality', 'Designer',
]
const PRODUCT_BASE = [
  'Cotton T-Shirts', 'LED Bulbs', 'Stainless Steel Cookware', 'Yoga Mats', 'Wooden Toys',
  'Spice Set', 'Leather Bags', 'Ceramic Mugs', 'Wireless Earbuds', 'Desk Organizers',
  'Running Shoes', 'Handwoven Rugs', 'Jute Bags', 'Brass Decor', 'Essential Oils',
  'Paper Notebooks', 'Canvas Prints', 'Bamboo Cutlery', 'Scented Candles', 'Copper Bottles',
  'Silk Scarves', 'Terracotta Pottery', 'Metal Keychains', 'Cotton Bedsheets', 'Soap Set',
  'Tea Blends', 'Incense Sticks', 'Wall Art', 'Table Lamps', 'Cushion Covers',
]

function generateRow() {
  const category = pick(CATEGORIES)
  const subcats = SUBCATEGORIES[category] || ['General']
  const subcategory = pick(subcats)
  const hsnList = HSN_BY_CATEGORY[category] || ['9999']
  const hsnCode = pick(hsnList)
  const prefix = pick(PRODUCT_PREFIX)
  const base = pick(PRODUCT_BASE)
  const productName = `${prefix} ${base}`
  const desc = `High-quality ${productName.toLowerCase()} for wholesale and retail. Suitable for export.`
  const price = randPrice()
  const unit = pick(UNITS)
  const moq = `${randInt(10, 500)} ${unit}`
  const qty = `${randInt(500, 10000)} ${unit}`
  const imageUrl = pick(SAMPLE_IMAGES)

  return [
    productName,
    desc,
    category,
    subcategory,
    hsnCode,
    price,
    unit,
    moq,
    qty,
    imageUrl,
  ]
}

function main() {
  const rows = [HEADERS]
  for (let i = 0; i < 200; i++) {
    rows.push(generateRow())
  }

  const ws = XLSX.utils.aoa_to_sheet(rows)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Products')

  mkdirSync(dirname(OUT_PATH), { recursive: true })
  XLSX.writeFile(wb, OUT_PATH)
  console.log('Generated:', OUT_PATH)
}

main()
