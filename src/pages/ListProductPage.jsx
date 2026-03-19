import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as XLSX from 'xlsx'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabaseClient'
import './ListProductPage.css'

const BULK_HEADERS = [
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

const HEADER_TO_FIELD = {
  'product name': 'title',
  'description': 'description',
  'category': 'category',
  'subcategory': 'subcategory',
  'hsn code': 'hsn_code',
  'price': 'price',
  'unit': 'unit',
  'moq (minimum order quantity)': 'moq',
  'quantity available': 'quantity_available',
  'image url': 'image_url',
}

function normalizeHeader(h) {
  if (h == null || typeof h !== 'string') return ''
  return h.trim().toLowerCase()
}

function parseBulkSheet(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]]
        const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: '' })
        if (!rows.length) {
          resolve({ headers: [], rows: [], parsed: [] })
          return
        }
        const rawHeaders = rows[0].map((c) => (c != null ? String(c).trim() : ''))
        const headers = rawHeaders
        const dataRows = rows.slice(1)
        const parsed = []
        for (const row of dataRows) {
          const obj = {}
          rawHeaders.forEach((h, i) => {
            const key = HEADER_TO_FIELD[normalizeHeader(h)]
            if (key) obj[key] = row[i] != null ? String(row[i]).trim() : ''
          })
          if (obj.title) parsed.push(obj)
        }
        resolve({ headers, rows: dataRows, parsed })
      } catch (err) {
        reject(err)
      }
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsArrayBuffer(file)
  })
}

function downloadTemplate() {
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.aoa_to_sheet([BULK_HEADERS])
  XLSX.utils.book_append_sheet(wb, ws, 'Products')
  XLSX.writeFile(wb, 'products_bulk_template.xlsx')
}

function ListProductPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('single')
  const { user, canListProducts, loading: authLoading } = useAuth()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [subcategory, setSubcategory] = useState('')
  const [hsnCode, setHsnCode] = useState('')
  const [price, setPrice] = useState('')
  const [unit, setUnit] = useState('')
  const [moq, setMoq] = useState('')
  const [quantityAvailable, setQuantityAvailable] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [bulkFile, setBulkFile] = useState(null)
  const [bulkParsed, setBulkParsed] = useState(null)
  const [bulkError, setBulkError] = useState('')
  const [bulkSubmitting, setBulkSubmitting] = useState(false)

  useEffect(() => {
    if (authLoading) return
    if (!user) {
      navigate('/marketplace', { replace: true })
      return
    }
    if (!canListProducts) {
      navigate('/marketplace', { replace: true, state: { message: 'Only suppliers, manufacturers, distributors, or agents can list products.' } })
      return
    }
  }, [user, canListProducts, authLoading, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!title.trim()) {
      setError('Product name is required.')
      return
    }
    if (!supabase || !user) {
      setError('Not signed in.')
      return
    }
    setSubmitting(true)
    const { error: insertError } = await supabase.from('products').insert({
      user_id: user.id,
      title: title.trim(),
      description: description.trim() || null,
      category: category.trim() || null,
      subcategory: subcategory.trim() || null,
      hsn_code: hsnCode.trim() || null,
      price: price.trim() || null,
      unit: unit.trim() || null,
      moq: moq.trim() || null,
      quantity_available: quantityAvailable.trim() || null,
      image_url: imageUrl.trim() || null,
    })
    setSubmitting(false)
    if (insertError) {
      setError(insertError.message || 'Failed to list product.')
      return
    }
    navigate('/marketplace', { replace: true })
  }

  const handleBulkFileChange = async (e) => {
    const file = e.target.files?.[0]
    setBulkFile(file)
    setBulkError('')
    setBulkParsed(null)
    if (!file) return
    const name = (file.name || '').toLowerCase()
    if (!name.endsWith('.xlsx') && !name.endsWith('.xls') && !name.endsWith('.csv')) {
      setBulkError('Please upload an Excel file (.xlsx, .xls) or CSV.')
      return
    }
    try {
      const result = await parseBulkSheet(file)
      setBulkParsed(result)
      if (result.parsed.length === 0) {
        setBulkError('No valid rows found. First column must be "Product name" and rows must have a product name.')
      }
    } catch (err) {
      setBulkError(err?.message || 'Failed to parse file.')
    }
  }

  const handleBulkSubmit = async (e) => {
    e.preventDefault()
    setBulkError('')
    if (!bulkParsed?.parsed?.length || !user || !supabase) {
      setBulkError('Upload a valid Excel file with at least one product (Product name required).')
      return
    }
    setBulkSubmitting(true)
    const BATCH = 50
    let inserted = 0
    for (let i = 0; i < bulkParsed.parsed.length; i += BATCH) {
      const chunk = bulkParsed.parsed.slice(i, i + BATCH)
      const rows = chunk.map((p) => ({
        user_id: user.id,
        title: p.title || 'Untitled',
        description: p.description || null,
        category: p.category || null,
        subcategory: p.subcategory || null,
        hsn_code: p.hsn_code || null,
        price: p.price || null,
        unit: p.unit || null,
        moq: p.moq || null,
        quantity_available: p.quantity_available || null,
        image_url: p.image_url || null,
      }))
      const { error: insertError } = await supabase.from('products').insert(rows)
      if (insertError) {
        setBulkError(insertError.message || `Failed at row ${i + 1}.`)
        setBulkSubmitting(false)
        return
      }
      inserted += rows.length
    }
    setBulkSubmitting(false)
    navigate('/marketplace', { replace: true })
  }

  if (authLoading || !user || !canListProducts) {
    return (
      <div className="App">
        <main className="list-product-page" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <p className="list-product-loading">Loading…</p>
        </main>
      </div>
    )
  }

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="list-product-page">
        <div className="list-product-card">
          <h1 className="list-product-title">List your product</h1>
          <p className="list-product-subtitle">Add details about your product so buyers can discover it.</p>

          <div className="list-product-tabs">
            <button
              type="button"
              className={`list-product-tab ${activeTab === 'single' ? 'active' : ''}`}
              onClick={() => setActiveTab('single')}
            >
              Single product
            </button>
            <button
              type="button"
              className={`list-product-tab ${activeTab === 'bulk' ? 'active' : ''}`}
              onClick={() => setActiveTab('bulk')}
            >
              Bulk upload (Excel)
            </button>
          </div>

          {activeTab === 'single' && (
          <form className="list-product-form" onSubmit={handleSubmit}>
            {error && <div className="list-product-error">{error}</div>}
            <label className="list-product-label">
              Product name *
              <input
                type="text"
                className="list-product-input"
                placeholder="e.g. Cotton T-Shirts"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="list-product-label">
              Description
              <textarea
                className="list-product-input list-product-textarea"
                placeholder="Brief description, materials, use cases..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </label>
            <div className="list-product-row">
              <label className="list-product-label">
                Category
                <input
                  type="text"
                  className="list-product-input"
                  placeholder="e.g. Textiles, Electronics"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
              <label className="list-product-label">
                Subcategory
                <input
                  type="text"
                  className="list-product-input"
                  placeholder="e.g. Apparel"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                />
              </label>
            </div>
            <label className="list-product-label">
              HSN code
              <input
                type="text"
                className="list-product-input"
                placeholder="e.g. 6109 (apparel), 9405 (lamps)"
                value={hsnCode}
                onChange={(e) => setHsnCode(e.target.value)}
              />
            </label>
            <div className="list-product-row">
              <label className="list-product-label">
                Price
                <input
                  type="text"
                  className="list-product-input"
                  placeholder="e.g. 5.00 or Contact for price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label className="list-product-label">
                Unit
                <input
                  type="text"
                  className="list-product-input"
                  placeholder="e.g. piece, kg, dozen"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                />
              </label>
            </div>
            <label className="list-product-label">
              MOQ (Minimum Order Quantity)
              <input
                type="text"
                className="list-product-input"
                placeholder="e.g. 100 pieces, 50 kg"
                value={moq}
                onChange={(e) => setMoq(e.target.value)}
              />
            </label>
            <label className="list-product-label">
              Quantity available
              <input
                type="text"
                className="list-product-input"
                placeholder="e.g. 1000 units"
                value={quantityAvailable}
                onChange={(e) => setQuantityAvailable(e.target.value)}
              />
            </label>
            <label className="list-product-label">
              Image URL
              <input
                type="url"
                className="list-product-input"
                placeholder="https://..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>
            <div className="list-product-actions">
              <button type="submit" className="list-product-submit" disabled={submitting}>
                {submitting ? 'Listing…' : 'List product'}
              </button>
              <Link to="/marketplace" className="list-product-cancel">Cancel</Link>
            </div>
          </form>
          )}

          {activeTab === 'bulk' && (
            <div className="list-product-bulk">
              <p className="list-product-bulk-intro">
                Upload an Excel file (.xlsx or .xls) with columns: <strong>Product name</strong> (required), Description, Category, Subcategory, HSN code, Price, Unit, MOQ (Minimum Order Quantity), Quantity available, Image URL.
              </p>
              <div className="list-product-bulk-actions">
                <button
                  type="button"
                  className="list-product-template-btn"
                  onClick={downloadTemplate}
                >
                  Download template
                </button>
                <a href="/products_sample_200.xlsx" download className="list-product-template-btn list-product-sample-link">
                  Download sample (200 rows)
                </a>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  className="list-product-file-input"
                  onChange={handleBulkFileChange}
                />
                <button
                  type="button"
                  className="list-product-upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose Excel file
                </button>
              </div>
              {bulkFile && <p className="list-product-file-name">{bulkFile.name}</p>}
              {bulkError && <div className="list-product-error">{bulkError}</div>}
              {bulkParsed && bulkParsed.parsed.length > 0 && (
                <>
                  <p className="list-product-preview-title">Preview: {bulkParsed.parsed.length} product(s)</p>
                  <div className="list-product-preview-wrap">
                    <table className="list-product-preview-table">
                      <thead>
                        <tr>
                          <th>Product name</th>
                          <th>Category</th>
                          <th>HSN code</th>
                          <th>Price</th>
                          <th>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bulkParsed.parsed.slice(0, 10).map((p, i) => (
                          <tr key={i}>
                            <td>{p.title}</td>
                            <td>{p.category || '—'}</td>
                            <td>{p.hsn_code || '—'}</td>
                            <td>{p.price || '—'}</td>
                            <td>{p.unit || '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {bulkParsed.parsed.length > 10 && (
                      <p className="list-product-preview-more">… and {bulkParsed.parsed.length - 10} more</p>
                    )}
                  </div>
                  <form onSubmit={handleBulkSubmit} className="list-product-bulk-form">
                    <div className="list-product-actions">
                      <button type="submit" className="list-product-submit" disabled={bulkSubmitting}>
                        {bulkSubmitting ? 'Uploading…' : `List ${bulkParsed.parsed.length} products`}
                      </button>
                      <Link to="/marketplace" className="list-product-cancel">Cancel</Link>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}

          <p className="list-product-back">
            <Link to="/marketplace" className="list-product-back-link">← Back to marketplace</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ListProductPage
