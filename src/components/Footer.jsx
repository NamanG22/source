import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [openSections, setOpenSections] = useState({
    platform: false,
    solutions: false,
    resources: false,
    contact: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }


  const ChevronIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.10487 5.54846C4.35425 5.33025 4.73331 5.35552 4.95152 5.6049L7.69894 8.74481C7.85831 8.92694 8.14164 8.92694 8.301 8.74481L11.0484 5.6049C11.2666 5.35552 11.6457 5.33025 11.8951 5.54846C12.1445 5.76667 12.1697 6.14572 11.9515 6.3951L9.20409 9.53502C8.56664 10.2635 7.43331 10.2635 6.79585 9.53502L4.04843 6.3951C3.83022 6.14572 3.85549 5.76667 4.10487 5.54846Z" fill="currentColor"></path>
    </svg>
  )

  const FacebookIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.2749 15V8.7H11.1876L11.5 5.9H9.2749V4.53623C9.2749 3.81523 9.29332 3.1 10.3008 3.1H11.3213V1.0981C11.3213 1.068 10.4447 1 9.55797 1C7.706 1 6.54638 2.16004 6.54638 4.29014V5.9H4.5V8.7H6.54638V15H9.2749Z" fill="currentColor"></path>
    </svg>
  )

  const LinkedInIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 14.5H11.9V9.95063C11.9 8.70263 11.3495 8.00635 10.3621 8.00635C9.28765 8.00635 8.65 8.73188 8.65 9.95063V14.5H6.05V6.05H8.65V7.00024C8.65 7.00024 9.46574 5.56885 11.3039 5.56885C13.1428 5.56885 14.5 6.69097 14.5 9.01277V14.5ZM3.0873 4.69858C2.21045 4.69858 1.5 3.98232 1.5 3.09897C1.5 2.21627 2.21045 1.5 3.0873 1.5C3.9635 1.5 4.67395 2.21627 4.67395 3.09897C4.6746 3.98232 3.9635 4.69858 3.0873 4.69858ZM1.5 14.5H4.75V6.05H1.5V14.5Z" fill="currentColor"></path>
    </svg>
  )

  const InstagramIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9123 1.49995H5.08741C3.10929 1.49995 1.49995 3.10936 1.49995 5.08748V10.9124C1.49995 12.8906 3.10929 14.5 5.08741 14.5H10.9123C12.8906 14.5 14.5 12.8905 14.5 10.9124V5.08748C14.5 3.10936 12.8906 1.49995 10.9123 1.49995ZM13.3466 10.9124C13.3466 12.2546 12.2546 13.3465 10.9124 13.3465H5.08741C3.74528 13.3466 2.65338 12.2546 2.65338 10.9124V5.08748C2.65338 3.74536 3.74528 2.65338 5.08741 2.65338H10.9123C12.2545 2.65338 13.3465 3.74536 13.3465 5.08748V10.9124H13.3466ZM7.99996 4.65034C6.15286 4.65034 4.65019 6.15302 4.65019 8.00011C4.65019 9.84713 6.15286 11.3497 7.99996 11.3497C9.84705 11.3497 11.3497 9.84713 11.3497 8.00011C11.3497 6.15302 9.84705 4.65034 7.99996 4.65034ZM7.99996 10.1962C6.78894 10.1962 5.80361 9.21105 5.80361 8.00003C5.80361 6.78894 6.78886 5.80369 7.99996 5.80369C9.21105 5.80369 10.1963 6.78894 10.1963 8.00003C10.1963 9.21105 9.21097 10.1962 7.99996 10.1962ZM10.8927 3.91992C11.0497 3.76228 11.268 3.67231 11.4902 3.67231C11.7132 3.67231 11.9316 3.76228 12.0885 3.91992C12.2461 4.07678 12.3361 4.29516 12.3361 4.51816C12.3361 4.74038 12.2461 4.95877 12.0885 5.1164C11.9308 5.27327 11.7132 5.364 11.4902 5.364C11.268 5.364 11.0496 5.27327 10.8927 5.1164C10.7351 4.95877 10.6444 4.74046 10.6444 4.51816C10.6444 4.29516 10.735 4.07678 10.8927 3.91992Z" fill="currentColor"></path>
    </svg>
  )

  return (
    <footer className="footer">
      <div className="div-block-29">
        <div className="div-block-30">
          <div className="div-block-66">
            <div className="code-embed-10-copy w-embed">
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>Source Central</span>
            </div>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=61562078880143" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-6 w-inline-block"
          >
            <div className="code-embed-9 w-embed">
              <FacebookIcon />
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/company/sourcentral/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-6 w-inline-block"
          >
            <div className="code-embed-9 w-embed">
              <LinkedInIcon />
            </div>
          </a>
          <a 
            href="https://www.instagram.com/sourcentral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-6 w-inline-block"
          >
            <div className="code-embed-9 w-embed">
              <InstagramIcon />
            </div>
          </a>
        </div>
        <div className="div-block-2697">
          <div className="text-block-81">
            Bringing you the latest insights on global supply chain trends to help you navigate product sourcing with confidence.
          </div>
          <div className="code-embed-15 w-embed w-iframe">
            <iframe 
              src="https://embeds.beehiiv.com/e21b6d03-4ffd-499e-8bf7-d7e9660ee84f?slim=true" 
              data-test-id="beehiiv-embed" 
              height="52" 
              frameBorder="0" 
              scrolling="no" 
              style={{ margin: '0px', borderRadius: '0px !important', backgroundColor: 'transparent' }}
              title="Newsletter subscription"
            ></iframe>
          </div>
        </div>
        <div className="div-block-63">
          {/* Desktop Navigation */}
          <div className="div-block-64">
            <div className="text-block-27">Platform</div>
            <a href="/" aria-current="page" className="link-block-102 w-inline-block w--current">
              <div className="text-block-28">Overview</div>
            </a>
            <a href="/supplier-discovery" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Discovery</div>
            </a>
            <a href="/product-ideation" className="link-block-102 w-inline-block">
              <div className="text-block-28">Product Ideation</div>
            </a>
            <a href="/supplier-outreach" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Outreach</div>
            </a>
            <a href="/quote-intelligence" className="link-block-102 w-inline-block">
              <div className="text-block-28">Quote Intelligence</div>
            </a>
            <a href="/pricing" className="link-block-102 w-inline-block">
              <div className="text-block-28">Pricing</div>
            </a>
            <div className="div-block-64-copy inside">
              <div className="text-block-27">Solutions</div>
              <a href="/category/apparel-footwear-suppliers" className="link-block-102 w-inline-block">
                <div className="text-block-28">Apparel &amp; Footwear</div>
              </a>
              <a href="/category/jewelry-suppliers" className="link-block-102 w-inline-block">
                <div className="text-block-28">Jewelry</div>
              </a>
              <a href="/category/consumer-electronics-suppliers" className="link-block-102 w-inline-block">
                <div className="text-block-28">Consumer Electronics</div>
              </a>
            </div>
          </div>
          <div className="div-block-64-copy">
            <a href="/category/beauty-and-personal-care" className="link-block-102 w-inline-block">
              <div className="text-block-28">Beauty &amp; Personal Care</div>
            </a>
            <a href="/category/food-and-beverage" className="link-block-102 w-inline-block">
              <div className="text-block-28">Food &amp; Beverages</div>
            </a>
            <a href="/category/all-categories" className="link-block-102 w-inline-block">
              <div className="text-block-28">All Categories</div>
            </a>
            <div className="divider-line"></div>
            <a href="/country/mexico" className="link-block-102 w-inline-block">
              <div className="text-block-28">Mexico</div>
            </a>
            <a href="/country/china" className="link-block-102 w-inline-block">
              <div className="text-block-28">China</div>
            </a>
            <a href="/country/vietnam" className="link-block-102 w-inline-block">
              <div className="text-block-28">Vietnam</div>
            </a>
            <a href="/country/india" className="link-block-102 w-inline-block">
              <div className="text-block-28">India</div>
            </a>
            <a href="/country/turkey" className="link-block-102 w-inline-block">
              <div className="text-block-28">Turkey</div>
            </a>
            <a href="/country/usa" className="link-block-102 w-inline-block">
              <div className="text-block-28">USA</div>
            </a>
            <a href="/country/italy" className="link-block-102 w-inline-block">
              <div className="text-block-28">Italy</div>
            </a>
            <a href="/country/indonesia" className="link-block-102 w-inline-block">
              <div className="text-block-28">Indonesia</div>
            </a>
          </div>
          <div className="div-block-64-copy outside">
            <a href="/country/indonesia" className="link-block-102 w-inline-block">
              <div className="text-block-28">Indonesia</div>
            </a>
            <a href="/country/germany" className="link-block-102 w-inline-block">
              <div className="text-block-28">Germany</div>
            </a>
            <a href="/country/philippines" className="link-block-102 w-inline-block">
              <div className="text-block-28">Philippines</div>
            </a>
            <div className="divider-line"></div>
            <a href="/company/importers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Importer</div>
            </a>
            <a href="/company/brand" className="link-block-102 w-inline-block">
              <div className="text-block-28">Consumer Brand</div>
            </a>
            <div className="div-block-64-copy inside">
              <div className="text-block-27">Resources</div>
              <a href="/blog" className="link-block-102 w-inline-block">
                <div className="text-block-28">Blog<br/></div>
              </a>
              <a href="/partner" className="link-block-102 w-inline-block">
                <div className="text-block-28">Partner</div>
              </a>
              <a href="/about-us" className="link-block-102 w-inline-block">
                <div className="text-block-28">About Us</div>
              </a>
              <a href="/career" className="link-block-102 w-inline-block">
                <div className="text-block-28">Career</div>
              </a>
            </div>
          </div>
          <div className="div-block-64-copy">
            <a href="https://help.sourcentral.com/en" target="_blank" rel="noopener noreferrer" className="link-block-102 w-inline-block">
              <div className="text-block-28">Help Center<br/></div>
            </a>
            <div className="divider-line"></div>
            <a href="/competitor/competitor-alibaba" className="link-block-102 w-inline-block">
              <div className="text-block-28">Source Central vs Alibaba<br/></div>
            </a>
            <a href="/competitor/competitor-global-sources" className="link-block-102 w-inline-block">
              <div className="text-block-28">Source Central vs Global Sources<br/></div>
            </a>
            <a href="/competitor/competitor-importyeti" className="link-block-102 w-inline-block">
              <div className="text-block-28">Source Central vs ImportYeti</div>
            </a>
            <a href="/competitor/competitor-importgenius" className="link-block-102 w-inline-block">
              <div className="text-block-28">Source Central vs ImportGenius</div>
            </a>
            <a href="/competitor/competitor-chatgpt" className="link-block-102 w-inline-block">
              <div className="text-block-28">Source Central vs ChatGPT</div>
            </a>
            <div className="divider-line"></div>
            <a href="https://www.sourcentral.com/tariff-calculator" className="link-block-102 w-inline-block">
              <div className="text-block-28">Tariff Calculator</div>
            </a>
            <div className="div-block-64-copy inside">
              <div className="text-block-27">Contact us</div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScIQqZhgscEgCDsnn6-eIVzqq4vvIzuluXOUexwtJJgvwHclQ/viewform?usp=header" className="link-block-102 w-inline-block">
                <div className="text-block-28">Join as supplier</div>
              </a>
              <a href="tel:+1(855)-691-2549" className="link-block-102 w-inline-block">
                <div className="text-block-28">+1(855)-691-2549</div>
              </a>
              <a href="mailto:support@sourcentral.com" className="link-block-102 w-inline-block">
                <div className="text-block-28">support@sourcentral.com</div>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="div-block-2792">
          <div 
            className="footer_platform_cell"
            onClick={() => toggleSection('platform')}
          >
            <div className="text-block-27-copy">Platform</div>
            <div className={`code-embed-919 w-embed ${openSections.platform ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_platform_content" 
            style={{ display: openSections.platform ? 'block' : 'none' }}
          >
            <a href="/" className="link-block-102 w-inline-block">
              <div className="text-block-28">Overview</div>
            </a>
            <a href="/supplier-discovery" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Discovery</div>
            </a>
            <a href="/product-ideation" className="link-block-102 w-inline-block">
              <div className="text-block-28">Product Ideation</div>
            </a>
            <a href="/supplier-outreach" className="link-block-102 w-inline-block">
              <div className="text-block-28">Supplier Outreach</div>
            </a>
            <a href="/quote-intelligence" className="link-block-102 w-inline-block">
              <div className="text-block-28">Quote Intelligence</div>
            </a>
            <a href="/pricing" className="link-block-102 w-inline-block">
              <div className="text-block-28">Pricing</div>
            </a>
          </div>
          <div className="divider"></div>
          <div 
            className="footer_solutions_cell"
            onClick={() => toggleSection('solutions')}
          >
            <div className="text-block-27-copy">Solutions</div>
            <div className={`code-embed-919 w-embed ${openSections.solutions ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_soulutions_content"
            style={{ display: openSections.solutions ? 'flex' : 'none' }}
          >
            <a href="/category/apparel-footwear-suppliers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Apparel &amp; Footwear</div>
            </a>
            <a href="/category/jewelry-suppliers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Jewelry</div>
            </a>
            <a href="/category/consumer-electronics-suppliers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Consumer Electronics</div>
            </a>
            <a href="/category/beauty-and-personal-care" className="link-block-102 w-inline-block">
              <div className="text-block-28">Beauty &amp; Personal Care</div>
            </a>
            <a href="/category/food-and-beverage" className="link-block-102 w-inline-block">
              <div className="text-block-28">Food &amp; Beverages</div>
            </a>
            <a href="/category/all-categories" className="link-block-102 w-inline-block">
              <div className="text-block-28">All Categories</div>
            </a>
            <div className="divider"></div>
            <a href="/country/mexico" className="link-block-102 w-inline-block">
              <div className="text-block-28">Mexico</div>
            </a>
            <a href="/country/china" className="link-block-102 w-inline-block">
              <div className="text-block-28">China</div>
            </a>
            <a href="/country/vietnam" className="link-block-102 w-inline-block">
              <div className="text-block-28">Vietnam</div>
            </a>
            <a href="/country/india" className="link-block-102 w-inline-block">
              <div className="text-block-28">India</div>
            </a>
            <a href="/country/turkey" className="link-block-102 w-inline-block">
              <div className="text-block-28">Turkey</div>
            </a>
            <a href="/country/usa" className="link-block-102 w-inline-block">
              <div className="text-block-28">USA</div>
            </a>
            <a href="/country/italy" className="link-block-102 w-inline-block">
              <div className="text-block-28">Italy</div>
            </a>
            <a href="/country/indonesia" className="link-block-102 w-inline-block">
              <div className="text-block-28">Indonesia</div>
            </a>
            <a href="/country/germany" className="link-block-102 w-inline-block">
              <div className="text-block-28">Germany</div>
            </a>
            <a href="/country/philippines" className="link-block-102 w-inline-block">
              <div className="text-block-28">Philippines</div>
            </a>
            <div className="divider"></div>
            <a href="/company/importers" className="link-block-102 w-inline-block">
              <div className="text-block-28">Importer</div>
            </a>
            <a href="/company/brand" className="link-block-102 w-inline-block">
              <div className="text-block-28">Consumer Brand</div>
            </a>
          </div>
          <div className="divider"></div>
          <div 
            className="footer_resources_cell"
            onClick={() => toggleSection('resources')}
          >
            <div className="text-block-27-copy">Resources</div>
            <div className={`code-embed-919 w-embed ${openSections.resources ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_resources_content"
            style={{ display: openSections.resources ? 'flex' : 'none' }}
          >
            <a href="/blog" className="link-block-102 w-inline-block">
              <div className="text-block-28">Blog<br/></div>
            </a>
            <a href="/about-us" className="link-block-102 w-inline-block">
              <div className="text-block-28">About Us</div>
            </a>
            <a href="/career" className="link-block-102 w-inline-block">
              <div className="text-block-28">Career</div>
            </a>
            <a href="https://help.sourcentral.com/en" target="_blank" rel="noopener noreferrer" className="link-block-102 w-inline-block">
              <div className="text-block-28">Help Center<br/></div>
            </a>
            <a href="https://airtable.com/appYe8ucpUyLBWajT/pagcX2GvDezFe6Xev/form?prefill_ID=" target="_blank" rel="noopener noreferrer" className="link-block-102 w-inline-block">
              <div className="text-block-28">Join as a Supplier</div>
            </a>
          </div>
          <div className="divider"></div>
          <div 
            className="footer_contact_cell"
            onClick={() => toggleSection('contact')}
          >
            <div className="text-block-27-copy">Contact us</div>
            <div className={`code-embed-919 w-embed ${openSections.contact ? 'open' : ''}`}>
              <ChevronIcon />
            </div>
          </div>
          <div 
            className="footer_contect_content"
            style={{ display: openSections.contact ? 'flex' : 'none' }}
          >
            <a href="tel:+1(855)-691-2549" className="link-block-102 w-inline-block">
              <div className="text-block-28">+1(855)-691-2549</div>
            </a>
            <a href="mailto:support@sourcentral.com" className="link-block-102 w-inline-block">
              <div className="text-block-28">support@sourcentral.com</div>
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="div-block-33">
          <div className="text-block-11">Copyright ©&nbsp;2025&nbsp;Source Central</div>
          <a href="/privacy-policy" className="link-block-7 w-inline-block">
            <div className="text-block-12">Privacy Policy</div>
          </a>
          <a href="/terms-of-service" className="link-block-7 w-inline-block">
            <div className="text-block-12">Terms of Service</div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

