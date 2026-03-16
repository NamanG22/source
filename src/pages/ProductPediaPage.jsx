import { useSearchParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

function ProductPediaPage() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main style={{ minHeight: '60vh', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>ProductPedia</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Search by HSN code, product, or keyword. Import/export data, tariffs, and manufacturer list will be added when data/API is ready.
        </p>
        {q && <p style={{ marginBottom: '1rem' }}>You searched: <strong>{q}</strong></p>}
        <Link to="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>← Back to home</Link>
      </main>
      <Footer />
    </div>
  )
}

export default ProductPediaPage
