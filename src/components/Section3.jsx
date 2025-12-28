import { useState } from 'react'
import './Section3.css'

function Section3() {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipData, setTooltipData] = useState({
    flag: '🇳🇬',
    name: 'Nigeria',
    suppliers: 92,
    categories: 33
  })


  return (
    <div className="section-3">
      <div className="div-block-2809">
        <div className="div-block-2810">
          <h2 className="heading-9-copy short">The World's Most Comprehensive Supplier Database</h2>
          <div className="text-block-25-copy-11">
            SourceReady's AI pipeline pulls data from hundreds of trusted sources—including U.S. customs filings, government registries, trade-show rosters, and supplier websites—to create the industry's most comprehensive, cross-verified supplier database.
          </div>
        </div>

        <div className="div-block-2816">
          <div className="svg-container">
            <div className="w-embed">
              <div id="svg-container">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg" 
                  alt="World Map" 
                  className="world-map-image"
                />
              </div>
            </div>
            <div className={`country-tooltip ${tooltipVisible ? 'visible' : ''}`}>
              <div className="div-block-2811">
                <div className="tooltip-flag">{tooltipData.flag}</div>
                <div className="tooltip-name">{tooltipData.name}</div>
              </div>
              <div className="div-block-2812">
                <div className="div-block-2813">
                  <div className="tooltip-suppliers">{tooltipData.suppliers}</div>
                  <div className="text-block-137">Suppliers</div>
                </div>
                <div className="div-block-2814"></div>
                <div className="div-block-2813">
                  <div className="tooltip-categories">{tooltipData.categories}</div>
                  <div className="text-block-136">Main categories</div>
                </div>
              </div>
              <div className="div-block-2815">
                <a href="#" target="_blank" rel="noopener noreferrer" className="tooltip-link-w-button">View detail</a>
              </div>
            </div>
          </div>

          <div className="div-block-2835">
            <img 
              src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/66972c81c8e94e1cb379b5ae_b86b0a9abaf9f04157619f7818f50e58_pic_02.avif" 
              loading="lazy" 
              sizes="(max-width: 3840px) 100vw, 3840px" 
              srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/66972c81c8e94e1cb379b5ae_b86b0a9abaf9f04157619f7818f50e58_pic_02-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/66972c81c8e94e1cb379b5ae_b86b0a9abaf9f04157619f7818f50e58_pic_02-p-800.avif 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/66972c81c8e94e1cb379b5ae_b86b0a9abaf9f04157619f7818f50e58_pic_02-p-1080.avif 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/66972c81c8e94e1cb379b5ae_b86b0a9abaf9f04157619f7818f50e58_pic_02.avif 3840w" 
              alt="Connect with your ideal supplier from 500,000+ verified manufacturers in 15 categories across 30 countries with SourceReady's AI-powered sourcing platform." 
              className="image-59"
            />

            <div className="div-block-2833">
              <img 
                src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a98a5951455bc21492f86_Vector%20761.avif" 
                loading="lazy" 
                alt="" 
                className="image-60"
              />
              <img 
                src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a986462b17387d3c67253_Vector%20760.avif" 
                loading="lazy" 
                sizes="(max-width: 2698px) 100vw, 2698px" 
                srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a986462b17387d3c67253_Vector%20760-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a986462b17387d3c67253_Vector%20760-p-800.png 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a986462b17387d3c67253_Vector%20760-p-1080.png 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a986462b17387d3c67253_Vector%20760.avif 2698w" 
                alt="" 
                className="image-61"
              />
              <img 
                src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759.avif" 
                loading="lazy" 
                sizes="(max-width: 3840px) 100vw, 3840px" 
                srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759-p-800.avif 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759-p-1080.avif 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759-p-1600.avif 1600w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759-p-2000.avif 2000w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682a9864d7d614e5dbe52404_Vector%20759.avif 3840w" 
                alt="" 
                className="image-62"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3

