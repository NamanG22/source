import './WhySourceCentral.css'

const REASONS = [
  { title: 'Supplier discovery & verification', copy: 'One place to find and verify Indian manufacturers.' },
  { title: 'Quote intelligence & comparison', copy: 'AI-powered RFQ and quote comparison.' },
  { title: 'Tariff & compliance', copy: 'Tariff analysis and special conditions at a glance.' },
  { title: 'Communication & logistics', copy: 'Track chats across platforms; connect to logistics.' },
]

function WhySourceCentral() {
  return (
    <section className="why-source-central">
      <div className="why-source-central-inner">
        <h2 className="why-source-central-title">Why choose Source Central?</h2>
        <p className="why-source-central-desc">
          We’re not a directory — we’re a sourcing intelligence platform built for India’s MSME and global buyers.
        </p>
        <div className="why-source-central-grid">
          {REASONS.map((r) => (
            <div key={r.title} className="why-source-central-card">
              <h3 className="why-source-central-card-title">{r.title}</h3>
              <p className="why-source-central-card-copy">{r.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySourceCentral
