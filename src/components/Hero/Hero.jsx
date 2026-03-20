import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './Hero.css'

const AMBIENT_LINKS = [
  { label: 'Marketplace', to: '/marketplace', position: 'n' },
  { label: 'ProductPedia', to: '/productpedia', position: 'e' },
  { label: 'Blog', to: '/blog', position: 's' },
  { label: 'About', to: '/about-us', position: 'w' },
]

function Hero({ isMenuOpen, setIsMenuOpen }) {
  const [searchActive, setSearchActive] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const openSearch = useCallback(() => {
    setSearchActive(true)
  }, [])

  const closeSearch = useCallback(() => {
    setSearchActive(false)
    setQuery('')
  }, [])

  useEffect(() => {
    if (!searchActive) return
    const t = requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
    return () => cancelAnimationFrame(t)
  }, [searchActive])

  useEffect(() => {
    if (!searchActive) return
    function onKey(e) {
      if (e.key === 'Escape') closeSearch()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [searchActive, closeSearch])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (q) navigate(`/productpedia?q=${encodeURIComponent(q)}`)
    else navigate('/productpedia')
  }

  const toggleSearch = () => {
    if (searchActive) closeSearch()
    else openSearch()
  }

  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-atmosphere" aria-hidden>
        <div className="hero-atmosphere__gradient" />
        <div className="hero-atmosphere__noise" />
        <div className="hero-atmosphere__vignette" />
      </div>

      <div className="hero-nav-band">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          heroEmbed
        />
      </div>

      <div className="hero-main hero-main--immersive">
        <nav className="hero-ambient" aria-label="Primary pages">
          {AMBIENT_LINKS.map(({ label, to, position }) => (
            <Link
              key={to}
              to={to}
              className={`hero-ambient__link hero-ambient__link--${position}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hero-centerpiece">
          <div className="hero-brand-cluster">
            <div
              className="hero-brand-text"
              aria-live="polite"
              data-search={searchActive}
            >
              <span
                className={`hero-brand-line ${!searchActive ? 'hero-brand-line--visible' : 'hero-brand-line--exit'}`}
              >
                SourceCentral
              </span>
              <span
                className={`hero-brand-line ${searchActive ? 'hero-brand-line--visible' : 'hero-brand-line--hidden'}`}
              >
                Search any product or HS code
              </span>
            </div>

            <button
              type="button"
              className="hero-search-trigger"
              onClick={toggleSearch}
              aria-expanded={searchActive}
              aria-label={searchActive ? 'Close search' : 'Open product search'}
            >
              <svg
                className="hero-search-trigger__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {searchActive ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <div
            className={`hero-search-panel ${searchActive ? 'hero-search-panel--open' : ''}`}
            aria-hidden={!searchActive}
          >
            <form className="hero-search-form" onSubmit={handleSearchSubmit}>
              <input
                ref={inputRef}
                type="search"
                className="hero-search-input"
                placeholder="e.g. Sodium Bicarbonate, 2836.30, steel flanges"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
