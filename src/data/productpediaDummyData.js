/**
 * Dummy data for ProductPedia dashboards. Replace with real API/data later.
 */

export function getImportsByCountry(/* productSlug */) {
  return [
    { country: 'China', value: 4200, unit: 'USD Mn' },
    { country: 'USA', value: 2800, unit: 'USD Mn' },
    { country: 'UAE', value: 1900, unit: 'USD Mn' },
    { country: 'Germany', value: 1650, unit: 'USD Mn' },
    { country: 'Bangladesh', value: 1200, unit: 'USD Mn' },
    { country: 'Vietnam', value: 980, unit: 'USD Mn' },
    { country: 'UK', value: 850, unit: 'USD Mn' },
    { country: 'France', value: 720, unit: 'USD Mn' },
    { country: 'Italy', value: 610, unit: 'USD Mn' },
    { country: 'Spain', value: 490, unit: 'USD Mn' },
  ]
}

export function getExportsByCountry(/* productSlug */) {
  return [
    { country: 'USA', value: 3800, unit: 'USD Mn' },
    { country: 'UAE', value: 2200, unit: 'USD Mn' },
    { country: 'UK', value: 1500, unit: 'USD Mn' },
    { country: 'Germany', value: 1350, unit: 'USD Mn' },
    { country: 'Netherlands', value: 980, unit: 'USD Mn' },
    { country: 'France', value: 820, unit: 'USD Mn' },
    { country: 'Spain', value: 650, unit: 'USD Mn' },
    { country: 'Italy', value: 540, unit: 'USD Mn' },
    { country: 'Japan', value: 420, unit: 'USD Mn' },
    { country: 'Australia', value: 380, unit: 'USD Mn' },
  ]
}

export function getProductionByCountry(/* productSlug */) {
  return [
    { country: 'China', value: 18500, unit: 'USD Mn' },
    { country: 'India', value: 8200, unit: 'USD Mn' },
    { country: 'Bangladesh', value: 4200, unit: 'USD Mn' },
    { country: 'Vietnam', value: 3800, unit: 'USD Mn' },
    { country: 'Turkey', value: 2100, unit: 'USD Mn' },
    { country: 'Indonesia', value: 1900, unit: 'USD Mn' },
    { country: 'USA', value: 1650, unit: 'USD Mn' },
    { country: 'Italy', value: 1200, unit: 'USD Mn' },
    { country: 'Germany', value: 980, unit: 'USD Mn' },
    { country: 'Pakistan', value: 850, unit: 'USD Mn' },
  ]
}

export function getTradeBalanceTrend(/* productSlug */) {
  return [
    { year: '2019', imports: 12000, exports: 10500, production: 45000 },
    { year: '2020', imports: 9800, exports: 11200, production: 42000 },
    { year: '2021', imports: 14500, exports: 13800, production: 52000 },
    { year: '2022', imports: 16200, exports: 15500, production: 58000 },
    { year: '2023', imports: 15800, exports: 16800, production: 61000 },
    { year: '2024', imports: 17200, exports: 18200, production: 65000 },
  ]
}

export function getTopTradingPartners(/* productSlug */) {
  return [
    { partner: 'USA', exportShare: 22, importShare: 8, type: 'Export dominant' },
    { partner: 'China', exportShare: 3, importShare: 28, type: 'Import dominant' },
    { partner: 'UAE', exportShare: 14, importShare: 12, type: 'Balanced' },
    { partner: 'UK', exportShare: 10, importShare: 4, type: 'Export dominant' },
    { partner: 'Germany', exportShare: 9, importShare: 10, type: 'Balanced' },
  ]
}

export function getTariffSummary(/* productSlug */) {
  return {
    avgImportDuty: 12.5,
    preferentialRates: ['0% (FTA partners)', '5% (ASEAN)', '7.5% (UK)'],
    gstRate: 12,
    commonExportMarkets: ['USA', 'UAE', 'UK', 'Germany', 'Netherlands'],
  }
}

export function getMarketOverview(/* productSlug */) {
  return {
    globalMarketSize: 'USD 1.2 Tn (2024)',
    cagr: 4.2,
    topProducers: ['China', 'India', 'Bangladesh', 'Vietnam', 'Turkey'],
    keyDrivers: ['E-commerce', 'Sustainability', 'Fast fashion', 'Regional trade pacts'],
  }
}
