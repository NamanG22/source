import { Link, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

const COUNTRY_NAMES = { india: 'India', china: 'China', mexico: 'Mexico', vietnam: 'Vietnam', turkey: 'Turkey', usa: 'USA', italy: 'Italy', indonesia: 'Indonesia', germany: 'Germany', philippines: 'Philippines' }

function CountryPage() {
  const { countryId } = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const name = COUNTRY_NAMES[countryId?.toLowerCase()] || (countryId ? countryId.charAt(0).toUpperCase() + countryId?.slice(1) : 'Country')
  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '420px' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Source from {name}</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Short, punchier country page content will go here.</p>
          <Link to="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>← Back to home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CountryPage
