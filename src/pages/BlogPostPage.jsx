import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { getPostBySlug } from '../data/blogPosts'
import './BlogPostPage.css'

function BlogPostPage() {
  const { slug } = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const post = slug ? getPostBySlug(slug) : null

  if (!post) {
    return (
      <div className="App">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <main className="blog-post-page">
          <p className="blog-post-missing">This article could not be found.</p>
          <Link to="/blog" className="blog-post-back">
            ← Back to blog
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const paragraphs = post.body.trim().split(/\n\n+/).filter(Boolean)

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <article className="blog-post-page">
        <header className="blog-post-header">
          <p className="blog-post-category">{post.category}</p>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-meta">
            <time dateTime={post.date}>
              {new Date(post.date + 'T12:00:00').toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true"> · </span>
            <span>{post.readMin} min read</span>
          </p>
          <p className="blog-post-excerpt">{post.excerpt}</p>
        </header>
        <div className="blog-post-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link to="/blog" className="blog-post-back">
          ← Back to blog
        </Link>
      </article>
      <Footer />
    </div>
  )
}

export default BlogPostPage
