import { useState } from 'react'
import './Section2.css'

function Section2() {
  const [activeTab1, setActiveTab1] = useState(0)
  const [activeTab2, setActiveTab2] = useState(0)

  const supplierDiscoveryTabs = [
    {
      id: 'tab-1',
      title: 'Find the Perfect Supplier with AI-powered Search',
      desc: 'Just say what you need—AI finds top suppliers and explains why, saving you hours of searching.',
      hasWatchDemo: true
    },
    {
      id: 'tab-2',
      title: 'Competitor Supplier Research',
      desc: 'Use verified customs data to see exactly where your competitors source from, so you can benchmark and find better suppliers.',
      hasWatchDemo: true
    },
    {
      id: 'tab-3',
      title: 'In-depth Supplier Evaluation',
      desc: 'Rank suppliers based on your own criteria and have AI to do in-depth research on thousands of suppliers to find your best fit.',
      hasWatchDemo: true
    },
    {
      id: 'tab-4',
      title: 'Region & Tariff Analysis',
      desc: 'Simulate landed cost with up‑to‑date duty rates, logistics lead‑times, and FTAs (e.g., USMCA, RCEP) before you commit.',
      hasWatchDemo: false,
      comingSoon: true
    }
  ]

  const supplierOutreachTabs = [
    {
      id: 'tab-8',
      title: 'Message Templates',
      desc: 'Write once—AI customizes, translates, and follows up till you get a reply.',
      hasWatchDemo: false
    },
    {
      id: 'tab-9',
      title: 'Always‑On Agents',
      desc: 'AI negotiates with suppliers 24/7—auto-follow-ups bring more quotes, faster.',
      hasWatchDemo: false
    },
    {
      id: 'tab-10',
      title: 'AI Quote Comparison',
      desc: 'AI pulls key info and scores quotes for you—no more manual work.',
      hasWatchDemo: false
    },
    {
      id: 'tab-11',
      title: 'Omni‑Channel',
      desc: 'Suppliers reply anywhere—AI tracks all chats and follows up automatically.',
      hasWatchDemo: false,
      comingSoon: true
    }
  ]

  const ArrowIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.57574 3.57574C9.81005 3.34142 10.1899 3.34142 10.4243 3.57574L14.4243 7.57574C14.6586 7.81005 14.6586 8.18995 14.4243 8.42427L10.4243 12.4243C10.1899 12.6586 9.81005 12.6586 9.57574 12.4243C9.34142 12.19 9.34142 11.8101 9.57574 11.5757L12.5515 8.6H2C1.66863 8.6 1.4 8.33137 1.4 8C1.4 7.66863 1.66863 7.4 2 7.4H12.5515L9.57574 4.42427C9.34142 4.18995 9.34142 3.81005 9.57574 3.57574Z" fill="currentColor"></path>
    </svg>
  )

  return (
    <div className="section-2">
      <div style={{ margin: '10px' }}>
        <div className="div-block-2794">
          <h2 className="heading-9-copy">The First Human-Quality AI Sourcing Agent</h2>
          <div className="section-2-feature-strip">
            {/* <span className="section-2-feature-pill">AI-powered RFQ & quote comparison</span> */}
            {/* <span className="section-2-feature-pill">Track all chats across platforms</span> */}
          </div>

          {/* Supplier Discovery Section */}
          <div style={{ backgroundColor: 'white' , padding: '30px', borderRadius: '20px'}} className="div-block-2795">
            <div className="div-block-2796">
              <div className="text-block-133">Find the perfect supplier for any product with AI-powered supplier research</div>
              
              {/* Desktop Tabs List */}
              <div className="tabs-list">
                {supplierDiscoveryTabs.map((tab, index) => (
                  <div key={tab.id}>
                    <button
                      onClick={() => setActiveTab1(index)}
                      className={`tab-button-${index + 1} ${activeTab1 === index ? 'active' : ''}`}
                    >
                      <div className="tab-title">{tab.title}</div>
                      {activeTab1 === index && (
                        <>
                          <div className={`tab-desc-${index + 1}`}>{tab.desc}</div>
                          {tab.hasWatchDemo && (
                            <a href="#" className={`link-block-687${index > 0 ? index + 1 : ''} w-inline-block`}>
                              <div className="text-block-149">Watch demo</div>
                            </a>
                          )}
                          {tab.comingSoon && (
                            <div className="notes-for-upcoming">Full release coming soon.</div>
                          )}
                        </>
                      )}
                    </button>
                    {index < supplierDiscoveryTabs.length - 1 && <div className="div-block-2801"></div>}
                  </div>
                ))}
              </div>

              {/* Mobile Tabs List */}
              <div className="tabs-list-mobile">
                {supplierDiscoveryTabs.map((tab, index) => (
                  <div key={tab.id}>
                    <button
                      onClick={() => setActiveTab1(index)}
                      className={`tab-button-${index + 1} ${activeTab1 === index ? 'active' : ''}`}
                    >
                      <div className="tab-title">{tab.title}</div>
                      {activeTab1 === index && (
                        <>
                          <div className={`tab-desc-${index + 1}`}>{tab.desc}</div>
                          {tab.hasWatchDemo && (
                            <a href="#" className="link-block-687 w-inline-block">
                              <div className="text-block-149">Watch demo</div>
                            </a>
                          )}
                          {tab.comingSoon && (
                            <div className="notes-for-upcoming">Full release coming soon.</div>
                          )}
                        </>
                      )}
                    </button>
                    {index < supplierDiscoveryTabs.length - 1 && <div className="div-block-2801"></div>}
                  </div>
                ))}
              </div>

              <a href="/supplier-discovery" className="link-block-3-copy-copy" style={{ width: 'fit-content' }}>
                <div className="text-block-3">View detail</div>
                <div className="code-embed-924">
                  <ArrowIcon />
                </div>
              </a>
            </div>
          </div>

          {/* Supplier Outreach Section */}
          <div style={{ backgroundColor: 'white' , padding: '30px', borderRadius: '20px'}} className="div-block-2802">
            <div className="desktop-view">
              <div className="div-block-2803">
                <div className="text-block-133-copy">Get more quotes in less time<br />by leveraging AI-powered supplier outreach</div>
                <a href="/supplier-outreach" target="_blank" rel="noopener noreferrer" className="view-detail w-inline-block">
                  <div className="text-block-3">View detail</div>
                  <div className="code-embed-924">
                    <ArrowIcon />
                  </div>
                </a>
              </div>

              <div className="tabs-list-horizon">
                {supplierOutreachTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab2(index)}
                    className={`tab-button-${index + 8} ${activeTab2 === index ? 'active' : ''}`}
                  >
                    {/* <div className={`div-block-${2805 + index}`}></div> */}
                    <div className="tab-title">{tab.title}</div>
                    <div className={`tab-desc-${index + 8}`}>{tab.desc}</div>
                    {tab.comingSoon && (
                      <div className="notes-for-upcoming-2">Full release coming soon.</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="mobile-view">
              <div className="div-block-2796">
                <div className="text-block-133">Get more quotes in less time by leveraging AI-powered supplier outreach</div>
                <div className="tabs-list-mobile">
                  {supplierOutreachTabs.map((tab, index) => (
                    <div key={tab.id}>
                      <button
                        onClick={() => setActiveTab2(index)}
                        className={`tab-button-${index + 8} ${activeTab2 === index ? 'active' : ''}`}
                      >
                        <div className="tab-title">{tab.title}</div>
                        <div className={`tab-desc-${index + 8}-${index + 8}`}>{tab.desc}</div>
                        {tab.comingSoon && (
                          <div className="notes-for-upcoming-2-2">Full release coming soon.</div>
                        )}
                      </button>
                      {index < supplierOutreachTabs.length - 1 && <div className="div-block-2801"></div>}
                    </div>
                  ))}
                </div>
                <a href="/supplier-outreach" target="_blank" rel="noopener noreferrer" className="link-block-3-copy-copy w-inline-block">
                  <div className="text-block-3">View detail</div>
                  <div className="code-embed-924 w-embed">
                    <ArrowIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2

