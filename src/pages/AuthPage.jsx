import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

function AuthPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Sign up / Log in</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            One place for buyers and manufacturers. Backend and DB will be connected later.
          </p>
          <Link to="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>← Back to home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AuthPage
