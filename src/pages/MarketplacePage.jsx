import { useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { supabase } from '../lib/supabaseClient'
import './MarketplacePage.css'

function MarketplacePage() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const message = location.state?.message
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const filterCategory = searchParams.get('category')?.trim() || ''
  const filterHsn = (searchParams.get('hs') || searchParams.get('hsn'))?.trim() || ''
  const filterQ = searchParams.get('q')?.trim() || ''

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }
    let query = supabase
      .from('products')
      .select('id, title, description, category, subcategory, hsn_code, price, unit, moq, image_url, created_at')
      .order('created_at', { ascending: false })

    if (filterCategory) {
      query = query.or(`category.ilike.%${filterCategory}%,subcategory.ilike.%${filterCategory}%`)
    }
    if (filterHsn) {
      query = query.ilike('hsn_code', `${filterHsn}%`)
    }
    if (filterQ) {
      query = query.or(`title.ilike.%${filterQ}%,description.ilike.%${filterQ}%,category.ilike.%${filterQ}%`)
    }

    query
      .then(({ data, error }) => {
        setProducts(data ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [filterCategory, filterHsn, filterQ])

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="marketplace-page">
        <div className="marketplace-header">
          <h1 className="marketplace-title">Marketplace</h1>
          <p className="marketplace-subtitle">
            Products listed by suppliers, manufacturers, and distributors. Discover and connect.
          </p>
          {(filterCategory || filterHsn || filterQ) && (
            <div className="marketplace-filters">
              <span className="marketplace-filters-label">Filters:</span>
              {filterCategory && <span className="marketplace-filter-tag">Category: {filterCategory}</span>}
              {filterHsn && <span className="marketplace-filter-tag">HSN: {filterHsn}</span>}
              {filterQ && <span className="marketplace-filter-tag">Search: {filterQ}</span>}
              <Link to="/marketplace" className="marketplace-filters-clear">Clear all</Link>
            </div>
          )}
        </div>

        {message && (
          <div className="marketplace-message" role="alert">
            {message}
          </div>
        )}

        {loading ? (
          <p className="marketplace-loading">Loading products…</p>
        ) : products.length === 0 ? (
          <p className="marketplace-empty">
            {(filterCategory || filterHsn || filterQ) ? 'No products match your filters. Try clearing filters or different criteria.' : 'No products listed yet.'}
          </p>
        ) : (
          <div className="marketplace-grid">
            {products.map((p) => (
              <article key={p.id} className="marketplace-card">
                <div className="marketplace-card-image">
                  {p.image_url ? (
                    <img src={p.image_url} alt="" />
                  ) : (
                    <div className="marketplace-card-placeholder">No image</div>
                  )}
                </div>
                <div className="marketplace-card-body">
                  <h2 className="marketplace-card-title">{p.title}</h2>
                  {p.category && (
                    <span className="marketplace-card-category">{p.category}</span>
                  )}
                  {p.description && (
                    <p className="marketplace-card-desc">{p.description}</p>
                  )}
                  {p.price && (
                    <p className="marketplace-card-price">
                      ₹ {p.price}
                      {p.unit && ` / ${p.unit}`}
                    </p>
                  )}
                  {p.moq && (
                    <p className="marketplace-card-moq">MOQ: {p.moq}</p>
                  )}
                  <div className="marketplace-card-actions">
                    <button type="button" className="marketplace-card-btn marketplace-card-btn--primary">
                      Add to cart
                    </button>
                    <a
                      href={`mailto:?subject=${encodeURIComponent('Inquiry about ' + p.title)}`}
                      className="marketplace-card-btn marketplace-card-btn--secondary"
                    >
                      Chat now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="marketplace-back">
          <Link to="/" className="marketplace-back-link">← Back to home</Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default MarketplacePage
