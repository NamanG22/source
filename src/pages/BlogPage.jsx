import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { blogPosts } from '../data/blogPosts'
import './BlogPage.css'

const ALL = 'All Blogs'

function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(ALL)

  const categories = useMemo(() => {
    const unique = [...new Set(blogPosts.map((p) => p.category))]
    const order = [
      'Sourcing Guide',
      'Technology',
      'Trade & Compliance',
      'News',
      'Industry-Specific Sourcing',
      'Others',
    ]
    unique.sort((a, b) => {
      const ia = order.indexOf(a)
      const ib = order.indexOf(b)
      if (ia === -1 && ib === -1) return a.localeCompare(b)
      if (ia === -1) return 1
      if (ib === -1) return -1
      return ia - ib
    })
    return [ALL, ...unique]
  }, [])

  const filtered =
    activeCategory === ALL ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)

  const sorted = useMemo(
    () => [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [filtered],
  )

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="blog-page">
        <header className="blog-hero">
          <h1 className="blog-title">The Source Central Blog</h1>
          <p className="blog-lede">
            Articles, guides, and practical notes on global sourcing, compliance, and supplier operations—so you can
            navigate supply chains with more confidence.
          </p>
        </header>

        <div className="blog-filters" role="tablist" aria-label="Blog categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`blog-filter-btn ${activeCategory === cat ? 'blog-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {sorted.length === 0 ? (
          <p className="blog-empty">No posts in this category yet.</p>
        ) : (
          <div className="blog-grid">
            {sorted.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-visual">
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>
                      {new Date(post.date + 'T12:00:00').toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="blog-card-read">{post.readMin} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <Link to="/" className="blog-back">
          ← Back to home
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage
