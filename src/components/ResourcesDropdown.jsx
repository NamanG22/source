import './ResourcesDropdown.css'

function ResourcesDropdown({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="resources-list" onMouseLeave={onClose}>
      <div className="resources-list-content">
        <div className="resources-category">
          <div className="resources-category-title">Learn & Connect</div>
          <div className="resources-items">
            <a href="/blog" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Blog</div>
                <div className="resources-item-desc">View the latest trends and news in supply chain</div>
              </div>
            </a>
            <a href="/partner" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Partner</div>
                <div className="resources-item-desc">Leverage our platform to power your growth</div>
              </div>
            </a>
            <a href="/about-us" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">About Us</div>
                <div className="resources-item-desc">Learn more about our mission and team</div>
              </div>
            </a>
            <a href="/career" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Career</div>
                <div className="resources-item-desc">Join us in AI-driven product sourcing</div>
              </div>
            </a>
            <a href="https://help.sourcentral.com/en" target="_blank" rel="noopener noreferrer" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Help</div>
                <div className="resources-item-desc">Find help and answers to common questions</div>
              </div>
            </a>
          </div>
        </div>
        <div className="resources-category">
          <div className="resources-category-title">Comparison</div>
          <div className="resources-items">
            <a href="/competitor/competitor-alibaba" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Source Central vs Alibaba</div>
                <div className="resources-item-desc">Choosing the right sourcing partner</div>
              </div>
            </a>
            <a href="/competitor/competitor-global-sources" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Source Central vs Global Sources</div>
                <div className="resources-item-desc">Smarter choices for global sourcing</div>
              </div>
            </a>
            <a href="/competitor/competitor-importyeti" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Source Central vs ImportYeti</div>
                <div className="resources-item-desc">From browsing to AI matching</div>
              </div>
            </a>
            <a href="/competitor/competitor-importgenius" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Source Central vs ImportGenius</div>
                <div className="resources-item-desc">From raw data to intelligent decisions</div>
              </div>
            </a>
            <a href="/competitor/competitor-chatgpt" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Source Central vs ChatGPT</div>
                <div className="resources-item-desc">From general AI to sourcing intelligence</div>
              </div>
            </a>
          </div>
        </div>
        <div className="resources-category">
          <div className="resources-category-title">Tool</div>
          <div className="resources-items">
            <a href="https://www.sourcentral.com/tariff-calculator" className="resources-item">
              <div className="resources-item-text">
                <div className="resources-item-title">Tariff Calculator</div>
                <div className="resources-item-desc">Quickly calculate total import duties</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesDropdown

