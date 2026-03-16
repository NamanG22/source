import { Link, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

function PlaceholderPage({ title, description = 'Content coming soon.' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const params = useParams()
  const slug = params['*'] || params.countryId || ''
  const displayTitle = title || (slug ? `${slug.charAt(0).toUpperCase() + slug.slice(1)}` : 'Page')
  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '420px' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{displayTitle}</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{description}</p>
          <Link to="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>← Back to home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PlaceholderPage
