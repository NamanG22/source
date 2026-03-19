const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1947 + 1 }, (_, i) => currentYear - i)

export const YEAR_ESTABLISHED_OPTIONS = years.map((y) => ({ value: y, label: String(y) }))

export const NUMBER_OF_EMPLOYEES_OPTIONS = [
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201-500', label: '201-500' },
  { value: '500+', label: '500+' },
]

export const ANNUAL_TURNOVER_INR_OPTIONS = [
  { value: '<1Cr', label: '< ₹1 Cr' },
  { value: '1-5Cr', label: '₹1-5 Cr' },
  { value: '5-25Cr', label: '₹5-25 Cr' },
  { value: '25-100Cr', label: '₹25-100 Cr' },
  { value: '100Cr+', label: '₹100 Cr+' },
]

export const LEAD_TIME_OPTIONS = [
  { value: '1-7', label: '1-7 days' },
  { value: '7-14', label: '7-14 days' },
  { value: '14-30', label: '14-30 days' },
  { value: '30-60', label: '30-60 days' },
  { value: '60+', label: '60+ days' },
]

export const INCOTERMS_OPTIONS = [
  { value: 'FOB', label: 'FOB' },
  { value: 'CIF', label: 'CIF' },
  { value: 'EXW', label: 'EXW' },
  { value: 'DDP', label: 'DDP' },
  { value: 'DAP', label: 'DAP' },
  { value: 'FCA', label: 'FCA' },
]

export const PAYMENT_TERMS_OPTIONS = [
  { value: 'T/T', label: 'T/T' },
  { value: 'L/C', label: 'L/C' },
  { value: 'D/P', label: 'D/P' },
  { value: 'D/A', label: 'D/A' },
  { value: 'Advance', label: 'Advance' },
  { value: 'Others', label: 'Others' },
]

export const CERTIFICATIONS_OPTIONS = [
  'ISO 9001', 'ISO 14001', 'CE', 'FSSAI', 'BIS', 'REACH', 'RoHS', 'GMP', 'HACCP',
]

export const ANNUAL_EXPORT_VOLUME_OPTIONS = [
  { value: '<100k', label: '< $100K' },
  { value: '100k-500k', label: '$100K-$500K' },
  { value: '500k-1m', label: '$500K-$1M' },
  { value: '1m-5m', label: '$1M-$5M' },
  { value: '5m+', label: '$5M+' },
]

export const PLANT_AREA_UNIT_OPTIONS = [
  { value: 'sqft', label: 'Square feet' },
  { value: 'sqm', label: 'Square meters' },
]

export const CAPACITY_PERIOD_OPTIONS = [
  { value: 'per_month', label: 'Per month' },
  { value: 'per_year', label: 'Per year' },
]
