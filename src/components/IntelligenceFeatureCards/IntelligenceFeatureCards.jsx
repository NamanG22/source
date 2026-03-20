import FeatureShowcaseRow from '../FeatureShowcaseRow/FeatureShowcaseRow'
import './IntelligenceFeatureCards.css'

function IntelCardHsCode() {
  return (
    <article className="intel-card intel-card--showcase intel-card--tall">
      <div className="intel-card__panel">
        <div className="intel-card__panel-head">
          <p className="intel-card__label">Product: Denim jeans</p>
          <div className="intel-card__pills">
            <span className="intel-card__pill">Woven</span>
            <span className="intel-card__pill">Women&apos;s</span>
            <span className="intel-card__pill intel-card__pill--accent">Review</span>
          </div>
        </div>
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
        <ul className="intel-card__checklist">
          <li>COO: India · Manufacturer declared</li>
          <li>Knitted / crocheted: No</li>
        </ul>
      </div>

      <div className="intel-card__panel intel-card__panel--compact">
        <p className="intel-card__mono">HS code: 6204.62.20</p>
        <p className="intel-card__muted-sm">Women&apos;s denim trousers, not knitted</p>
        <p className="intel-card__duty">Base duty: 16.5% (US), 0% (UK under FTA)</p>
      </div>

      <div className="intel-card__panel">
        <p className="intel-card__subhead">Landed cost preview (est.)</p>
        <table className="intel-card__mini-table">
          <tbody>
            <tr>
              <td>India → UK</td>
              <td>0% duty</td>
              <td className="intel-card__mini-table-num">$4.08</td>
            </tr>
            <tr>
              <td>India → EU</td>
              <td>12%</td>
              <td className="intel-card__mini-table-num">$4.55</td>
            </tr>
            <tr>
              <td>India → US</td>
              <td>16.5%</td>
              <td className="intel-card__mini-table-num">$4.68</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="intel-card__foot-strip">
        <span className="intel-card__foot-item">✓ GSP checked</span>
        <span className="intel-card__foot-item">✓ Anti-dumping scan</span>
        <span className="intel-card__foot-item">Last sync 2h ago</span>
      </div>
    </article>
  )
}

function IntelCardNegotiation() {
  return (
    <article className="intel-card intel-card--showcase intel-card--tall">
      <div className="intel-card__thread-bar">
        <span className="intel-card__thread-dot" aria-hidden />
        <span className="intel-card__thread-title">Denim line · 5K MOQ · Tiruppur cluster</span>
      </div>

      <div className="intel-card__chat intel-card__chat--tall">
        <div className="intel-card__bubble intel-card__bubble--user">
          Can you negotiate $8/unit for 5K units?
        </div>
        <div className="intel-card__bubble intel-card__bubble--ai">
          Based on market data: Raw cotton +12% vs last quarter. Suggested floor: $9.20/unit before margin.
        </div>
        <div className="intel-card__bubble intel-card__bubble--user">
          Cap at $8.50 if they commit to 4-week ship windows.
        </div>
        <div className="intel-card__bubble intel-card__bubble--ai">
          Drafting counter with volume tier: $8.65 @ 5K, $8.40 @ 10K. Escalation sent to your approvers…
        </div>
      </div>

      <div className="intel-card__panel intel-card__panel--tight">
        <p className="intel-card__subhead">Status</p>
        <div className="intel-card__steps">
          <div className="intel-card__step intel-card__step--done">Market floor computed</div>
          <div className="intel-card__step intel-card__step--done">Supplier tier matched</div>
          <div className="intel-card__step intel-card__step--active">Awaiting approval · 2 stakeholders</div>
        </div>
      </div>

      <div className="intel-card__foot-strip">
        <span className="intel-card__foot-item">Tone: firm · data-backed</span>
        <span className="intel-card__foot-item">Next nudge in 24h</span>
      </div>
    </article>
  )
}

function IntelCardMarket() {
  return (
    <article className="intel-card intel-card--showcase intel-card--tall">
      <div className="intel-card__panel">
        <p className="intel-card__label">Cotton futures (ICE) · 48h</p>
        <div className="intel-card__price-row">
          <span className="intel-card__price">$92.45</span>
          <span className="intel-card__delta">+2.3%</span>
        </div>
        <div className="intel-card__spark" aria-hidden>
          {[40, 52, 48, 61, 55, 58, 72, 68, 75, 82, 78, 88].map((h, i) => (
            <span key={i} className="intel-card__spark-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="intel-card__impact">
          Impact on sourcing: ↑ Floor prices expect +3–5% on denim bottoms through Q2.
        </p>
      </div>

      <div className="intel-card__stats intel-card__stats--four">
        <div className="intel-card__stat">
          <span className="intel-card__stat-label">Avg lead time</span>
          <span className="intel-card__stat-value">23 days</span>
        </div>
        <div className="intel-card__stat">
          <span className="intel-card__stat-label">Supplier rating</span>
          <span className="intel-card__stat-value">4.7 / 5</span>
        </div>
        <div className="intel-card__stat">
          <span className="intel-card__stat-label">Capacity</span>
          <span className="intel-card__stat-value">86%</span>
        </div>
        <div className="intel-card__stat">
          <span className="intel-card__stat-label">On-time ship</span>
          <span className="intel-card__stat-value">91%</span>
        </div>
      </div>

      <div className="intel-card__panel intel-card__panel--tight">
        <p className="intel-card__subhead">Regional spot (yarn)</p>
        <table className="intel-card__mini-table intel-card__mini-table--flush">
          <tbody>
            <tr>
              <td>India domestic</td>
              <td className="intel-card__mini-table-num">₹ 62.4/kg</td>
              <td className="intel-card__delta-inline">+1.1%</td>
            </tr>
            <tr>
              <td>Vietnam import</td>
              <td className="intel-card__mini-table-num">$1.12/kg</td>
              <td className="intel-card__delta-inline">+0.6%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="intel-card__foot-strip">
        <span className="intel-card__foot-item">Alerts: 2 new</span>
        <span className="intel-card__foot-item">Watchlist · Cotton + elastane</span>
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
    <div className="intel-features">
      <FeatureShowcaseRow
        visualSide="left"
        compactVisual
        wideGap
        headingId="intel-feature-hs"
        eyebrow="Classification"
        title="HS code deep-dive"
        description="See composition, the right HS heading, and duty scenarios together—so quotes reflect landed cost instead of FOB guesswork. Source Central keeps materials, codes, and corridor rules in one view for your team and auditors."
      >
        <IntelCardHsCode />
      </FeatureShowcaseRow>

      <FeatureShowcaseRow
        visualSide="right"
        compactVisual
        headingId="intel-feature-negotiation"
        eyebrow="Outreach"
        title="AI negotiation agent"
        description="Ground every counter in market signals—commodity moves, MOQ, and history—so messages sound sharp, not scripted. Escalation paths and floor prices stay visible instead of living in side threads."
      >
        <IntelCardNegotiation />
      </FeatureShowcaseRow>

      <FeatureShowcaseRow
        visualSide="left"
        compactVisual
        wideGap
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
