/**
 * Full ProductPedia dashboard data per product (dummy).
 * Replace with API calls later.
 */

import { getProductBySlug } from './productpediaProducts'

// Country lat/lng for map markers (subset)
export const COUNTRY_COORDS = {
  India: [20.5937, 78.9629],
  China: [35.8617, 104.1954],
  USA: [37.0902, -95.7129],
  UAE: [23.4241, 53.8478],
  Germany: [51.1657, 10.4515],
  UK: [55.3781, -3.4360],
  Bangladesh: [23.6850, 90.3563],
  Vietnam: [14.0583, 108.2772],
  Netherlands: [52.1326, 5.2913],
  France: [46.2276, 2.2137],
  Japan: [36.2048, 138.2529],
  Italy: [41.8719, 12.5674],
  Spain: [40.4637, -3.7492],
  Australia: [-25.2744, 133.7751],
  Turkey: [38.9637, 35.2433],
  Indonesia: [-0.7893, 113.9213],
  Pakistan: [30.3753, 69.3451],
  'Saudi Arabia': [23.8859, 45.0792],
  'South Korea': [35.9078, 127.7669],
  Canada: [56.1304, -106.3468],
}

export function getDashboardData(productSlug, userCountry = null) {
  const product = getProductBySlug(productSlug) || { name: 'Product', hsnCode: '00', category: 'General' }
  return {
    // ——— Section A ———
    identityCard: {
      productName: product.name,
      hsCodes: [product.hsnCode, product.hsnCode + '05', product.hsnCode + '09'].filter(Boolean).slice(0, 4),
      chemicalFormula: null,
      casNumber: null,
      unNumber: null,
      commonTradeNames: ['Knitwear', 'Woven garments', 'Ready-made garments', 'RMG'],
    },
    quickStats: [
      { label: 'Global Market Size', value: 'USD 1.2 Tn', sub: '2024' },
      { label: 'YoY Growth Rate', value: '+4.2%', sub: '2023–24' },
      { label: 'Top Exporter Country', value: 'China', sub: 'Share 35%' },
      { label: "India's Export Rank", value: '2nd', sub: 'Global' },
    ],
    confidenceScore: {
      level: 'High Confidence',
      detail: 'Based on 3 verified trade data sources',
    },

    // ——— Section B ———
    globalMarketSize: {
      value: 'USD 1.18 Tn',
      year: '2024',
      sparklineData: [0.92, 0.98, 1.05, 1.12, 1.18],
      sparklineYears: ['2020', '2021', '2022', '2023', '2024'],
    },
    marketGrowthTrend: {
      cagr5y: 4.2,
      momentum: 'bull',
      trendData: [
        { year: '2020', value: 920 },
        { year: '2021', value: 980 },
        { year: '2022', value: 1050 },
        { year: '2023', value: 1120 },
        { year: '2024', value: 1180 },
      ],
    },
    productUseCases: [
      { name: 'Apparel & Fashion', icon: '👕' },
      { name: 'Retail', icon: '🛒' },
      { name: 'E-commerce', icon: '📦' },
      { name: 'Textile Manufacturing', icon: '🏭' },
      { name: 'Export Trading', icon: '🌐' },
    ],
    productDescription: `This product category covers knitted and crocheted apparel and clothing accessories, including pullovers, cardigans, T-shirts, underwear, and similar garments. The global market is driven by fast fashion, e-commerce, and shifting consumer preferences toward sustainable and ethically sourced clothing.\n\nProduction is concentrated in Asia, with China, India, and Bangladesh as the largest manufacturers. Common variants include cotton knitwear, synthetic blends, and organic cotton lines. Quality tiers range from commodity to premium branded apparel.`,
    keyCharacteristics: [
      { property: 'Material', value: 'Cotton, polyester, blends' },
      { property: 'Weight range', value: '80–250 g/m²' },
      { property: 'Finish', value: 'Dyed, printed, bleached' },
      { property: 'Packaging', value: 'Pieces, dozen, cartons' },
    ],

    // ——— Section C ———
    mapExporters: [
      { country: 'China', value: 185000, volume: 'MT', yoy: 2.1, share: 35.2 },
      { country: 'India', value: 42000, volume: 'MT', yoy: 5.8, share: 8.0 },
      { country: 'Bangladesh', value: 38000, volume: 'MT', yoy: 4.2, share: 7.2 },
      { country: 'Vietnam', value: 32000, volume: 'MT', yoy: 6.1, share: 6.1 },
      { country: 'Turkey', value: 18000, volume: 'MT', yoy: -0.5, share: 3.4 },
      { country: 'Germany', value: 16500, volume: 'MT', yoy: 1.2, share: 3.1 },
      { country: 'Italy', value: 14200, volume: 'MT', yoy: 2.0, share: 2.7 },
      { country: 'USA', value: 12000, volume: 'MT', yoy: 0.8, share: 2.3 },
      { country: 'Spain', value: 9800, volume: 'MT', yoy: 1.5, share: 1.9 },
      { country: 'Netherlands', value: 8500, volume: 'MT', yoy: 3.0, share: 1.6 },
    ],
    mapImporters: [
      { country: 'USA', value: 98000, volume: 'MT', yoy: 1.2, share: 18.6 },
      { country: 'Germany', value: 52000, volume: 'MT', yoy: 2.1, share: 9.9 },
      { country: 'Japan', value: 38000, volume: 'MT', yoy: 0.5, share: 7.2 },
      { country: 'UK', value: 35000, volume: 'MT', yoy: 2.8, share: 6.6 },
      { country: 'France', value: 32000, volume: 'MT', yoy: 1.8, share: 6.1 },
      { country: 'Spain', value: 22000, volume: 'MT', yoy: 2.2, share: 4.2 },
      { country: 'Italy', value: 20000, volume: 'MT', yoy: 1.0, share: 3.8 },
      { country: 'Netherlands', value: 18000, volume: 'MT', yoy: 3.2, share: 3.4 },
      { country: 'Canada', value: 15000, volume: 'MT', yoy: 0.9, share: 2.9 },
      { country: 'Australia', value: 12000, volume: 'MT', yoy: 1.5, share: 2.3 },
    ],

    // ——— Section D ———
    topExporters: [
      { rank: 1, country: 'China', flag: '🇨🇳', exportValue: 185, marketShare: 35.2, yoy: 2.1, trend: 'up' },
      { rank: 2, country: 'India', flag: '🇮🇳', exportValue: 42, marketShare: 8.0, yoy: 5.8, trend: 'up', isIndia: true },
      { rank: 3, country: 'Bangladesh', flag: '🇧🇩', exportValue: 38, marketShare: 7.2, yoy: 4.2, trend: 'up' },
      { rank: 4, country: 'Vietnam', flag: '🇻🇳', exportValue: 32, marketShare: 6.1, yoy: 6.1, trend: 'up' },
      { rank: 5, country: 'Turkey', flag: '🇹🇷', exportValue: 18, marketShare: 3.4, yoy: -0.5, trend: 'down' },
      { rank: 6, country: 'Germany', flag: '🇩🇪', exportValue: 16.5, marketShare: 3.1, yoy: 1.2, trend: 'up' },
      { rank: 7, country: 'Italy', flag: '🇮🇹', exportValue: 14.2, marketShare: 2.7, yoy: 2.0, trend: 'up' },
      { rank: 8, country: 'USA', flag: '🇺🇸', exportValue: 12, marketShare: 2.3, yoy: 0.8, trend: 'up' },
      { rank: 9, country: 'Spain', flag: '🇪🇸', exportValue: 9.8, marketShare: 1.9, yoy: 1.5, trend: 'up' },
      { rank: 10, country: 'Netherlands', flag: '🇳🇱', exportValue: 8.5, marketShare: 1.6, yoy: 3.0, trend: 'up' },
    ],
    chinaIndiaComparison: {
      show: true,
      indiaPriceAdvantage: '~12–18% lower unit cost vs China for comparable quality',
      tariffAdvantage: 'Preferential access to EU, UK, UAE under FTAs',
      qualityComparison: 'Indian exporters increasingly matching China on consistency; strong in cotton and sustainable lines',
    },

    // ——— Section E ———
    topImporters: [
      { rank: 1, country: 'USA', flag: '🇺🇸', importValue: 98, marketShare: 18.6, yoy: 1.2, trend: 'up' },
      { rank: 2, country: 'Germany', flag: '🇩🇪', importValue: 52, marketShare: 9.9, yoy: 2.1, trend: 'up' },
      { rank: 3, country: 'Japan', flag: '🇯🇵', importValue: 38, marketShare: 7.2, yoy: 0.5, trend: 'neutral' },
      { rank: 4, country: 'UK', flag: '🇬🇧', importValue: 35, marketShare: 6.6, yoy: 2.8, trend: 'up' },
      { rank: 5, country: 'France', flag: '🇫🇷', importValue: 32, marketShare: 6.1, yoy: 1.8, trend: 'up' },
      { rank: 6, country: 'Spain', flag: '🇪🇸', importValue: 22, marketShare: 4.2, yoy: 2.2, trend: 'up' },
      { rank: 7, country: 'Italy', flag: '🇮🇹', importValue: 20, marketShare: 3.8, yoy: 1.0, trend: 'up' },
      { rank: 8, country: 'Netherlands', flag: '🇳🇱', importValue: 18, marketShare: 3.4, yoy: 3.2, trend: 'up' },
      { rank: 9, country: 'Canada', flag: '🇨🇦', importValue: 15, marketShare: 2.9, yoy: 0.9, trend: 'up' },
      { rank: 10, country: 'Australia', flag: '🇦🇺', importValue: 12, marketShare: 2.3, yoy: 1.5, trend: 'up' },
    ],
    buyerCountryCta: userCountry
      ? { show: true, message: "You're sourcing from a high-import country — ideal for India sourcing" }
      : { show: false },

    // ——— Section F ———
    indiaExportSummary: {
      totalExportValue: 'USD 42 Bn',
      volume: '2.1 Mn MT',
      yoyGrowth: '+5.8%',
      activeExporters: '12,400+',
      top3Buyers: ['USA', 'UAE', 'UK'],
    },
    indiaClusters: [
      { city: 'Tiruppur', state: 'Tamil Nadu', label: 'Knitwear hub' },
      { city: 'Ludhiana', state: 'Punjab', label: 'Woolen & knit' },
      { city: 'NCR (Delhi-Noida)', state: 'NCR', label: 'Woven & apparel' },
      { city: 'Mumbai', state: 'Maharashtra', label: 'Design & export' },
      { city: 'Kolkata', state: 'West Bengal', label: 'Traditional wear' },
      { city: 'Bengaluru', state: 'Karnataka', label: 'Fashion tech' },
    ],
    verifiedSuppliers: [
      { id: 1, name: 'ABC Textiles Ltd', tier: 'Verified', moq: '500 pcs', leadTime: '21 days', logo: null },
      { id: 2, name: 'KnitPro Industries', tier: 'Gold', moq: '1,000 pcs', leadTime: '14 days', logo: null },
      { id: 3, name: 'Garment World Exports', tier: 'Verified', moq: '2,000 pcs', leadTime: '30 days', logo: null },
      { id: 4, name: 'Stylecraft Apparels', tier: 'Gold', moq: '500 pcs', leadTime: '18 days', logo: null },
      { id: 5, name: 'Cotton Plus Pvt Ltd', tier: 'Verified', moq: '800 pcs', leadTime: '25 days', logo: null },
    ],
    totalVerifiedSuppliers: 248,
    averagePricingIndia: {
      min: 4.2,
      max: 8.5,
      unit: 'USD/piece',
      updated: 'Mar 2025',
    },

    // ——— Section G ———
    importTariffUserCountry: {
      userCountry: userCountry || 'USA',
      mfnTariff: 16.5,
      preferentialTariff: '0% (GSP)',
      antiDumping: 'None',
    },
    keyImportingCountriesTariffs: [
      { country: 'USA', mfn: 16.5, preferential: '0% (GSP)', note: 'Section 301 may apply' },
      { country: 'EU', mfn: 12, preferential: '0% (GSP)', note: 'GSP+ for India' },
      { country: 'UK', mfn: 12, preferential: '0% (UK-India FTA under negotiation)', note: '' },
      { country: 'UAE', mfn: 5, preferential: '0% (CEPA)', note: '' },
      { country: 'Japan', mfn: 10.9, preferential: '0% (EPA)', note: '' },
    ],
    indiaTariffContext: {
      exportDuty: 'None',
      gstDomestic: '12%',
      dutyDrawback: '~2–3% of FOB',
    },
    ftaOpportunities: [
      'India-UAE CEPA: 0% for qualifying goods',
      'India-Australia ECTA: Tariff reduction roadmap',
      'SAFTA: Preferential access to South Asia',
    ],
    regulatoryFlags: [
      { code: 'REACH', label: 'REACH', applicable: true, explainer: 'EU regulation on chemicals in textiles' },
      { code: 'Oeko-Tex', label: 'Oeko-Tex', applicable: true, explainer: 'Common certification for textile safety' },
      { code: 'FSSAI', label: 'FSSAI', applicable: false, explainer: 'Not applicable for apparel' },
      { code: 'BIS', label: 'BIS', applicable: false, explainer: 'Not mandatory for most garments' },
      { code: 'Hazardous', label: 'Non-hazardous', applicable: false, explainer: 'General apparel not classified hazardous' },
    ],
    requiredCertifications: [
      { market: 'EU', certs: 'OEKO-TEX, REACH compliance' },
      { market: 'USA', certs: 'CPSIA, FTC labeling' },
      { market: 'UK', certs: 'UKCA, OEKO-TEX' },
    ],

    // ——— Section H ———
    globalPriceBenchmark: {
      value: 6.8,
      unit: 'USD/piece',
      period: 'Mar 2025',
    },
    indiaPriceRange: {
      min: 4.2,
      max: 8.5,
      unit: 'USD/piece',
      inrApprox: '₹350–700/piece',
    },
    priceTrendData: [
      { month: 'Apr', value: 5.2 },
      { month: 'May', value: 5.4 },
      { month: 'Jun', value: 5.5 },
      { month: 'Jul', value: 5.8 },
      { month: 'Aug', value: 6.0 },
      { month: 'Sep', value: 6.1 },
      { month: 'Oct', value: 6.2 },
      { month: 'Nov', value: 6.4 },
      { month: 'Dec', value: 6.5 },
      { month: 'Jan', value: 6.6 },
      { month: 'Feb', value: 6.7 },
      { month: 'Mar', value: 6.8 },
    ],
    landedCostDefaults: {
      freightPerUnitEst: 0.5,
      insurancePct: 0.5,
      currency: 'USD',
    },
  }
}
