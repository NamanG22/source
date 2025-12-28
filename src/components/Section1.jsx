import { useState } from 'react'
import './Section1.css'

function Section1() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 'tab-1',
      name: 'Supplier Discovery',
      icon: (
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.5757 10.5757C10.8101 10.3414 11.1899 10.3414 11.4243 10.5757L14.4243 13.5757C14.6586 13.81 14.6586 14.1899 14.4243 14.4243C14.1899 14.6586 13.8101 14.6586 13.5757 14.4243L10.5757 11.4243C10.3414 11.1899 10.3414 10.81 10.5757 10.5757Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.376 1.51209C12.1484 1.09596 11.5508 1.09597 11.3232 1.51209L10.8932 2.2982C10.7097 2.63378 10.4338 2.9097 10.0982 3.09323L9.31209 3.52317C8.89597 3.75076 8.89597 4.34841 9.3121 4.576L10.0982 5.00594C10.4338 5.18947 10.7097 5.46538 10.8932 5.80096L11.3232 6.58708C11.5508 7.0032 12.1484 7.0032 12.376 6.58708L12.8059 5.80096C12.9895 5.46538 13.2654 5.18947 13.601 5.00594L14.3871 4.576C14.8032 4.34841 14.8032 3.75076 14.3871 3.52317L13.601 3.09323C13.2654 2.9097 12.9895 2.63378 12.8059 2.2982L12.376 1.51209Z" fill="currentColor"></path>
          <path d="M1.00039 7.00039C1.00039 3.68668 3.68668 1.00039 7.00039 1.00039C7.28445 1.00041 7.56422 1.01966 7.83828 1.05801L8.11074 1.10293L8.22695 1.13711C8.4854 1.24242 8.6436 1.51813 8.59023 1.80312C8.53683 2.08786 8.28992 2.2875 8.01113 2.29238L7.89004 2.28262L7.67227 2.24648C7.45299 2.21579 7.22869 2.19963 7.00039 2.19961C4.34942 2.19961 2.19961 4.34942 2.19961 7.00039C2.19963 7.3047 2.22875 7.60233 2.28262 7.89004L2.32559 8.09707C2.82151 10.2194 4.72726 11.8002 7.00039 11.8002C7.644 11.8001 8.25657 11.6735 8.81582 11.4447L9.03652 11.348C10.1233 10.838 10.9883 9.9314 11.4447 8.81582L11.5014 8.70937C11.6565 8.47723 11.9585 8.37804 12.227 8.48769C12.5337 8.61316 12.6805 8.9642 12.5551 9.2709L12.435 9.54629C11.8399 10.8144 10.8144 11.8399 9.54629 12.435L9.2709 12.5551C8.56983 12.8419 7.80262 13.0003 7.00039 13.0004C4.15741 13.0004 1.77645 11.0234 1.15664 8.36953L1.10293 8.11074C1.03549 7.75057 1.00042 7.37916 1.00039 7.00039Z" fill="currentColor"></path>
        </svg>
      ),
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/6819aa875c2b064de786d659_a5ee2ff28bde7ab708a6c62eda856905_Supplier%20discovery.avif'
    },
    {
      id: 'tab-3',
      name: 'Supplier Outreach',
      icon: (
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.9995 6.99951C14.1039 6.99951 14.9993 7.89517 14.9995 8.99951V14.1753C14.9995 14.7583 14.3637 15.1188 13.8638 14.8188L12.9751 14.2847C12.6643 14.0982 12.3083 13.9995 11.9458 13.9995H7.99951C6.89517 13.9993 5.99951 13.1039 5.99951 11.9995V8.99951C5.99978 7.89533 6.89533 6.99977 7.99951 6.99951H12.9995ZM7.99951 8.19971C7.55807 8.19997 7.19997 8.55807 7.19971 8.99951V11.9995C7.19971 12.4412 7.55791 12.8 7.99951 12.8003H11.9458C12.5258 12.8003 13.095 12.958 13.5923 13.2563L13.8003 13.3804V8.99951C13.8 8.55791 13.4412 8.19971 12.9995 8.19971H7.99951Z" fill="currentColor"></path>
          <path d="M1.6001 6.3999C1.93113 6.39995 2.19923 6.66858 2.19971 6.99951V12.6021L2.56494 12.2368C3.07736 11.7244 3.71419 11.4414 4.40186 11.3413C4.72944 11.2939 4.99925 11.5689 4.99951 11.8999C4.9993 12.231 4.72755 12.4886 4.40381 12.5581C4.03682 12.6368 3.69822 12.8008 3.41358 13.0855L2.27979 14.2192C1.80733 14.6916 0.999605 14.357 0.999513 13.689V6.99951C0.99999 6.66855 1.26902 6.3999 1.6001 6.3999Z" fill="currentColor"></path>
          <path d="M2.92334 0.911622C3.15105 0.496045 3.74843 0.495979 3.97608 0.911622L4.40576 1.69776C4.58929 2.03332 4.86513 2.31012 5.20069 2.49365L5.98682 2.92334C6.40295 3.15093 6.40294 3.74849 5.98682 3.97608L5.20069 4.40576C4.86522 4.58927 4.58927 4.86522 4.40576 5.20068L3.97608 5.98682C3.74849 6.40294 3.15093 6.40294 2.92334 5.98682L2.49365 5.20068C2.31012 4.86513 2.03332 4.58929 1.69776 4.40576L0.911623 3.97608C0.49598 3.74843 0.496044 3.15104 0.911623 2.92334L1.69776 2.49365C2.03333 2.31012 2.31012 2.03333 2.49365 1.69776L2.92334 0.911622Z" fill="currentColor"></path>
          <path d="M10.4995 1.99951C12.1562 1.99951 13.4993 3.34288 13.4995 4.99951V5.3999C13.4993 5.73096 13.231 5.9993 12.8999 5.99951C12.5689 5.99925 12.2995 5.73093 12.2993 5.3999V4.99951C12.2991 4.00562 11.4935 3.19971 10.4995 3.19971H7.49951C7.16858 3.19923 6.89995 2.93113 6.8999 2.6001C6.8999 2.26902 7.16855 2.00097 7.49951 2.00049L10.4995 1.99951Z" fill="currentColor"></path>
        </svg>
      ),
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/6819aa7d01e5b4ee0e2990d3_73041e7341c86e0499875836dbd4ae22_supplier%20outreach.avif'
    },
    {
      id: 'tab-4',
      name: 'Quote Intelligence',
      icon: (
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34314 1 5 1H11C12.6569 1 14 2.34314 14 4V7C14 7.33137 13.7314 7.6 13.4 7.6C13.0686 7.6 12.8 7.33137 12.8 7V4C12.8 3.00589 11.9941 2.2 11 2.2H5C4.00589 2.2 3.2 3.00589 3.2 4V12C3.2 12.9941 4.00589 13.8 5 13.8H7C7.33137 13.8 7.6 14.0686 7.6 14.4C7.6 14.7314 7.33137 15 7 15H5C3.34315 15 2 13.6569 2 12V4Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M4.89999 4.5C4.89999 4.16863 5.16862 3.9 5.49999 3.9H10.5C10.8314 3.9 11.1 4.16863 11.1 4.5C11.1 4.83137 10.8314 5.1 10.5 5.1H5.49999C5.16862 5.1 4.89999 4.83137 4.89999 4.5Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M4.89999 7C4.89999 6.66863 5.16862 6.4 5.49999 6.4H7.99999C8.33136 6.4 8.59999 6.66863 8.59999 7C8.59999 7.33137 8.33136 7.6 7.99999 7.6H5.49999C5.16862 7.6 4.89999 7.33137 4.89999 7Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.376 9.51209C12.1484 9.09596 11.5508 9.09597 11.3232 9.51209L10.8932 10.2982C10.7097 10.6338 10.4338 10.9097 10.0982 11.0932L9.31209 11.5232C8.89597 11.7508 8.89597 12.3484 9.3121 12.576L10.0982 13.0059C10.4338 13.1895 10.7097 13.4654 10.8932 13.801L11.3232 14.5871C11.5508 15.0032 12.1484 15.0032 12.376 14.5871L12.8059 13.801C12.9895 13.4654 13.2654 13.1895 13.601 13.0059L14.3871 12.576C14.8032 12.3484 14.8032 11.7508 14.3871 11.5232L13.601 11.0932C13.2654 10.9097 12.9895 10.6338 12.8059 10.2982L12.376 9.51209Z" fill="currentColor"></path>
        </svg>
      ),
      image: 'https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/6819aa879b401dcaba168fd6_9093dc412c8525ef442214ee27dda432_Quote%20intelligence.avif'
    }
  ]

  return (
    <div className="section-1">
      <div className="header">
        <div className="header-title">
          <h1 className="heading-2 new-home">Source Winning Products at Scale with Source Central AI Agents</h1>
          <div className="text-block-25">
            Source with confidence as AI handles supplier discovery, outreach, and research using insights from 1,200,000+ cross-verified suppliers across 100 countries.
          </div>
          <div className="div-block-60 home">
            <a 
              href="https://calendly.com/sourcentral/30-minute-meeting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-block-3 w-inline-block"
            >
              <div className="text-block-3">Book a demo</div>
            </a>
            <a href="#" className="open-overlay-button w-inline-block">
              <div>Watch demo</div>
            </a>
          </div>
        </div>
        <div className="tabs-2 w-tabs">
          <div className="tabs-menu-4 w-tab-menu" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`tab-link-tab w-inline-block w-tab-link ${activeTab === index ? 'w--current' : ''}`}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`tab-pane-${index}`}
              >
                <div className="code-embed-920 w-embed">
                  {tab.icon}
                </div>
                <div className="text-block-132">{tab.name}</div>
              </button>
            ))}
          </div>
          <div className="tabs-content-3 w-tab-content">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`w-tab-pane ${activeTab === index ? 'w--tab-active' : ''}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                id={`tab-pane-${index}`}
                style={{ display: activeTab === index ? 'block' : 'none' }}
              >
                <img
                  sizes="100vw"
                  srcSet={`
                    ${tab.image.replace('.avif', '-p-500.avif')} 500w,
                    ${tab.image.replace('.avif', '-p-800.avif')} 800w,
                    ${tab.image.replace('.avif', '-p-1080.avif')} 1080w,
                    ${tab.image.replace('.avif', '-p-1600.avif')} 1600w,
                    ${tab.image.replace('.avif', '-p-2000.avif')} 2000w,
                    ${tab.image} 3840w
                  `}
                  alt={tab.name}
                  src={tab.image}
                  loading="eager"
                  className="image-52"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1

