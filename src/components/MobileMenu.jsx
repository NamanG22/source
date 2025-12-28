import { useState } from 'react'
import './MobileMenu.css'

function MobileMenu({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null)

  if (!isOpen) return null

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const handleClose = () => {
    onClose()
    setOpenDropdown(null)
  }

  const ChevronDown = () => (
    <svg className="dropdown-chevron" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.4242 4.78995C14.1899 4.55564 13.81 4.55564 13.5757 4.78995L8.28282 10.0828C8.12661 10.2391 7.87334 10.2391 7.71713 10.0828L2.42424 4.78995C2.18992 4.55564 1.81003 4.55564 1.57571 4.78995C1.3414 5.02427 1.3414 5.40416 1.57571 5.63848L6.8686 10.9314C7.49344 11.5562 8.50651 11.5562 9.13135 10.9314L14.4242 5.63848C14.6586 5.40416 14.6586 5.02427 14.4242 4.78995Z" fill="currentColor"></path>
    </svg>
  )

  return (
    <div className="nav-menu-adaptive">
      <div className="menu-content">
        {/* Platform Dropdown */}
        <div className="menu-section">
          <button 
            className="menu-dropdown-toggle" 
            onClick={() => toggleDropdown('platform')}
            aria-expanded={openDropdown === 'platform'}
          >
            <span>Platform</span>
            <div className={openDropdown === 'platform' ? 'dropdown-chevron rotated' : 'dropdown-chevron'}>
              <ChevronDown />
            </div>
          </button>
          {openDropdown === 'platform' && (
            <div className="menu-dropdown-content">
              <a href="/supplier-discovery" className="menu-item" onClick={handleClose}>
                <div className="menu-item-icon">🔍</div>
                <div className="menu-item-text">
                  <div className="menu-item-title">Supplier Discovery</div>
                  <div className="menu-item-desc">AI-powered sourcing from 1.2M+ suppliers in 100 countries</div>
                </div>
              </a>
              <a href="/product-ideation" className="menu-item" onClick={handleClose}>
                <div className="menu-item-icon">💡</div>
                <div className="menu-item-text">
                  <div className="menu-item-title">Product Ideation</div>
                  <div className="menu-item-desc">From idea to launch—AI-powered product discovery and design in one place</div>
                </div>
              </a>
              <a href="/supplier-outreach" className="menu-item" onClick={handleClose}>
                <div className="menu-item-icon">📧</div>
                <div className="menu-item-text">
                  <div className="menu-item-title">Supplier Outreach</div>
                  <div className="menu-item-desc">Let AI handle supplier outreach and follow-ups</div>
                </div>
              </a>
              <a href="/quote-intelligence" className="menu-item" onClick={handleClose}>
                <div className="menu-item-icon">📊</div>
                <div className="menu-item-text">
                  <div className="menu-item-title">Quote Intelligence</div>
                  <div className="menu-item-desc">AI-powered RFQs—auto-collect, compare</div>
                </div>
              </a>
            </div>
          )}
        </div>

        <div className="menu-divider"></div>

        {/* Solutions Dropdown */}
        <div className="menu-section">
          <button 
            className="menu-dropdown-toggle" 
            onClick={() => toggleDropdown('solutions')}
            aria-expanded={openDropdown === 'solutions'}
          >
            <span>Solutions</span>
            <div className={openDropdown === 'solutions' ? 'dropdown-chevron rotated' : 'dropdown-chevron'}>
              <ChevronDown />
            </div>
          </button>
          {openDropdown === 'solutions' && (
            <div className="menu-dropdown-content">
              <div className="menu-category">
                <div className="menu-category-title">By Category</div>
                <a href="/category/apparel-footwear-suppliers" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">👕</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Apparel & Footwear</div>
                  </div>
                </a>
                <a href="/category/jewelry-suppliers" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">💎</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Jewelry</div>
                  </div>
                </a>
                <a href="/category/consumer-electronics-suppliers" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">📱</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Consumer Electronics</div>
                  </div>
                </a>
                <a href="/category/beauty-and-personal-care" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">💄</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Beauty & Personal Care</div>
                  </div>
                </a>
                <a href="/category/food-and-beverage" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🍔</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Food & Beverages</div>
                  </div>
                </a>
                <a href="/category/all-categories" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">All Categories</div>
                  </div>
                </a>
              </div>
              <div className="menu-category">
                <div className="menu-category-title">By Country</div>
                <a href="/country/mexico" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇲🇽</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Mexico</div>
                  </div>
                </a>
                <a href="/country/china" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇨🇳</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">China</div>
                  </div>
                </a>
                <a href="/country/vietnam" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇻🇳</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Vietnam</div>
                  </div>
                </a>
                <a href="/country/india" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇮🇳</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">India</div>
                  </div>
                </a>
                <a href="/country/turkey" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇹🇷</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Turkey</div>
                  </div>
                </a>
                <a href="/country/usa" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇺🇸</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">USA</div>
                  </div>
                </a>
                <a href="/country/italy" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇮🇹</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Italy</div>
                  </div>
                </a>
                <a href="/country/indonesia" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇮🇩</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Indonesia</div>
                  </div>
                </a>
                <a href="/country/germany" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇩🇪</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Germany</div>
                  </div>
                </a>
                <a href="/country/philippines" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🇵🇭</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Philippines</div>
                  </div>
                </a>
              </div>
              <div className="menu-category">
                <div className="menu-category-title">By Company</div>
                <a href="/company/brand" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">⭐</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Consumer Brand</div>
                  </div>
                </a>
                <a href="/company/importers" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-icon">🚢</div>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Importer</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="menu-divider"></div>

        {/* Resources Dropdown */}
        <div className="menu-section">
          <button 
            className="menu-dropdown-toggle" 
            onClick={() => toggleDropdown('resources')}
            aria-expanded={openDropdown === 'resources'}
          >
            <span>Resources</span>
            <div className={openDropdown === 'resources' ? 'dropdown-chevron rotated' : 'dropdown-chevron'}>
              <ChevronDown />
            </div>
          </button>
          {openDropdown === 'resources' && (
            <div className="menu-dropdown-content">
              <div className="menu-category">
                <div className="menu-category-title">Learn & Connect</div>
                <a href="/blog" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Blog</div>
                    <div className="menu-item-desc">View the latest trends and news in supply chain</div>
                  </div>
                </a>
                <a href="/partner" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Partner</div>
                    <div className="menu-item-desc">Leverage our platform to power your growth</div>
                  </div>
                </a>
                <a href="/about-us" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">About Us</div>
                    <div className="menu-item-desc">Learn more about our mission and team</div>
                  </div>
                </a>
                <a href="/career" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Career</div>
                    <div className="menu-item-desc">Join us in AI-driven product sourcing</div>
                  </div>
                </a>
                <a href="https://help.sourcentral.com" target="_blank" rel="noopener noreferrer" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Help</div>
                    <div className="menu-item-desc">Find help and answers to common questions</div>
                  </div>
                </a>
              </div>
              <div className="menu-category">
                <div className="menu-category-title">Comparison</div>
                <a href="/competitor/competitor-alibaba" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Source Central vs Alibaba</div>
                    <div className="menu-item-desc">Choosing the right sourcing partner</div>
                  </div>
                </a>
                <a href="/competitor/competitor-global-sources" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Source Central vs Global Sources</div>
                    <div className="menu-item-desc">Smarter choices for global sourcing</div>
                  </div>
                </a>
                <a href="/competitor/competitor-importyeti" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Source Central vs ImportYeti</div>
                    <div className="menu-item-desc">From browsing to AI matching</div>
                  </div>
                </a>
                <a href="/competitor/competitor-importgenius" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Source Central vs ImportGenius</div>
                    <div className="menu-item-desc">From raw data to intelligent decisions</div>
                  </div>
                </a>
                <a href="/competitor/competitor-chatgpt" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Source Central vs ChatGPT</div>
                    <div className="menu-item-desc">From general AI to sourcing intelligence</div>
                  </div>
                </a>
              </div>
              <div className="menu-category">
                <div className="menu-category-title">Tool</div>
                <a href="https://www.sourcentral.com/tariff-calculator" className="menu-item" onClick={handleClose}>
                  <div className="menu-item-text">
                    <div className="menu-item-title">Tariff Calculator</div>
                    <div className="menu-item-desc">Quickly calculate total import duties</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="menu-divider"></div>

        <a href="/pricing" className="menu-link" onClick={handleClose}>Pricing</a>
        <div className="menu-divider"></div>
        <a href="https://airtable.com/appYe8ucpUyLBWajT/pagcX2GvDezFe6Xev/form?prefill_ID=" target="_blank" rel="noopener noreferrer" className="menu-link" onClick={handleClose}>Join as supplier</a>
        <div className="menu-divider"></div>
        <a href="https://login.sourcentral.com/u/login?state=hKFo2SBqSHE1VC1oai1VUkQ3T3VCMjlLRFJuOUVPV3lJR2RSQaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEpscnlyM1NJLTE2b21RTDZvc3hmNjgxU2o3VnpvUXUzo2NpZNkgWnQ5b3VnRllYZzR1UkdMM2x0NVhKck1DU0Q3aEZmR1Y" target="_blank" rel="noopener noreferrer" className="menu-link" onClick={handleClose}>Log in</a>
        <div className="menu-divider"></div>
        <a href="https://app.sourcentral.com/api/auth/login?screen_hint=signup" target="_blank" rel="noopener noreferrer" className="menu-button-primary" onClick={handleClose}>Sign up for free</a>
      </div>
    </div>
  )
}

export default MobileMenu

