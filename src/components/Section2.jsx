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
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/6824560bade8f45b803ac793_bd439fef45e28fb7558eec0cda0a2c56_Frame%2033376.avif',
      hasWatchDemo: true
    },
    {
      id: 'tab-2',
      title: 'Competitor Supplier Research',
      desc: 'Use verified customs data to see exactly where your competitors source from, so you can benchmark and find better suppliers.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/6819cafd3f9724f4f5d03ced_321d1ad59e1483bacec2247befa4290f_Frame%2033376.avif',
      hasWatchDemo: true
    },
    {
      id: 'tab-3',
      title: 'In-depth Supplier Evaluation',
      desc: 'Rank suppliers based on your own criteria and have AI to do in-depth research on thousands of suppliers to find your best fit.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682ad9613777dd48ba088d40_10046f63b1ccce22d2a5d6c6dc004dae_Frame%2033559.avif',
      hasWatchDemo: true
    },
    {
      id: 'tab-4',
      title: 'Region & Tariff Analysis',
      desc: 'Simulate landed cost with up‑to‑date duty rates, logistics lead‑times, and FTAs (e.g., USMCA, RCEP) before you commit.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/6824560b4b9d2a3c71fe8311_0387dd66a6bf8b3bd652643af2cfdda2_Frame%2033548.avif',
      hasWatchDemo: false,
      comingSoon: true
    }
  ]

  const supplierOutreachTabs = [
    {
      id: 'tab-8',
      title: 'Message Templates',
      desc: 'Write once—AI customizes, translates, and follows up till you get a reply.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681b1ebce64ee748668d4a83_89c831234e10e5cec0f04a3b7659eff7_Frame%2033378.avif',
      hasWatchDemo: false
    },
    {
      id: 'tab-9',
      title: 'Always‑On Agents',
      desc: 'AI negotiates with suppliers 24/7—auto-follow-ups bring more quotes, faster.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681b1ebc5eff013f7f3d4025_6de4be77f8806dee473114db94519c1f_Frame%2033379.avif',
      hasWatchDemo: false
    },
    {
      id: 'tab-10',
      title: 'AI Quote Comparison',
      desc: 'AI pulls key info and scores quotes for you—no more manual work.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681b1ebc40115ab9f2833ff0_469d58479881def54efe731d525ca940_Frame%2033380.avif',
      hasWatchDemo: false
    },
    {
      id: 'tab-11',
      title: 'Omni‑Channel',
      desc: 'Suppliers reply anywhere—AI tracks all chats and follows up automatically.',
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681b1ebc08e188aad022ebea_4c409318965229f03bc3acfb4e992df1_Frame%2033381.avif',
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
      <div className="div-block-2794">
        <h2 className="heading-9-copy">The First Human-Quality AI Sourcing Agent</h2>
        
        {/* Supplier Discovery Section */}
        <div className="div-block-2795">
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
                    <div className={`tab-desc-${index + 1}`}>{tab.desc}</div>
                    {tab.hasWatchDemo && (
                      <a href="#" className={`link-block-687${index > 0 ? index + 1 : ''} w-inline-block`}>
                        <div className="text-block-149">Watch demo</div>
                      </a>
                    )}
                    {tab.comingSoon && (
                      <div className="notes-for-upcoming">Full release coming soon.</div>
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
                    <div className={`tab-desc-${index + 1}`}>{tab.desc}</div>
                    {tab.hasWatchDemo && (
                      <a href="#" className="link-block-687 w-inline-block">
                        <div className="text-block-149">Watch demo</div>
                      </a>
                    )}
                    {tab.comingSoon && (
                      <div className="notes-for-upcoming">Full release coming soon.</div>
                    )}
                  </button>
                  <div className={`tab-panel-${index + 1}-${index + 1}`} style={{ display: activeTab1 === index ? 'block' : 'none' }}>
                    <img
                      src={tab.image}
                      srcSet={`
                        ${tab.image.replace('.avif', '-p-500.avif')} 500w,
                        ${tab.image.replace('.avif', '-p-800.avif')} 800w,
                        ${tab.image.replace('.avif', '-p-1080.avif')} 1080w,
                        ${tab.image} 1920w
                      `}
                      sizes="(max-width: 1919px) 100vw, 1920px"
                      alt=""
                      className="tab-panel-bg"
                      loading="lazy"
                    />
                  </div>
                  {index < supplierDiscoveryTabs.length - 1 && <div className="div-block-2801"></div>}
                </div>
              ))}
            </div>

            <a href="/supplier-discovery" target="_blank" rel="noopener noreferrer" className="link-block-3-copy-copy w-inline-block">
              <div className="text-block-3">View detail</div>
              <div className="code-embed-924 w-embed">
                <ArrowIcon />
              </div>
            </a>
          </div>

          {/* Desktop Tab Content */}
          <div className="tabs-contentes">
            {supplierDiscoveryTabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-panel-${index + 1}`}
                style={{ display: activeTab1 === index ? 'block' : 'none' }}
              >
                <img
                  src={tab.image}
                  srcSet={`
                    ${tab.image.replace('.avif', '-p-500.avif')} 500w,
                    ${tab.image.replace('.avif', '-p-800.avif')} 800w,
                    ${tab.image.replace('.avif', '-p-1080.avif')} 1080w,
                    ${tab.image} 1920w
                  `}
                  sizes="(max-width: 1919px) 100vw, 1920px"
                  alt=""
                  className="tab-panel-bg"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Outreach Section */}
        <div className="div-block-2802">
          <div className="desktop-view">
            <div className="div-block-2803">
              <div className="text-block-133-copy">Get more quotes in less time<br />by leveraging AI-powered supplier outreach</div>
              <a href="/supplier-outreach" target="_blank" rel="noopener noreferrer" className="view-detail w-inline-block">
                <div className="text-block-3">View detail</div>
                <div className="code-embed-924 w-embed">
                  <ArrowIcon />
                </div>
              </a>
            </div>

            <div className="tabs-content">
              {supplierOutreachTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`tab-panel-${index + 8}`}
                  style={{ display: activeTab2 === index ? 'block' : 'none' }}
                >
                  <img
                    src={tab.image}
                    srcSet={`
                      ${tab.image.replace('.avif', '-p-500.avif')} 500w,
                      ${tab.image.replace('.avif', '-p-800.avif')} 800w,
                      ${tab.image.replace('.avif', '-p-1080.avif')} 1080w,
                      ${tab.image.replace('.avif', '-p-1600.avif')} 1600w,
                      ${tab.image.replace('.avif', '-p-2000.avif')} 2000w,
                      ${tab.image} 3648w
                    `}
                    sizes="(max-width: 3648px) 100vw, 3648px"
                    alt=""
                    className="tab-panel-bg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="tabs-list-horizon">
              {supplierOutreachTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab2(index)}
                  className={`tab-button-${index + 8} ${activeTab2 === index ? 'active' : ''}`}
                >
                  <div className={`div-block-${2805 + index}`}></div>
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
                    <div className={`tab-panel-${index + 8}-${index + 8}`} style={{ display: activeTab2 === index ? 'block' : 'none' }}>
                      <img
                        src={tab.image}
                        srcSet={`
                          ${tab.image.replace('.avif', '-p-500.avif')} 500w,
                          ${tab.image.replace('.avif', '-p-800.avif')} 800w,
                          ${tab.image.replace('.avif', '-p-1080.avif')} 1080w,
                          ${tab.image} 1920w
                        `}
                        sizes="(max-width: 1919px) 100vw, 1920px"
                        alt=""
                        className="tab-panel-bg"
                        loading="lazy"
                      />
                    </div>
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
  )
}

export default Section2

