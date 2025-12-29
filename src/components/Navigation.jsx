import { useState } from 'react'
import PlatformDropdown from './PlatformDropdown'
import SolutionsDropdown from './SolutionsDropdown'
import ResourcesDropdown from './ResourcesDropdown'
import './Navigation.css'

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/" className="logo-link">
              <div className="logo-text">Source Central</div>
            </a>
            <div 
              className="nav-link-wrapper"
              onMouseEnter={() => setIsPlatformOpen(true)}
              onMouseLeave={() => setIsPlatformOpen(false)}
            >
              <a href="#" className="nav-link">
                <span>Platform</span>
                <svg className="dropdown-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.10487 5.54846C4.35425 5.33025 4.73331 5.35552 4.95152 5.6049L7.69894 8.74481C7.85831 8.92694 8.14164 8.92694 8.301 8.74481L11.0484 5.6049C11.2666 5.35552 11.6457 5.33025 11.8951 5.54846C12.1445 5.76667 12.1697 6.14572 11.9515 6.3951L9.20409 9.53502C8.56664 10.2635 7.43331 10.2635 6.79585 9.53502L4.04843 6.3951C3.83022 6.14572 3.85549 5.76667 4.10487 5.54846Z" fill="currentColor"></path>
                </svg>
              </a>
              <PlatformDropdown isOpen={isPlatformOpen} onClose={() => setIsPlatformOpen(false)} />
            </div>
            <div 
              className="nav-link-wrapper"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <a href="#" className="nav-link">
                <span>Solutions</span>
                <svg className="dropdown-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.10487 5.54846C4.35425 5.33025 4.73331 5.35552 4.95152 5.6049L7.69894 8.74481C7.85831 8.92694 8.14164 8.92694 8.301 8.74481L11.0484 5.6049C11.2666 5.35552 11.6457 5.33025 11.8951 5.54846C12.1445 5.76667 12.1697 6.14572 11.9515 6.3951L9.20409 9.53502C8.56664 10.2635 7.43331 10.2635 6.79585 9.53502L4.04843 6.3951C3.83022 6.14572 3.85549 5.76667 4.10487 5.54846Z" fill="currentColor"></path>
                </svg>
              </a>
              <SolutionsDropdown isOpen={isSolutionsOpen} onClose={() => setIsSolutionsOpen(false)} />
            </div>
            <div 
              className="nav-link-wrapper"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <a href="#" className="nav-link">
                <span>Resources</span>
                <svg className="dropdown-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.10487 5.54846C4.35425 5.33025 4.73331 5.35552 4.95152 5.6049L7.69894 8.74481C7.85831 8.92694 8.14164 8.92694 8.301 8.74481L11.0484 5.6049C11.2666 5.35552 11.6457 5.33025 11.8951 5.54846C12.1445 5.76667 12.1697 6.14572 11.9515 6.3951L9.20409 9.53502C8.56664 10.2635 7.43331 10.2635 6.79585 9.53502L4.04843 6.3951C3.83022 6.14572 3.85549 5.76667 4.10487 5.54846Z" fill="currentColor"></path>
                </svg>
              </a>
              <ResourcesDropdown isOpen={isResourcesOpen} onClose={() => setIsResourcesOpen(false)} />
            </div>
          </div>
          <div className="nav-right">
            <a href="https://calendly.com/sourcentral/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="nav-text-link">Book a demo</a>
            <a href="https://app.sourcentral.com/api/auth/login" className="nav-text-link">Log in</a>
            <a href="https://app.sourcentral.com/api/auth/login?screen_hint=signup" className="nav-button">Sign up</a>
            <div className="mobile-menu-toggle">
              <button 
                className="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="menu-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.57573 2.57574C2.81004 2.34142 3.18994 2.34142 3.42426 2.57574L7.99999 7.15147L12.5757 2.57574C12.81 2.34142 13.1899 2.34142 13.4243 2.57574C13.6586 2.81005 13.6586 3.18995 13.4243 3.42427L8.84852 8L13.4243 12.5757C13.6586 12.8101 13.6586 13.19 13.4243 13.4243C13.1899 13.6586 12.81 13.6586 12.5757 13.4243L7.99999 8.84853L3.42426 13.4243C3.18994 13.6586 2.81004 13.6586 2.57573 13.4243C2.34142 13.19 2.34142 12.8101 2.57573 12.5757L7.15147 8L2.57573 3.42427C2.34142 3.18995 2.34142 2.81005 2.57573 2.57574Z" fill="currentColor"></path>
                  </svg>
                ) : (
                  <svg className="menu-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.899994 2.5C0.899994 2.16863 1.16862 1.9 1.49999 1.9H14.5C14.8314 1.9 15.1 2.16863 15.1 2.5C15.1 2.83137 14.8314 3.1 14.5 3.1H1.49999C1.16862 3.1 0.899994 2.83137 0.899994 2.5Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.899994 8C0.899994 7.66863 1.16862 7.4 1.49999 7.4H14.5C14.8314 7.4 15.1 7.66863 15.1 8C15.1 8.33137 14.8314 8.6 14.5 8.6H1.49999C1.16862 8.6 0.899994 8.33137 0.899994 8Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.899994 13.5C0.899994 13.1686 1.16862 12.9 1.49999 12.9H14.5C14.8314 12.9 15.1 13.1686 15.1 13.5C15.1 13.8314 14.8314 14.1 14.5 14.1H1.49999C1.16862 14.1 0.899994 13.8314 0.899994 13.5Z" fill="currentColor"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation

