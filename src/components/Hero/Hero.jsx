import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const ROTATING_WORDS = ['easily.', 'smarter.', 'faster.', 'with confidence.']

function Hero() {
  const [productPediaQuery, setProductPediaQuery] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, 2500)
    return () => clearInterval(t)
  }, [])

  const handleProductPediaSearch = () => {
    const q = productPediaQuery.trim()
    if (q) navigate(`/productpedia?q=${encodeURIComponent(q)}`)
    else navigate('/productpedia')
  }

  const handleSuggestion = (suggestion) => {
    setProductPediaQuery(suggestion)
  }

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-brand">
          <div className="hero-logo">Source Central</div>
          <h1 className="hero-headline">
            Source from India’s 60M+ MSME{' '}
            <span className="hero-rotating" key={wordIndex}>
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>
          <div className="hero-tagline">
            Intelligence-led B2B sourcing — discover, verify, and connect with verified manufacturers.
          </div>
        </div>

        {/* ProductPedia search */}
        <div className="hero-productpedia">
          <div className="productpedia-label">ProductPedia</div>
          <div className="productpedia-input-wrapper">
            <input
              type="text"
              placeholder="Search by product, HSN code, or keyword..."
              value={productPediaQuery}
              onChange={(e) => setProductPediaQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleProductPediaSearch()}
              className="productpedia-input"
            />
            <button
              type="button"
              onClick={handleProductPediaSearch}
              className="productpedia-button"
              title="Search"
            >
              Search
            </button>
          </div>
          <div className="hero-suggestions">
            <button type="button" className="suggestion-chip" onClick={() => handleSuggestion('HSN 6109')}>
              HSN 6109
            </button>
            <button type="button" className="suggestion-chip" onClick={() => handleSuggestion('Textiles')}>
              Textiles
            </button>
            <button type="button" className="suggestion-chip" onClick={() => handleSuggestion('Electronics')}>
              Electronics
            </button>
            <button type="button" className="suggestion-chip" onClick={() => handleSuggestion('Engineering goods')}>
              Engineering goods
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/668ba543ae98dc7b65f60e40_hero_bg.avif"
        alt=""
        className="hero-background-image"
        aria-hidden
      />
    </div>
  )
}

export default Hero
