import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { ProfileSection, ProfileRow, profileOptionLabel } from '../ProfileView/ProfileView'
import {
  YEAR_ESTABLISHED_OPTIONS,
  NUMBER_OF_EMPLOYEES_OPTIONS,
  ANNUAL_TURNOVER_INR_OPTIONS,
  LEAD_TIME_OPTIONS,
  INCOTERMS_OPTIONS,
  PAYMENT_TERMS_OPTIONS,
  CERTIFICATIONS_OPTIONS,
  ANNUAL_EXPORT_VOLUME_OPTIONS,
  PLANT_AREA_UNIT_OPTIONS,
  CAPACITY_PERIOD_OPTIONS,
} from './constants'
import './ManufacturerProfileForm.css'

function parseJsonArray(v) {
  if (Array.isArray(v)) return v
  if (typeof v === 'string') {
    try {
      const a = JSON.parse(v)
      return Array.isArray(a) ? a : []
    } catch {
      return v ? [v] : []
    }
  }
  return []
}

function ManufacturerProfileForm({ userId, mode = 'view', onSaved, onCancel }) {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const [yearEstablished, setYearEstablished] = useState('')
  const [numberOfEmployees, setNumberOfEmployees] = useState('')
  const [annualTurnoverInr, setAnnualTurnoverInr] = useState('')
  const [exportExperienceYes, setExportExperienceYes] = useState(null)
  const [exportExperienceYears, setExportExperienceYears] = useState('')
  const [exportTopMarkets, setExportTopMarkets] = useState('')
  const [iecNumber, setIecNumber] = useState('')

  const [primaryProductCategories, setPrimaryProductCategories] = useState('')
  const [hsCodes, setHsCodes] = useState('')
  const [plantLocationsJson, setPlantLocationsJson] = useState('')
  const [totalPlantAreaValue, setTotalPlantAreaValue] = useState('')
  const [totalPlantAreaUnit, setTotalPlantAreaUnit] = useState('')
  const [typesOfMachines, setTypesOfMachines] = useState('')
  const [maxCapacityValue, setMaxCapacityValue] = useState('')
  const [maxCapacityUnit, setMaxCapacityUnit] = useState('')
  const [maxCapacityPeriod, setMaxCapacityPeriod] = useState('')
  const [normalCapacityValue, setNormalCapacityValue] = useState('')
  const [normalCapacityUnit, setNormalCapacityUnit] = useState('')
  const [leadTimeStandard, setLeadTimeStandard] = useState('')
  const [moqValue, setMoqValue] = useState('')
  const [moqUnit, setMoqUnit] = useState('')
  const [sampleAvailability, setSampleAvailability] = useState(null)
  const [sampleLeadTime, setSampleLeadTime] = useState('')
  const [sampleCost, setSampleCost] = useState('')

  const [certifications, setCertifications] = useState([])
  const [qualityControlProcess, setQualityControlProcess] = useState('')
  const [thirdPartyAudit, setThirdPartyAudit] = useState(null)
  const [thirdPartyAuditDetails, setThirdPartyAuditDetails] = useState('')
  const [gstCertificateUrl, setGstCertificateUrl] = useState('')
  const [msmeRegistrationNumber, setMsmeRegistrationNumber] = useState('')
  const [msmeDocumentUrl, setMsmeDocumentUrl] = useState('')

  const [exportMarketsCurrent, setExportMarketsCurrent] = useState('')
  const [targetExportMarkets, setTargetExportMarkets] = useState('')
  const [incotermsOffered, setIncotermsOffered] = useState([])
  const [portsOfShipment, setPortsOfShipment] = useState('')
  const [paymentTermsAccepted, setPaymentTermsAccepted] = useState([])
  const [annualExportVolumeUsd, setAnnualExportVolumeUsd] = useState('')

  const [bankIfsc, setBankIfsc] = useState('')
  const [bankAccountNumber, setBankAccountNumber] = useState('')
  const [tradeReferencesJson, setTradeReferencesJson] = useState('')
  const [financialSummaryUrl, setFinancialSummaryUrl] = useState('')

  useEffect(() => {
    if (!supabase || !userId) {
      setLoading(false)
      return
    }
    supabase
      .from('manufacturer_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        if (data) {
          setYearEstablished(data.year_established ?? '')
          setNumberOfEmployees(data.number_of_employees ?? '')
          setAnnualTurnoverInr(data.annual_turnover_inr ?? '')
          setExportExperienceYes(data.export_experience_yes ?? null)
          setExportExperienceYears(data.export_experience_years ?? '')
          setExportTopMarkets(data.export_top_markets ?? '')
          setIecNumber(data.iec_number ?? '')
          setPrimaryProductCategories(Array.isArray(data.primary_product_categories) ? data.primary_product_categories.join(', ') : '')
          setHsCodes(Array.isArray(data.hs_codes) ? data.hs_codes.join(', ') : '')
          setPlantLocationsJson(Array.isArray(data.plant_locations) ? JSON.stringify(data.plant_locations, null, 2) : '[]')
          setTotalPlantAreaValue(data.total_plant_area_value ?? '')
          setTotalPlantAreaUnit(data.total_plant_area_unit ?? '')
          setTypesOfMachines(data.types_of_machines ?? '')
          setMaxCapacityValue(data.max_production_capacity_value ?? '')
          setMaxCapacityUnit(data.max_production_capacity_unit ?? '')
          setMaxCapacityPeriod(data.max_production_capacity_period ?? '')
          setNormalCapacityValue(data.normal_production_capacity_value ?? '')
          setNormalCapacityUnit(data.normal_production_capacity_unit ?? '')
          setLeadTimeStandard(data.lead_time_standard ?? '')
          setMoqValue(data.moq_value ?? '')
          setMoqUnit(data.moq_unit ?? '')
          setSampleAvailability(data.sample_availability ?? null)
          setSampleLeadTime(data.sample_lead_time ?? '')
          setSampleCost(data.sample_cost ?? '')
          setCertifications(parseJsonArray(data.certifications))
          setQualityControlProcess(data.quality_control_process ?? '')
          setThirdPartyAudit(data.third_party_audit ?? null)
          setThirdPartyAuditDetails(data.third_party_audit_details ?? '')
          setGstCertificateUrl(data.gst_certificate_url ?? '')
          setMsmeRegistrationNumber(data.msme_registration_number ?? '')
          setMsmeDocumentUrl(data.msme_document_url ?? '')
          setExportMarketsCurrent(Array.isArray(data.export_markets_current) ? data.export_markets_current.join(', ') : '')
          setTargetExportMarkets(Array.isArray(data.target_export_markets) ? data.target_export_markets.join(', ') : '')
          setIncotermsOffered(parseJsonArray(data.incoterms_offered))
          setPortsOfShipment(Array.isArray(data.ports_of_shipment) ? data.ports_of_shipment.join(', ') : '')
          setPaymentTermsAccepted(parseJsonArray(data.payment_terms_accepted))
          setAnnualExportVolumeUsd(data.annual_export_volume_usd ?? '')
          setBankIfsc(data.bank_ifsc ?? '')
          setBankAccountNumber(data.bank_account_number ?? '')
          setTradeReferencesJson(Array.isArray(data.trade_references) ? JSON.stringify(data.trade_references, null, 2) : '[]')
          setFinancialSummaryUrl(data.financial_summary_url ?? '')
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [userId])

  const toggleCertification = (c) => setCertifications((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))
  const toggleIncoterm = (v) => setIncotermsOffered((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  const togglePaymentTerm = (v) => setPaymentTermsAccepted((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))

  const parsePlantLocations = () => {
    try {
      const a = JSON.parse(plantLocationsJson || '[]')
      return Array.isArray(a) ? a : []
    } catch {
      return []
    }
  }
  const parseTradeReferences = () => {
    try {
      const a = JSON.parse(tradeReferencesJson || '[]')
      return Array.isArray(a) ? a : []
    } catch {
      return []
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!supabase || !userId) return
    setSaving(true)
    setMessage('')
    const payload = {
      user_id: userId,
      year_established: yearEstablished ? parseInt(yearEstablished, 10) : null,
      number_of_employees: numberOfEmployees || null,
      annual_turnover_inr: annualTurnoverInr || null,
      export_experience_yes: exportExperienceYes,
      export_experience_years: exportExperienceYears ? parseInt(exportExperienceYears, 10) : null,
      export_top_markets: exportTopMarkets.trim() || null,
      iec_number: iecNumber.trim() || null,
      primary_product_categories: primaryProductCategories.trim() ? primaryProductCategories.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      hs_codes: hsCodes.trim() ? hsCodes.split(/[,;\s]+/).map((s) => s.trim()).filter(Boolean) : [],
      plant_locations: parsePlantLocations(),
      total_plant_area_value: totalPlantAreaValue ? parseFloat(totalPlantAreaValue) : null,
      total_plant_area_unit: totalPlantAreaUnit || null,
      types_of_machines: typesOfMachines.trim() || null,
      max_production_capacity_value: maxCapacityValue ? parseFloat(maxCapacityValue) : null,
      max_production_capacity_unit: maxCapacityUnit || null,
      max_production_capacity_period: maxCapacityPeriod || null,
      normal_production_capacity_value: normalCapacityValue ? parseFloat(normalCapacityValue) : null,
      normal_production_capacity_unit: normalCapacityUnit || null,
      lead_time_standard: leadTimeStandard || null,
      moq_value: moqValue ? parseFloat(moqValue) : null,
      moq_unit: moqUnit || null,
      sample_availability: sampleAvailability,
      sample_lead_time: sampleLeadTime.trim() || null,
      sample_cost: sampleCost.trim() || null,
      certifications,
      quality_control_process: qualityControlProcess.trim() || null,
      third_party_audit: thirdPartyAudit,
      third_party_audit_details: thirdPartyAuditDetails.trim() || null,
      gst_certificate_url: gstCertificateUrl.trim() || null,
      msme_registration_number: msmeRegistrationNumber.trim() || null,
      msme_document_url: msmeDocumentUrl.trim() || null,
      export_markets_current: exportMarketsCurrent.trim() ? exportMarketsCurrent.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      target_export_markets: targetExportMarkets.trim() ? targetExportMarkets.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      incoterms_offered: incotermsOffered,
      ports_of_shipment: portsOfShipment.trim() ? portsOfShipment.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      payment_terms_accepted: paymentTermsAccepted,
      annual_export_volume_usd: annualExportVolumeUsd || null,
      bank_ifsc: bankIfsc.trim() || null,
      bank_account_number: bankAccountNumber.trim() || null,
      trade_references: parseTradeReferences(),
      financial_summary_url: financialSummaryUrl.trim() || null,
      updated_at: new Date().toISOString(),
    }
    const { error } = await supabase.from('manufacturer_profiles').upsert(payload, { onConflict: 'user_id' })
    setSaving(false)
    if (error) {
      setMessage(error.message || 'Failed to save.')
      return
    }
    setMessage('Saved.')
    onSaved?.()
  }

  if (loading) return <p className="mfr-form-loading">Loading…</p>

  if (mode === 'view') {
    return (
      <div className="mfr-view">
        <ProfileSection title="Business details">
          <dl className="mfr-view-dl">
            <ProfileRow label="Year established" value={profileOptionLabel(yearEstablished, YEAR_ESTABLISHED_OPTIONS) || yearEstablished} />
            <ProfileRow label="Number of employees" value={profileOptionLabel(numberOfEmployees, NUMBER_OF_EMPLOYEES_OPTIONS)} />
            <ProfileRow label="Annual turnover (INR)" value={profileOptionLabel(annualTurnoverInr, ANNUAL_TURNOVER_INR_OPTIONS)} />
            <ProfileRow label="Export experience" value={exportExperienceYes === true ? 'Yes' : exportExperienceYes === false ? 'No' : ''} />
            <ProfileRow label="Years of export experience" value={exportExperienceYears} />
            <ProfileRow label="Top 3 export markets" value={exportTopMarkets} />
            <ProfileRow label="IEC number" value={iecNumber} />
          </dl>
        </ProfileSection>
        <ProfileSection title="Production capabilities">
          <dl className="mfr-view-dl">
            <ProfileRow label="Primary product categories" value={primaryProductCategories} />
            <ProfileRow label="HS codes" value={hsCodes} />
            <ProfileRow label="Plant locations" value={plantLocationsJson !== '[]' && plantLocationsJson ? plantLocationsJson : ''} />
            <ProfileRow label="Total plant area" value={[totalPlantAreaValue, totalPlantAreaUnit].filter(Boolean).join(' ') || ''} />
            <ProfileRow label="Types of machines" value={typesOfMachines} />
            <ProfileRow label="Max production capacity" value={[maxCapacityValue, maxCapacityUnit, maxCapacityPeriod && profileOptionLabel(maxCapacityPeriod, CAPACITY_PERIOD_OPTIONS)].filter(Boolean).join(' ') || ''} />
            <ProfileRow label="Normal production capacity" value={[normalCapacityValue, normalCapacityUnit].filter(Boolean).join(' ') || ''} />
            <ProfileRow label="Lead time (standard)" value={profileOptionLabel(leadTimeStandard, LEAD_TIME_OPTIONS)} />
            <ProfileRow label="MOQ" value={[moqValue, moqUnit].filter(Boolean).join(' ') || ''} />
            <ProfileRow label="Sample availability" value={sampleAvailability === true ? 'Yes' : sampleAvailability === false ? 'No' : ''} />
            <ProfileRow label="Sample lead time" value={sampleLeadTime} />
            <ProfileRow label="Sample cost" value={sampleCost} />
          </dl>
        </ProfileSection>
        <ProfileSection title="Quality & compliance">
          <dl className="mfr-view-dl">
            <ProfileRow label="Certifications" value={certifications.length ? certifications.join(', ') : ''} />
            <ProfileRow label="Quality control process" value={qualityControlProcess} />
            <ProfileRow label="Third-party audit" value={thirdPartyAudit === true ? 'Yes' : thirdPartyAudit === false ? 'No' : ''} />
            <ProfileRow label="Third-party audit details" value={thirdPartyAuditDetails} />
            <ProfileRow label="GST certificate URL" value={gstCertificateUrl} />
            <ProfileRow label="MSME registration number" value={msmeRegistrationNumber} />
            <ProfileRow label="MSME document URL" value={msmeDocumentUrl} />
          </dl>
        </ProfileSection>
        <ProfileSection title="Trade & logistics">
          <dl className="mfr-view-dl">
            <ProfileRow label="Current export markets" value={exportMarketsCurrent} />
            <ProfileRow label="Target export markets" value={targetExportMarkets} />
            <ProfileRow label="Incoterms offered" value={incotermsOffered.length ? incotermsOffered.join(', ') : ''} />
            <ProfileRow label="Ports of shipment" value={portsOfShipment} />
            <ProfileRow label="Payment terms accepted" value={paymentTermsAccepted.length ? paymentTermsAccepted.join(', ') : ''} />
            <ProfileRow label="Annual export volume (USD)" value={profileOptionLabel(annualExportVolumeUsd, ANNUAL_EXPORT_VOLUME_OPTIONS)} />
          </dl>
        </ProfileSection>
        <ProfileSection title="Bank & compliance">
          <dl className="mfr-view-dl">
            <ProfileRow label="Bank IFSC" value={bankIfsc} />
            <ProfileRow label="Bank account number" value={bankAccountNumber ? '••••••••' : ''} />
            <ProfileRow label="Trade references" value={tradeReferencesJson !== '[]' && tradeReferencesJson ? 'See details' : ''} />
            <ProfileRow label="Financial summary URL" value={financialSummaryUrl} />
          </dl>
        </ProfileSection>
      </div>
    )
  }

  return (
    <form className="mfr-form" onSubmit={handleSubmit}>
      {message && <div className={`mfr-form-message ${message === 'Saved.' ? 'mfr-form-message--success' : ''}`}>{message}</div>}

      <section className="mfr-form-section">
        <h3 className="mfr-form-section-title">Business details</h3>
        <div className="mfr-form-field-row">
          <label className="mfr-form-label">Year established</label>
          <select className="mfr-form-input" value={yearEstablished} onChange={(e) => setYearEstablished(e.target.value)}>
            <option value="">Select year</option>
            {YEAR_ESTABLISHED_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="mfr-form-field-row">
          <label className="mfr-form-label">Number of employees</label>
          <select className="mfr-form-input" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)}>
            <option value="">Select</option>
            {NUMBER_OF_EMPLOYEES_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="mfr-form-field-row">
          <label className="mfr-form-label">Annual turnover (INR)</label>
          <select className="mfr-form-input" value={annualTurnoverInr} onChange={(e) => setAnnualTurnoverInr(e.target.value)}>
            <option value="">Select</option>
            {ANNUAL_TURNOVER_INR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <label className="mfr-form-label">Export experience</label>
        <div className="mfr-form-radio-group">
          <label><input type="radio" name="export_exp" checked={exportExperienceYes === true} onChange={() => setExportExperienceYes(true)} /> Yes</label>
          <label><input type="radio" name="export_exp" checked={exportExperienceYes === false} onChange={() => setExportExperienceYes(false)} /> No</label>
        </div>
        {exportExperienceYes === true && (
          <>
            <label className="mfr-form-label">Years of export experience</label>
            <input type="number" className="mfr-form-input" min="1" value={exportExperienceYears} onChange={(e) => setExportExperienceYears(e.target.value)} />
            <label className="mfr-form-label">Top 3 export markets</label>
            <input type="text" className="mfr-form-input" value={exportTopMarkets} onChange={(e) => setExportTopMarkets(e.target.value)} placeholder="e.g. USA, UAE, Germany" />
          </>
        )}
        <label className="mfr-form-label">IEC number (14-digit)</label>
        <input type="text" className="mfr-form-input" maxLength={14} value={iecNumber} onChange={(e) => setIecNumber(e.target.value)} />
      </section>

      <section className="mfr-form-section">
        <h3 className="mfr-form-section-title">Production capabilities</h3>
        <label className="mfr-form-label">Primary product categories</label>
        <input type="text" className="mfr-form-input" value={primaryProductCategories} onChange={(e) => setPrimaryProductCategories(e.target.value)} placeholder="Comma-separated" />
        <label className="mfr-form-label">HS codes</label>
        <input type="text" className="mfr-form-input" value={hsCodes} onChange={(e) => setHsCodes(e.target.value)} placeholder="Comma-separated" />
        <label className="mfr-form-label">Plant locations (JSON array)</label>
        <textarea className="mfr-form-input mfr-form-textarea" value={plantLocationsJson} onChange={(e) => setPlantLocationsJson(e.target.value)} rows={3} placeholder='[{"city":"Mumbai","state":"Maharashtra","country":"India"}]' />
        <div className="mfr-form-row">
          <input type="number" className="mfr-form-input" min="0" step="any" value={totalPlantAreaValue} onChange={(e) => setTotalPlantAreaValue(e.target.value)} placeholder="Plant area value" />
          <select className="mfr-form-input" value={totalPlantAreaUnit} onChange={(e) => setTotalPlantAreaUnit(e.target.value)}>
            <option value="">Unit</option>
            {PLANT_AREA_UNIT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <label className="mfr-form-label">Types of machines</label>
        <input type="text" className="mfr-form-input" value={typesOfMachines} onChange={(e) => setTypesOfMachines(e.target.value)} />
        <label className="mfr-form-label">Max production capacity</label>
        <div className="mfr-form-row">
          <input type="number" className="mfr-form-input" min="0" step="any" value={maxCapacityValue} onChange={(e) => setMaxCapacityValue(e.target.value)} placeholder="Value" />
          <input type="text" className="mfr-form-input" value={maxCapacityUnit} onChange={(e) => setMaxCapacityUnit(e.target.value)} placeholder="Unit" />
          <select className="mfr-form-input" value={maxCapacityPeriod} onChange={(e) => setMaxCapacityPeriod(e.target.value)}>
            <option value="">Period</option>
            {CAPACITY_PERIOD_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <label className="mfr-form-label">Normal production capacity</label>
        <div className="mfr-form-row">
          <input type="number" className="mfr-form-input" min="0" step="any" value={normalCapacityValue} onChange={(e) => setNormalCapacityValue(e.target.value)} />
          <input type="text" className="mfr-form-input" value={normalCapacityUnit} onChange={(e) => setNormalCapacityUnit(e.target.value)} placeholder="Unit" />
        </div>
        <label className="mfr-form-label">Lead time (standard order)</label>
        <select className="mfr-form-input" value={leadTimeStandard} onChange={(e) => setLeadTimeStandard(e.target.value)}>
          <option value="">Select</option>
          {LEAD_TIME_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <label className="mfr-form-label">MOQ</label>
        <div className="mfr-form-row">
          <input type="number" className="mfr-form-input" min="0" step="any" value={moqValue} onChange={(e) => setMoqValue(e.target.value)} placeholder="Value" />
          <input type="text" className="mfr-form-input" value={moqUnit} onChange={(e) => setMoqUnit(e.target.value)} placeholder="Unit" />
        </div>
        <label className="mfr-form-label">Sample availability</label>
        <div className="mfr-form-radio-group">
          <label><input type="radio" name="sample" checked={sampleAvailability === true} onChange={() => setSampleAvailability(true)} /> Yes</label>
          <label><input type="radio" name="sample" checked={sampleAvailability === false} onChange={() => setSampleAvailability(false)} /> No</label>
        </div>
        {sampleAvailability === true && (
          <>
            <input type="text" className="mfr-form-input" value={sampleLeadTime} onChange={(e) => setSampleLeadTime(e.target.value)} placeholder="Sample lead time" />
            <input type="text" className="mfr-form-input" value={sampleCost} onChange={(e) => setSampleCost(e.target.value)} placeholder="Sample cost" />
          </>
        )}
      </section>

      <section className="mfr-form-section">
        <h3 className="mfr-form-section-title">Quality & compliance</h3>
        <label className="mfr-form-label">Certifications</label>
        <div className="mfr-form-checkbox-group">
          {CERTIFICATIONS_OPTIONS.map((c) => (
            <label key={c} className="mfr-form-checkbox">
              <input type="checkbox" checked={certifications.includes(c)} onChange={() => toggleCertification(c)} />
              {c}
            </label>
          ))}
        </div>
        <label className="mfr-form-label">Quality control process</label>
        <textarea className="mfr-form-input mfr-form-textarea" maxLength={500} value={qualityControlProcess} onChange={(e) => setQualityControlProcess(e.target.value)} rows={3} />
        <label className="mfr-form-label">Third-party audit?</label>
        <div className="mfr-form-radio-group">
          <label><input type="radio" name="audit" checked={thirdPartyAudit === true} onChange={() => setThirdPartyAudit(true)} /> Yes</label>
          <label><input type="radio" name="audit" checked={thirdPartyAudit === false} onChange={() => setThirdPartyAudit(false)} /> No</label>
        </div>
        {thirdPartyAudit === true && (
          <textarea className="mfr-form-input mfr-form-textarea" value={thirdPartyAuditDetails} onChange={(e) => setThirdPartyAuditDetails(e.target.value)} placeholder="By whom? Year?" rows={2} />
        )}
        <label className="mfr-form-label">GST certificate URL</label>
        <input type="url" className="mfr-form-input" value={gstCertificateUrl} onChange={(e) => setGstCertificateUrl(e.target.value)} />
        <label className="mfr-form-label">MSME / Udyam registration number</label>
        <input type="text" className="mfr-form-input" value={msmeRegistrationNumber} onChange={(e) => setMsmeRegistrationNumber(e.target.value)} />
        <label className="mfr-form-label">MSME document URL</label>
        <input type="url" className="mfr-form-input" value={msmeDocumentUrl} onChange={(e) => setMsmeDocumentUrl(e.target.value)} />
      </section>

      <section className="mfr-form-section">
        <h3 className="mfr-form-section-title">Trade & logistics</h3>
        <label className="mfr-form-label">Current export markets</label>
        <input type="text" className="mfr-form-input" value={exportMarketsCurrent} onChange={(e) => setExportMarketsCurrent(e.target.value)} placeholder="Comma-separated" />
        <label className="mfr-form-label">Target export markets</label>
        <input type="text" className="mfr-form-input" value={targetExportMarkets} onChange={(e) => setTargetExportMarkets(e.target.value)} />
        <label className="mfr-form-label">Incoterms offered</label>
        <div className="mfr-form-checkbox-group">
          {INCOTERMS_OPTIONS.map((o) => (
            <label key={o.value} className="mfr-form-checkbox">
              <input type="checkbox" checked={incotermsOffered.includes(o.value)} onChange={() => toggleIncoterm(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
        <label className="mfr-form-label">Ports of shipment</label>
        <input type="text" className="mfr-form-input" value={portsOfShipment} onChange={(e) => setPortsOfShipment(e.target.value)} />
        <label className="mfr-form-label">Payment terms accepted</label>
        <div className="mfr-form-checkbox-group">
          {PAYMENT_TERMS_OPTIONS.map((o) => (
            <label key={o.value} className="mfr-form-checkbox">
              <input type="checkbox" checked={paymentTermsAccepted.includes(o.value)} onChange={() => togglePaymentTerm(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
        <label className="mfr-form-label">Annual export volume (USD)</label>
        <select className="mfr-form-input" value={annualExportVolumeUsd} onChange={(e) => setAnnualExportVolumeUsd(e.target.value)}>
          <option value="">Select</option>
          {ANNUAL_EXPORT_VOLUME_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </section>

      <section className="mfr-form-section">
        <h3 className="mfr-form-section-title">Bank & compliance</h3>
        <label className="mfr-form-label">Bank IFSC</label>
        <input type="text" className="mfr-form-input" value={bankIfsc} onChange={(e) => setBankIfsc(e.target.value)} />
        <label className="mfr-form-label">Bank account number</label>
        <input type="text" className="mfr-form-input" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
        <label className="mfr-form-label">Trade references (JSON array)</label>
        <textarea className="mfr-form-input mfr-form-textarea" value={tradeReferencesJson} onChange={(e) => setTradeReferencesJson(e.target.value)} rows={3} placeholder='[{"name":"Company","email":"a@b.com"}]' />
        <label className="mfr-form-label">Financial summary URL</label>
        <input type="url" className="mfr-form-input" value={financialSummaryUrl} onChange={(e) => setFinancialSummaryUrl(e.target.value)} />
      </section>

      <div className="mfr-form-actions">
        <button type="submit" className="mfr-form-submit" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        <button type="button" className="mfr-form-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default ManufacturerProfileForm
