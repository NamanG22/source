import FeatureShowcaseRow from '../FeatureShowcaseRow/FeatureShowcaseRow'
import './IntelligenceFeatureCards.css'

function IntelCardHsCode() {
  return (
    <article className="intel-card intel-card--showcase">
      <div className="intel-card__panel">
        <p className="intel-card__label">Product: Denim jeans</p>
        <div className="intel-card__bars">
          <div className="intel-card__bar-row">
            <span className="intel-card__bar-name">Cotton</span>
            <div className="intel-card__bar-track">
              <span className="intel-card__bar-fill intel-card__bar-fill--primary" style={{ width: '98%' }} />
            </div>
            <span className="intel-card__bar-pct">98%</span>
          </div>
          <div className="intel-card__bar-row">
            <span className="intel-card__bar-name">Elastane</span>
            <div className="intel-card__bar-track">
              <span className="intel-card__bar-fill intel-card__bar-fill--soft" style={{ width: '2%' }} />
            </div>
            <span className="intel-card__bar-pct">2%</span>
          </div>
        </div>
      </div>

      <div className="intel-card__panel intel-card__panel--compact">
        <p className="intel-card__mono">HS code: 6204.62.20</p>
        <p className="intel-card__muted-sm">Women&apos;s denim trousers, not knitted</p>
        <p className="intel-card__duty">Base duty: 16.5% (US), 0% (UK)</p>
      </div>
    </article>
  )
}

function IntelCardNegotiation() {
  return (
    <article className="intel-card intel-card--showcase">
      <div className="intel-card__chat">
        <div className="intel-card__bubble intel-card__bubble--user">
          Can you negotiate $8/unit for 5K units?
        </div>
        <div className="intel-card__bubble intel-card__bubble--ai">
          Based on market data: Raw cotton +12%, floor price: $9.20/unit. Escalating for approval…
        </div>
      </div>
    </article>
  )
}

function IntelCardMarket() {
  return (
    <article className="intel-card intel-card--showcase">
      <div className="intel-card__panel">
        <p className="intel-card__label">Cotton market (48h)</p>
        <div className="intel-card__price-row">
          <span className="intel-card__price">$92.45</span>
          <span className="intel-card__delta">+2.3%</span>
        </div>
        <p className="intel-card__impact">
          Impact on sourcing: ↑ Floor prices expect +3–5% increases
        </p>
      </div>

      <div className="intel-card__stats">
        <div className="intel-card__stat">
          <span className="intel-card__stat-label">Avg lead time</span>
          <span className="intel-card__stat-value">23 days</span>
        </div>
        <div className="intel-card__stat">
          <span className="intel-card__stat-label">Supplier rating</span>
          <span className="intel-card__stat-value">4.7 / 5.0</span>
        </div>
      </div>
    </article>
  )
}

/**
 * Three alternating feature rows (same pattern as the hero intelligence demo).
 * Renders inside Section1 below the live demo.
 */
function IntelligenceFeatureCards() {
  return (
    <div className="intel-features" aria-labelledby="intel-features-heading">
      <div className="intel-features__intro">
        <h2 id="intel-features-heading" className="intel-features__title">
          Intelligence you can&apos;t find
        </h2>
        <p className="intel-features__subtitle">
          Deep product analysis, real-time tariff intelligence, and AI-powered negotiation—all in one interface.
        </p>
      </div>

      <FeatureShowcaseRow
        visualSide="right"
        compactVisual
        headingId="intel-feature-hs"
        eyebrow="Classification"
        title="HS code deep-dive"
        description="See composition, the right HS heading, and duty scenarios together—so quotes reflect landed cost instead of FOB guesswork. Source Central keeps materials, codes, and corridor rules in one view for your team and auditors."
      >
        <IntelCardHsCode />
      </FeatureShowcaseRow>

      <FeatureShowcaseRow
        visualSide="left"
        compactVisual
        headingId="intel-feature-negotiation"
        eyebrow="Outreach"
        title="AI negotiation agent"
        description="Ground every counter in market signals—commodity moves, MOQ, and history—so messages sound sharp, not scripted. Escalation paths and floor prices stay visible instead of living in side threads."
      >
        <IntelCardNegotiation />
      </FeatureShowcaseRow>

      <FeatureShowcaseRow
        visualSide="right"
        compactVisual
        headingId="intel-feature-market"
        eyebrow="Signals"
        title="Market intelligence"
        description="Track fiber and input trends, lead times, and supplier quality in one place. Adjust targets before the market moves so you&apos;re not renegotiating from behind."
      >
        <IntelCardMarket />
      </FeatureShowcaseRow>
    </div>
  )
}

export default IntelligenceFeatureCards
