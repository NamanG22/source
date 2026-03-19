import { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from 'recharts'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getProductBySlug } from '../../data/productpediaProducts'
import { getDashboardData, COUNTRY_COORDS } from '../../data/productpediaDashboardData'
import { useAuth } from '../../contexts/AuthContext'
import './ProductPediaDashboard.css'

function MapView({ data, viewMode, highlightIndia }) {
  const maxVal = Math.max(...data.map((d) => d.value), 1)
  return (
    <>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution='&copy; OpenStreetMap' />
      {data.map((row) => {
        const coords = COUNTRY_COORDS[row.country]
        if (!coords) return null
        const isIndia = row.country === 'India'
        const radius = 8 + (row.value / maxVal) * 22
        const fill = viewMode === 'exporter' ? '#22c55e' : '#3b82f6'
        return (
          <CircleMarker
            key={row.country}
            center={coords}
            radius={radius}
            pathOptions={{
              fillColor: fill,
              color: isIndia && highlightIndia ? '#166534' : 'rgba(0,0,0,0.2)',
              weight: isIndia && highlightIndia ? 4 : 1.5,
              fillOpacity: 0.7,
            }}
          >
            <Popup>
              <strong>{row.country}</strong>
              <br />
              {viewMode === 'exporter' ? 'Export' : 'Import'} value: USD {row.value} Mn
              <br />
              Volume: {row.volume} | YoY: {row.yoy}% | Share: {row.share}%
            </Popup>
          </CircleMarker>
        )
      })}
    </>
  )
}

function ProductPediaDashboard({ productSlug, onSearch, compactQuery, setCompactQuery }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const product = getProductBySlug(productSlug)
  const containerRef = useRef(null)
  const [mapView, setMapView] = useState('exporter')
  const [landedQty, setLandedQty] = useState(1000)
  const [landedCountry, setLandedCountry] = useState('USA')
  const [shared, setShared] = useState(false)

  if (!product) {
    return (
      <div className="pp-dashboard pp-dashboard--error">
        <p>Product not found.</p>
        <Link to="/productpedia">← Back to ProductPedia search</Link>
      </div>
    )
  }

  const userCountry = null // TODO: from profile
  const d = getDashboardData(productSlug, userCountry)
  const marketplaceUrl = `/marketplace?hs=${encodeURIComponent(product.hsnCode)}&category=${encodeURIComponent(product.category)}`
  const identity = d.identityCard

  // Scroll reveal
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const sections = el.querySelectorAll('.pp-section')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('pp-section--visible'))
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [productSlug])

  const handleShare = () => {
    const url = window.location.href
    navigator.clipboard?.writeText(url).then(() => setShared(true))
    setTimeout(() => setShared(false), 2000)
  }

  const landedCostEst =
    (d.indiaPriceRange.min + d.indiaPriceRange.max) / 2 * landedQty +
    d.landedCostDefaults.freightPerUnitEst * landedQty +
    (d.landedCostDefaults.insurancePct / 100) * landedQty * ((d.indiaPriceRange.min + d.indiaPriceRange.max) / 2)
  const tariffRate = d.keyImportingCountriesTariffs.find((t) => t.country === landedCountry)?.mfn ?? 12
  const landedWithTariff = landedCostEst * (1 + tariffRate / 100)

  return (
    <div className="pp-dashboard" ref={containerRef}>
      {/* ——— Compact search bar (top) ——— */}
      {onSearch && (
        <section className="pp-section pp-search-bar">
          <form
            className="pp-search-form"
            onSubmit={(e) => {
              e.preventDefault()
              const q = compactQuery.trim()
              if (q) onSearch(q)
            }}
          >
            <input
              type="search"
              className="pp-search-input"
              placeholder="Search another product, HSN code, or category..."
              value={compactQuery}
              onChange={(e) => setCompactQuery(e.target.value)}
              aria-label="Search ProductPedia"
            />
            <button type="submit" className="pp-search-btn">Search</button>
          </form>
        </section>
      )}

      {/* ——— Section A: Product Header & Quick Stats ——— */}
      <section className="pp-section pp-section-a">
        <nav className="pp-breadcrumb">
          <Link to="/productpedia">ProductPedia</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span>{product.name}</span>
        </nav>
        <div className="pp-identity-card">
          <h1 className="pp-identity-title">{identity.productName}</h1>
          <div className="pp-identity-meta">
            <span>HS Code(s): {identity.hsCodes.join(', ')}</span>
            {identity.chemicalFormula && <span>Chemical formula: {identity.chemicalFormula}</span>}
            {identity.casNumber && <span>CAS: {identity.casNumber}</span>}
            {identity.unNumber && <span>UN: {identity.unNumber}</span>}
            {identity.commonTradeNames?.length > 0 && (
              <span>Trade names: {identity.commonTradeNames.join(', ')}</span>
            )}
          </div>
        </div>
        <div className="pp-quick-stats">
          {d.quickStats.map((stat, i) => (
            <div key={i} className="pp-stat-pill">
              <span className="pp-stat-value">{stat.value}</span>
              <span className="pp-stat-label">{stat.label}</span>
              {stat.sub && <span className="pp-stat-sub">{stat.sub}</span>}
            </div>
          ))}
        </div>
        <div className="pp-confidence">
          <span className="pp-confidence-badge">
            {d.confidenceScore.level} (based on {d.confidenceScore.detail})
          </span>
        </div>
      </section>

      {/* ——— Section B: Global Market Intelligence ——— */}
      <section className="pp-section pp-section-b">
        <h2 className="pp-section-title">Global Market Intelligence</h2>
        <div className="pp-b-grid">
          <div className="pp-card pp-global-size">
            <span className="pp-card-label">Global Market Size</span>
            <span className="pp-card-value">{d.globalMarketSize.value}</span>
            <span className="pp-card-sub">{d.globalMarketSize.year}</span>
            <div className="pp-sparkline">
              <ResponsiveContainer width="100%" height={40}>
                <AreaChart data={d.globalMarketSize.sparklineYears.map((y, i) => ({ y, v: d.globalMarketSize.sparklineData[i] }))}>
                  <Area type="monotone" dataKey="v" stroke="var(--color-accent)" fill="var(--color-accent-soft)" strokeWidth={1.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="pp-card">
            <span className="pp-card-label">5-Year CAGR</span>
            <span className="pp-card-value">{d.marketGrowthTrend.cagr5y}%</span>
            <span className={`pp-momentum pp-momentum--${d.marketGrowthTrend.momentum}`}>
              {d.marketGrowthTrend.momentum === 'bull' ? '↗ Bullish' : '↘ Bearish'}
            </span>
            <div className="pp-chart-wrap">
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={d.marketGrowthTrend.trendData}>
                  <Line type="monotone" dataKey="value" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="pp-use-cases">
          <span className="pp-use-cases-label">Product use cases</span>
          <div className="pp-use-cases-tags">
            {d.productUseCases.map((u, i) => (
              <span key={i} className="pp-tag"><span className="pp-tag-icon">{u.icon}</span> {u.name}</span>
            ))}
          </div>
        </div>
        <div className="pp-description">
          <h3 className="pp-description-title">Product description</h3>
          {d.productDescription.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {d.keyCharacteristics?.length > 0 && (
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                {d.keyCharacteristics.map((r, i) => (
                  <tr key={i}><td>{r.property}</td><td>{r.value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ——— Section C: Global Trade Flow Map ——— */}
      <section className="pp-section pp-section-c">
        <h2 className="pp-section-title">Global Trade Flow Map</h2>
        <div className="pp-map-toggle">
          <button
            type="button"
            className={`pp-toggle-btn ${mapView === 'exporter' ? 'pp-toggle-btn--active' : ''}`}
            onClick={() => setMapView('exporter')}
          >
            Exporter view
          </button>
          <button
            type="button"
            className={`pp-toggle-btn ${mapView === 'importer' ? 'pp-toggle-btn--active' : ''}`}
            onClick={() => setMapView('importer')}
          >
            Importer view
          </button>
        </div>
        <p className="pp-map-hint">Click a country for details. India is highlighted in exporter view.</p>
        <div className="pp-map-wrap">
          <MapContainer
            center={[25, 80]}
            zoom={2}
            className="pp-map"
            scrollWheelZoom={false}
          >
            <MapView
              data={mapView === 'exporter' ? d.mapExporters : d.mapImporters}
              viewMode={mapView}
              highlightIndia={mapView === 'exporter'}
            />
          </MapContainer>
        </div>
      </section>

      {/* ——— Section D: Top Exporters ——— */}
      <section className="pp-section pp-section-d">
        <h2 className="pp-section-title">Top 10 Exporter Countries</h2>
        <div className="pp-table-wrap">
          <table className="pp-table pp-table--sortable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Country</th>
                <th>Export value (USD Bn)</th>
                <th>Market share</th>
                <th>YoY change</th>
                <th>Trend</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {d.topExporters.map((r) => (
                <tr key={r.rank} className={r.isIndia ? 'pp-row-india' : ''}>
                  <td>{r.rank}</td>
                  <td><span className="pp-flag">{r.flag}</span> {r.country}</td>
                  <td>{r.exportValue}</td>
                  <td>{r.marketShare}%</td>
                  <td>{r.yoy > 0 ? '+' : ''}{r.yoy}%</td>
                  <td>{r.trend === 'up' ? '↑' : r.trend === 'down' ? '↓' : '→'}</td>
                  <td>{r.isIndia ? <Link to={marketplaceUrl} className="pp-inline-cta">Find Indian Suppliers →</Link> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {d.chinaIndiaComparison?.show && (
          <div className="pp-callout">
            <h4>China vs India</h4>
            <p><strong>India price advantage:</strong> {d.chinaIndiaComparison.indiaPriceAdvantage}</p>
            <p><strong>Tariff advantage:</strong> {d.chinaIndiaComparison.tariffAdvantage}</p>
            <p><strong>Quality:</strong> {d.chinaIndiaComparison.qualityComparison}</p>
          </div>
        )}
      </section>

      {/* ——— Section E: Top Importers ——— */}
      <section className="pp-section pp-section-e">
        <h2 className="pp-section-title">Top 10 Importer Countries</h2>
        {d.buyerCountryCta?.show && (
          <p className="pp-buyer-cta">{d.buyerCountryCta.message}</p>
        )}
        <div className="pp-table-wrap">
          <table className="pp-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Country</th>
                <th>Import value (USD Bn)</th>
                <th>Market share</th>
                <th>YoY change</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {d.topImporters.map((r) => (
                <tr key={r.rank}>
                  <td>{r.rank}</td>
                  <td><span className="pp-flag">{r.flag}</span> {r.country}</td>
                  <td>{r.importValue}</td>
                  <td>{r.marketShare}%</td>
                  <td>{r.yoy > 0 ? '+' : ''}{r.yoy}%</td>
                  <td>{r.trend === 'up' ? '↑' : r.trend === 'down' ? '↓' : '→'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ——— Section F: India Supplier Intelligence ——— */}
      <section className="pp-section pp-section-f">
        <h2 className="pp-section-title">India Supplier Intelligence</h2>
        <div className="pp-india-summary">
          <div className="pp-summary-card">
            <span className="pp-summary-label">India export value</span>
            <span className="pp-summary-value">{d.indiaExportSummary.totalExportValue}</span>
          </div>
          <div className="pp-summary-card">
            <span className="pp-summary-label">Volume</span>
            <span className="pp-summary-value">{d.indiaExportSummary.volume}</span>
          </div>
          <div className="pp-summary-card">
            <span className="pp-summary-label">YoY growth</span>
            <span className="pp-summary-value pp-summary-value--green">{d.indiaExportSummary.yoyGrowth}</span>
          </div>
          <div className="pp-summary-card">
            <span className="pp-summary-label">Active exporters</span>
            <span className="pp-summary-value">{d.indiaExportSummary.activeExporters}</span>
          </div>
          <div className="pp-summary-card">
            <span className="pp-summary-label">Top 3 buyers</span>
            <span className="pp-summary-value">{d.indiaExportSummary.top3Buyers.join(', ')}</span>
          </div>
        </div>
        <div className="pp-clusters">
          <h3 className="pp-clusters-title">Top Indian export clusters</h3>
          <div className="pp-clusters-map">
            <div className="pp-clusters-list">
              {d.indiaClusters.map((c, i) => (
                <div key={i} className="pp-cluster-chip">
                  <strong>{c.city}</strong>, {c.state} — {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pp-suppliers">
          <h3 className="pp-suppliers-title">Matched verified suppliers</h3>
          <div className="pp-suppliers-carousel">
            {d.verifiedSuppliers.map((s) => (
              <div key={s.id} className="pp-supplier-card">
                <div className="pp-supplier-logo">{s.logo ? <img src={s.logo} alt="" /> : <span>Co</span>}</div>
                <div className="pp-supplier-info">
                  <span className="pp-supplier-name">{s.name}</span>
                  <span className="pp-supplier-tier">{s.tier}</span>
                  <span>MOQ: {s.moq} · Lead: {s.leadTime}</span>
                </div>
                <div className="pp-supplier-actions">
                  <Link to={marketplaceUrl} className="pp-btn pp-btn--sm">View</Link>
                  <button type="button" className="pp-btn pp-btn--sm pp-btn--outline">RFQ</button>
                </div>
              </div>
            ))}
          </div>
          <Link to={marketplaceUrl} className="pp-suppliers-link">View all {d.totalVerifiedSuppliers} suppliers →</Link>
        </div>
        <div className="pp-price-card">
          <span className="pp-price-label">Average pricing (India)</span>
          <span className="pp-price-value">{d.averagePricingIndia.min}–{d.averagePricingIndia.max} {d.averagePricingIndia.unit}</span>
          <span className="pp-price-updated">Updated {d.averagePricingIndia.updated}</span>
        </div>
      </section>

      {/* ——— Section G: Tariff & Compliance ——— */}
      <section className="pp-section pp-section-g">
        <h2 className="pp-section-title">Tariff & Compliance Intelligence</h2>
        <div className="pp-tariff-grid">
          <div className="pp-table-wrap">
            <h4>Import tariff (your country → India)</h4>
            <table className="pp-table">
              <tbody>
                <tr><td>MFN tariff</td><td>{d.importTariffUserCountry.mfnTariff}%</td></tr>
                <tr><td>Preferential</td><td>{d.importTariffUserCountry.preferentialTariff}</td></tr>
                <tr><td>Anti-dumping</td><td>{d.importTariffUserCountry.antiDumping}</td></tr>
              </tbody>
            </table>
          </div>
          <div className="pp-table-wrap">
            <h4>Key importing countries tariffs</h4>
            <table className="pp-table">
              <thead><tr><th>Country</th><th>MFN</th><th>Preferential</th><th>Note</th></tr></thead>
              <tbody>
                {d.keyImportingCountriesTariffs.map((t, i) => (
                  <tr key={i}><td>{t.country}</td><td>{t.mfn}%</td><td>{t.preferential}</td><td>{t.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pp-table-wrap">
          <h4>India tariff context</h4>
          <table className="pp-table">
            <tbody>
              <tr><td>Export duty</td><td>{d.indiaTariffContext.exportDuty}</td></tr>
              <tr><td>GST (domestic)</td><td>{d.indiaTariffContext.gstDomestic}</td></tr>
              <tr><td>Duty drawback</td><td>{d.indiaTariffContext.dutyDrawback}</td></tr>
            </tbody>
          </table>
        </div>
        {d.ftaOpportunities?.length > 0 && (
          <div className="pp-fta">
            <h4>FTA opportunities</h4>
            <ul>{d.ftaOpportunities.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        )}
        <div className="pp-regulatory">
          <h4>Regulatory flags</h4>
          <div className="pp-regulatory-badges">
            {d.regulatoryFlags.map((f, i) => (
              <span
                key={i}
                className={`pp-reg-badge pp-reg-badge--${f.applicable ? 'yes' : 'no'}`}
                title={f.explainer}
              >
                {f.label}
              </span>
            ))}
          </div>
        </div>
        {d.requiredCertifications?.length > 0 && (
          <div className="pp-table-wrap">
            <h4>Required certifications (top markets)</h4>
            <table className="pp-table">
              <thead><tr><th>Market</th><th>Certifications</th></tr></thead>
              <tbody>
                {d.requiredCertifications.map((c, i) => (
                  <tr key={i}><td>{c.market}</td><td>{c.certs}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ——— Section H: Price Intelligence ——— */}
      <section className="pp-section pp-section-h">
        <h2 className="pp-section-title">Price Intelligence</h2>
        <div className="pp-price-cards">
          <div className="pp-price-card">
            <span className="pp-price-label">Global price benchmark</span>
            <span className="pp-price-value">{d.globalPriceBenchmark.value} {d.globalPriceBenchmark.unit}</span>
            <span className="pp-price-updated">{d.globalPriceBenchmark.period}</span>
          </div>
          <div className="pp-price-card">
            <span className="pp-price-label">India price range</span>
            <span className="pp-price-value">{d.indiaPriceRange.min}–{d.indiaPriceRange.max} {d.indiaPriceRange.unit}</span>
            <span className="pp-price-updated">≈ {d.indiaPriceRange.inrApprox}</span>
          </div>
        </div>
        <div className="pp-chart-wrap">
          <span className="pp-card-label">12-month price trend</span>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={d.priceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 8 }} />
              <Line type="monotone" dataKey="value" stroke="var(--color-accent)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="pp-landed-cost">
          <h4>Landed cost calculator</h4>
          <p className="pp-landed-hint">Enter quantity and destination. Contact a supplier for exact pricing.</p>
          <div className="pp-landed-form">
            <label>
              Quantity <input type="number" min={1} value={landedQty} onChange={(e) => setLandedQty(Number(e.target.value) || 0)} />
            </label>
            <label>
              Your country
              <select value={landedCountry} onChange={(e) => setLandedCountry(e.target.value)}>
                {d.keyImportingCountriesTariffs.map((t) => (
                  <option key={t.country} value={t.country}>{t.country}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="pp-landed-result">
            <strong>Estimated landed cost (USD):</strong> {landedWithTariff.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            <br />
            <span className="pp-landed-note">Includes avg unit price, freight estimate, insurance, and {tariffRate}% tariff.</span>
          </div>
        </div>
      </section>

      {/* ——— Section I: Export/Import Actions ——— */}
      <section className="pp-section pp-section-i">
        <h2 className="pp-section-title">Actions</h2>
        <div className="pp-actions">
          <Link to={marketplaceUrl} className="pp-cta pp-cta--primary">
            Find Indian Suppliers
          </Link>
          {user ? (
            <button type="button" className="pp-cta pp-cta--secondary" onClick={() => window.print()}>
              Download intelligence report (PDF)
            </button>
          ) : (
            <Link to="/auth" className="pp-cta pp-cta--secondary">Sign in to download report</Link>
          )}
          <button type="button" className="pp-cta pp-cta--share" onClick={handleShare}>
            {shared ? 'Link copied!' : 'Share dashboard'}
          </button>
        </div>
        <p className="pp-back">
          <Link to="/productpedia">← Search another product</Link>
        </p>
      </section>
    </div>
  )
}

export default ProductPediaDashboard
