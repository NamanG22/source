import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import MobileMenu from '../MobileMenu/MobileMenu'
import PageMask from '../PageMask/PageMask'
import Footer from '../Footer/Footer'
import './SupplierDiscovery.css'

function SupplierDiscovery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="supplier-discovery-page">
      {/* Header Section with Background */}
      <section className="bg-header">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <PageMask isVisible={isMenuOpen} onClick={closeMenu} />
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        <section className="section-8-copy">
          <img 
            src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/66b3475328c6c778d376d62a_header_bg_supplier_search.svg" 
            loading="lazy" 
            alt="A decorative image" 
            className="image-18"
          />
        </section>
        
        {/* Hero Section */}
        <section className="section-01-fs">
          <div className="div-block-68">
          <div className="div-block-67">
            <h1 className="heading-2">Find the Perfect Supplier for Any Product with AI-Powered Search</h1>
            <div className="text-block-25">
              With 1,200,000+ suppliers across 100 countries, SourceReady uses AI to find your ideal manufacturing partners—just tell us what you need.
            </div>
          </div>
          <div className="div-block-60">
            <a 
              href="https://login.sourceready.com/u/signup?state=hKFo2SB4U3hsZ09CLUl6QnRRY3FmaS1qTEE3WEpUWkc3NkVYa6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEtxeGpSLTE2QzFybUJVYXFESFJFX1A2Wm1VOFNqZVd2o2NpZNkgWnQ5b3VnRllYZzR1UkdMM2x0NVhKck1DU0Q3aEZmR1Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-block-101 w-inline-block"
            >
              <div>Sign up for free</div>
            </a>
            <a 
              href="https://app.sourceready.com/api/auth/login?screen_hint=signup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-block-3 w-inline-block"
            >
              <div className="text-block-3">Sign up for free</div>
            </a>
          </div>
        </div>
        </section>
      </section>

      {/* AI-Powered Supplier Search Section */}
      <div className="section-02-fs">
        <div className="div-block-20">
          <div className="div-block-21">
            <h2 className="heading-4">AI-Powered Supplier Search</h2>
            <div className="text-block-9">
              Describe your product requirements, and our AI scans thousands of suppliers to recommend your top matches. Each recommendation comes with a clear, human-like explanation of why that supplier fits — saving you hours of manual research.
            </div>
            <div className="div-block-27 two">
              <a 
                href="#" 
                className="link-block-687 two w-inline-block"
                onClick={(e) => e.preventDefault()}
              >
                <div className="text-block-149">Watch demo</div>
              </a>
              <a 
                href="https://app.sourceready.com/api/auth/login?screen_hint=signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-block-5 two w-inline-block"
              >
                <div className="text-block-15">Sign up for free</div>
              </a>
            </div>
          </div>
          <div className="div-block-22">
            <img 
              src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ff5984a0ca1a9147df_a77371e2a1af5e28c8c612de5abf2024_Frame%2033569.avif" 
              loading="eager" 
              sizes="(max-width: 2160px) 100vw, 2160px" 
              srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ff5984a0ca1a9147df_a77371e2a1af5e28c8c612de5abf2024_Frame%2033569-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ff5984a0ca1a9147df_a77371e2a1af5e28c8c612de5abf2024_Frame%2033569-p-800.avif 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ff5984a0ca1a9147df_a77371e2a1af5e28c8c612de5abf2024_Frame%2033569-p-1080.avif 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ff5984a0ca1a9147df_a77371e2a1af5e28c8c612de5abf2024_Frame%2033569.avif 2160w" 
              alt="A decorative image" 
              className="image-68"
            />
          </div>
        </div>
      </div>

      {/* Competitor Supplier Research Section */}
      <div className="section-03-fs">
        <div className="div-block-20 left-image">
          <div className="div-block-21">
            <h2 className="heading-4">Competitor Supplier Research</h2>
            <div className="text-block-9">
              Leverage verified customs data to see exactly where your competitors source from. Use these insights to benchmark their suppliers and discover even better partners for your business.
            </div>
            <div className="div-block-27 two">
              <a 
                href="#" 
                className="link-block-6871 two w-inline-block"
                onClick={(e) => e.preventDefault()}
              >
                <div className="text-block-149">Watch demo</div>
              </a>
              <a 
                href="https://app.sourceready.com/api/auth/login?screen_hint=signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-block-5 two w-inline-block"
              >
                <div className="text-block-15">Sign up for free</div>
              </a>
            </div>
          </div>
          <div className="div-block-22">
            <div className="code-embed-923 w-embed" style={{ display: 'none' }}>
              <style>{`
                .video-container {
                  position: relative;
                  height: 560px;
                  background-color: #000;
                }
                .video-container video {
                  position: absolute;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  object-position: left center;
                }
                @media (min-width: 801px) {
                  .video-container {
                    height: 560px;
                  }
                }
                @media (max-width: 800px) {
                  .video-container {
                    height: 560px;
                  }
                }
                @media (max-width: 640px) {
                  .video-container {
                    height: 400px;
                  }
                }
                @media (max-width: 320px) {
                  .video-container {
                    height: 220px;
                  }
                }
              `}</style>
              <div className="video-container">
                <video 
                  src="https://www.dropbox.com/scl/fi/oed4zj6ki87jm9yfilzu5/new_home_video_01.mov?rlkey=7gc0pkx3xpf7dy0iwrgr5ah12&st=jt4utwms&raw=1" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
            </div>
            <img 
              src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d6800db2b19ebcae78e69_c7bd5e6324b56871118e255b251bd1ca_Frame%2033570.avif" 
              loading="eager" 
              sizes="(max-width: 2160px) 100vw, 2160px" 
              srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d6800db2b19ebcae78e69_c7bd5e6324b56871118e255b251bd1ca_Frame%2033570-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d6800db2b19ebcae78e69_c7bd5e6324b56871118e255b251bd1ca_Frame%2033570-p-800.avif 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d6800db2b19ebcae78e69_c7bd5e6324b56871118e255b251bd1ca_Frame%2033570-p-1080.avif 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d6800db2b19ebcae78e69_c7bd5e6324b56871118e255b251bd1ca_Frame%2033570.avif 2160w" 
              alt="A decorative image" 
              className="image-69"
            />
          </div>
        </div>
      </div>

      {/* In-Depth Supplier Evaluation Section */}
      <div className="section-04-fs">
        <div className="div-block-20">
          <div className="div-block-21">
            <h2 className="heading-4">In-Depth Supplier Evaluation</h2>
            <div className="text-block-9">
              Define your own supplier criteria and let AI do the rest. SourceReady ranks potential suppliers based on your weightings (quality, cost, speed, etc.) and conducts deep research across thousands of candidates to find your best fit.
            </div>
            <div className="div-block-27 two">
              <a 
                href="#" 
                className="link-block-6872 two w-inline-block"
                onClick={(e) => e.preventDefault()}
              >
                <div className="text-block-149">Watch demo</div>
              </a>
              <a 
                href="https://app.sourceready.com/api/auth/login?screen_hint=signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-block-5 two w-inline-block"
              >
                <div className="text-block-15">Sign up for free</div>
              </a>
            </div>
          </div>
          <div className="div-block-22">
            <img 
              src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffc1819e423b93a29d_8a5b6ade3098192a9539b2369e92c878_Frame%2033571.avif" 
              loading="eager" 
              sizes="(max-width: 2160px) 100vw, 2160px" 
              srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffc1819e423b93a29d_8a5b6ade3098192a9539b2369e92c878_Frame%2033571-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffc1819e423b93a29d_8a5b6ade3098192a9539b2369e92c878_Frame%2033571-p-800.avif 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffc1819e423b93a29d_8a5b6ade3098192a9539b2369e92c878_Frame%2033571-p-1080.avif 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffc1819e423b93a29d_8a5b6ade3098192a9539b2369e92c878_Frame%2033571.avif 2160w" 
              alt="A decorative image" 
              className="image-70"
            />
          </div>
        </div>
      </div>

      {/* Region & Tariff Analysis Section */}
      <div className="section-03-fs">
        <div className="div-block-20 left-image">
          <div className="div-block-21">
            <h2 className="heading-4">Region &amp; Tariff Analysis</h2>
            <div className="text-block-9">
              Simulate your landed costs before you commit. SourceReady factors in up-to-date import duties, regional logistics lead times, and trade agreements (like USMCA or RCEP) to project tariffs and total costs, helping you make informed sourcing decisions.
            </div>
            <div className="notes-for-upcoming-001">Full release coming soon.</div>
            <div className="div-block-27">
              <a 
                href="https://app.sourceready.com/api/auth/login?screen_hint=signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-block-5 two w-inline-block"
              >
                <div className="text-block-15">Sign up for free</div>
              </a>
            </div>
          </div>
          <div className="div-block-22">
            <img 
              src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffa8a1660e93eea52b_91cb22e9e4a375815bc4ebe3aa2b216f_Frame%2033572.avif" 
              loading="eager" 
              sizes="(max-width: 2160px) 100vw, 2160px" 
              srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffa8a1660e93eea52b_91cb22e9e4a375815bc4ebe3aa2b216f_Frame%2033572-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffa8a1660e93eea52b_91cb22e9e4a375815bc4ebe3aa2b216f_Frame%2033572-p-800.avif 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffa8a1660e93eea52b_91cb22e9e4a375815bc4ebe3aa2b216f_Frame%2033572-p-1080.avif 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682d67ffa8a1660e93eea52b_91cb22e9e4a375815bc4ebe3aa2b216f_Frame%2033572.avif 2160w" 
              alt="A decorative image" 
              className="image-71"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-6">
        <div className="div-block-28-copy111">
          <div className="div-block-2832">
            <h2 className="heading-5-copy-111">
              <strong>Ready to save time and money on sourcing?</strong>
            </h2>
            <div className="text-block-147">
              Sign up for free and use the AI search to build your supplier shortlist.
            </div>
          </div>
          <a 
            href="https://app.sourceready.com/api/auth/login?screen_hint=signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-block-3-copy w-inline-block"
          >
            <div className="text-block-3">Sign up for free</div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SupplierDiscovery
