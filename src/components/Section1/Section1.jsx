import { Link } from 'react-router-dom'
import FeatureShowcaseRow from '../FeatureShowcaseRow/FeatureShowcaseRow'
import HeroIntelligenceDemo from '../HeroIntelligenceDemo/HeroIntelligenceDemo'
import IntelligenceFeatureCards from '../IntelligenceFeatureCards/IntelligenceFeatureCards'
import './Section1.css'

function Section1() {
  return (
    <div className="section-1">
      <div className="header">
        <div className="header-title">
          <h1 className="heading-2 new-home">Source Products at Scale with Source Central</h1>
          <div className="text-block-25">
            Source with confidence as AI handles supplier discovery, outreach, and research using insights from 1,200,000+ cross-verified suppliers across 100 countries.
          </div>
          <div className="div-block-60 home">
            <Link to="/marketplace" className="link-block-3 w-inline-block marketplace-cta">
              <div className="text-block-3">Explore marketplace</div>
            </Link>
            <a 
              href="https://calendly.com/sourcentral/30-minute-meeting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="open-overlay-button w-inline-block"
            >
              <div>Book a demo</div>
            </a>
            <a href="#" className="open-overlay-button w-inline-block">
              <div>Watch demo</div>
            </a>
          </div>
        </div>

        <div className="section-1-intel-lead">
          <div className="section-1-intel-intro" aria-labelledby="section-1-intel-heading">
            <h2 id="section-1-intel-heading" className="section-1-intel-intro__title">
              Intelligence you can&apos;t find
            </h2>
            <p className="section-1-intel-intro__subtitle">
              Deep product analysis, real-time tariff intelligence, and AI-powered negotiation—all in one interface.
            </p>
          </div>
        </div>

        <FeatureShowcaseRow
          visualSide="right"
          headingId="feature-showcase-intelligence"
          eyebrow="Live intelligence"
          title="Ask once—get suppliers, duties, and negotiation context"
          description="Source Central turns natural language into verified matches, tariff routes, and actionable briefs so your team spends less time tab-hopping and more time closing with the right factories."
        >
          <HeroIntelligenceDemo />
        </FeatureShowcaseRow>

        <IntelligenceFeatureCards />
      </div>
    </div>
  )
}

export default Section1

