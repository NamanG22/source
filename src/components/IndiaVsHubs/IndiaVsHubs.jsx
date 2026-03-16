import './IndiaVsHubs.css'

function IndiaVsHubs() {
  const hubs = [
    { name: 'India', stat: '60M+ MSME', note: 'Largest base, under-served by platforms' },
    { name: 'China', stat: 'Dominant', note: 'Mature ecosystem; diversification demand' },
    { name: 'Vietnam', stat: 'Growing', note: 'Key China+1 beneficiary' },
  ]

  return (
    <section className="india-vs-hubs">
      <div className="india-vs-hubs-inner">
        <h2 className="india-vs-hubs-title">India vs other sourcing hubs</h2>
        <p className="india-vs-hubs-desc">
          See how India stacks up — and why now is the right time to source here.
        </p>
        <div className="india-vs-hubs-grid">
          {hubs.map((hub) => (
            <div key={hub.name} className="india-vs-hubs-card">
              <div className="india-vs-hubs-card-name">{hub.name}</div>
              <div className="india-vs-hubs-card-stat">{hub.stat}</div>
              <div className="india-vs-hubs-card-note">{hub.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndiaVsHubs
