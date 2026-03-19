import { useState, useEffect } from 'react'
import { Link, useSearchParams, useParams, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import ProductPediaDashboard from '../components/ProductPediaDashboard/ProductPediaDashboard'
import { resolveProductSlug, PRODUCTS } from '../data/productpediaProducts'
import './ProductPediaPage.css'

function ProductPediaSearchLanding({ onSearch, unresolvedQuery }) {
  const [query, setQuery] = useState(unresolvedQuery || '')
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    const q = query.trim()
    if (!q) return
    onSearch(q)
  }

  return (
    <main className="productpedia-page">
      <div className="productpedia-hero">
        <h1 className="productpedia-hero-title">ProductPedia</h1>
        <p className="productpedia-hero-subtitle">
          Research products by name, category, subcategory, or HSN code. Get trade data, market overview, and jump to the marketplace.
        </p>
        <form className="productpedia-search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="productpedia-search-input"
            placeholder="e.g. apparels, 61, electronics, textiles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search product or HSN"
          />
          <button type="submit" className="productpedia-search-btn">
            Search
          </button>
        </form>
        {touched && !query.trim() && (
          <p className="productpedia-search-hint productpedia-search-hint--error">Enter a product, category, or HSN code.</p>
        )}
        {unresolvedQuery && (
          <p className="productpedia-search-hint productpedia-search-hint--error">
            No product found for &quot;{unresolvedQuery}&quot;. Try one of the products below or another search.
          </p>
        )}
      </div>

      <section className="productpedia-quick-links">
        <h2 className="productpedia-quick-links-title">Browse by product</h2>
        <div className="productpedia-quick-links-grid">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              to={`/productpedia/${p.slug}`}
              className="productpedia-quick-link"
            >
              <span className="productpedia-quick-link-name">{p.name}</span>
              <span className="productpedia-quick-link-hsn">HSN {p.hsnCode}</span>
            </Link>
          ))}
        </div>
      </section>

      <p className="productpedia-back-wrap">
        <Link to="/" className="productpedia-back">← Back to home</Link>
      </p>
    </main>
  )
}

function ProductPediaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [compactQuery, setCompactQuery] = useState('')
  const { productSlug } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const q = searchParams.get('q') || ''

  // If URL has ?q=..., resolve to slug and redirect to canonical dashboard URL
  const resolvedSlug = resolveProductSlug(q)
  useEffect(() => {
    if (!q || productSlug) return
    if (resolvedSlug) {
      navigate(`/productpedia/${resolvedSlug}`, { replace: true })
    }
  }, [q, productSlug, resolvedSlug, navigate])

  const handleSearch = (searchQuery) => {
    const slug = resolveProductSlug(searchQuery)
    if (slug) {
      navigate(`/productpedia/${slug}`)
    } else {
      navigate(`/productpedia?q=${encodeURIComponent(searchQuery)}`, { replace: true })
    }
  }

  const unresolvedQuery = q && !resolvedSlug ? q : null

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {productSlug ? (
        <main className="productpedia-page productpedia-page--dashboard">
          <ProductPediaDashboard
            productSlug={productSlug}
            onSearch={handleSearch}
            compactQuery={compactQuery}
            setCompactQuery={setCompactQuery}
          />
        </main>
      ) : (
        <ProductPediaSearchLanding onSearch={handleSearch} unresolvedQuery={unresolvedQuery} />
      )}
      <Footer />
    </div>
  )
}

export default ProductPediaPage
