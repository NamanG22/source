import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

function CompetitorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main style={{ minHeight: '60vh', padding: '2rem', maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Source Central vs Alibaba</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Comparison content will go here.</p>
        <Link to="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>← Back to home</Link>
      </main>
      <Footer />
    </div>
  )
}

export default CompetitorPage
