import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { ProfileSection, ProfileRow, profileOptionLabel } from '../ProfileView/ProfileView'
import {
  YEAR_ESTABLISHED_OPTIONS,
  NUMBER_OF_EMPLOYEES_OPTIONS,
  ANNUAL_TURNOVER_INR_OPTIONS,
  INCOTERMS_OPTIONS,
  PAYMENT_TERMS_OPTIONS,
  CERTIFICATIONS_OPTIONS,
} from '../ManufacturerProfileForm/constants'
import './SupplierProfileForm.css'

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

function SupplierProfileForm({ userId, mode = 'view', onSaved, onCancel }) {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [yearEstablished, setYearEstablished] = useState('')
  const [numberOfEmployees, setNumberOfEmployees] = useState('')
  const [annualTurnoverInr, setAnnualTurnoverInr] = useState('')
  const [primaryCategories, setPrimaryCategories] = useState('')
  const [hsCodes, setHsCodes] = useState('')
  const [locationsJson, setLocationsJson] = useState('[]')
  const [moqValue, setMoqValue] = useState('')
  const [moqUnit, setMoqUnit] = useState('')
  const [certifications, setCertifications] = useState([])
  const [paymentTermsAccepted, setPaymentTermsAccepted] = useState([])
  const [incotermsOffered, setIncotermsOffered] = useState([])
  const [exportExperienceYes, setExportExperienceYes] = useState(null)
  const [exportExperienceYears, setExportExperienceYears] = useState('')

  useEffect(() => {
    if (!supabase || !userId) {
      setLoading(false)
      return
    }
    supabase
      .from('supplier_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        if (data) {
          setYearEstablished(data.year_established ?? '')
          setNumberOfEmployees(data.number_of_employees ?? '')
          setAnnualTurnoverInr(data.annual_turnover_inr ?? '')
          setPrimaryCategories(Array.isArray(data.primary_categories) ? data.primary_categories.join(', ') : '')
          setHsCodes(Array.isArray(data.hs_codes) ? data.hs_codes.join(', ') : '')
          setLocationsJson(Array.isArray(data.locations) ? JSON.stringify(data.locations, null, 2) : '[]')
          setMoqValue(data.moq_value ?? '')
          setMoqUnit(data.moq_unit ?? '')
          setCertifications(parseJsonArray(data.certifications))
          setPaymentTermsAccepted(parseJsonArray(data.payment_terms_accepted))
          setIncotermsOffered(parseJsonArray(data.incoterms_offered))
          setExportExperienceYes(data.export_experience_yes ?? null)
          setExportExperienceYears(data.export_experience_years ?? '')
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [userId])

  const toggleCert = (c) => setCertifications((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))
  const togglePayment = (v) => setPaymentTermsAccepted((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  const toggleIncoterm = (v) => setIncotermsOffered((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))

  const parseLocations = () => {
    try {
      const a = JSON.parse(locationsJson || '[]')
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
      primary_categories: primaryCategories.trim() ? primaryCategories.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      hs_codes: hsCodes.trim() ? hsCodes.split(/[,;\s]+/).map((s) => s.trim()).filter(Boolean) : [],
      locations: parseLocations(),
      moq_value: moqValue ? parseFloat(moqValue) : null,
      moq_unit: moqUnit || null,
      certifications,
      payment_terms_accepted: paymentTermsAccepted,
      incoterms_offered: incotermsOffered,
      export_experience_yes: exportExperienceYes,
      export_experience_years: exportExperienceYears ? parseInt(exportExperienceYears, 10) : null,
      updated_at: new Date().toISOString(),
    }
    const { error } = await supabase.from('supplier_profiles').upsert(payload, { onConflict: 'user_id' })
    setSaving(false)
    if (error) {
      setMessage(error.message || 'Failed to save.')
      return
    }
    setMessage('Saved.')
    onSaved?.()
  }

  if (loading) return <p className="spr-form-loading">Loading…</p>

  if (mode === 'view') {
    return (
      <div className="spr-view">
        <ProfileSection title="Business details">
          <dl className="spr-view-dl">
            <ProfileRow label="Year established" value={profileOptionLabel(yearEstablished, YEAR_ESTABLISHED_OPTIONS)} />
            <ProfileRow label="Number of employees" value={profileOptionLabel(numberOfEmployees, NUMBER_OF_EMPLOYEES_OPTIONS)} />
            <ProfileRow label="Annual turnover (INR)" value={profileOptionLabel(annualTurnoverInr, ANNUAL_TURNOVER_INR_OPTIONS)} />
            <ProfileRow label="Export experience" value={exportExperienceYes === true ? 'Yes' : exportExperienceYes === false ? 'No' : ''} />
            <ProfileRow label="Years of export experience" value={exportExperienceYears} />
          </dl>
        </ProfileSection>
        <ProfileSection title="Categories & locations">
          <dl className="spr-view-dl">
            <ProfileRow label="Primary categories" value={primaryCategories} />
            <ProfileRow label="HS codes" value={hsCodes} />
            <ProfileRow label="Locations" value={locationsJson !== '[]' && locationsJson ? 'See details' : ''} />
          </dl>
        </ProfileSection>
        <ProfileSection title="MOQ & terms">
          <dl className="spr-view-dl">
            <ProfileRow label="MOQ" value={[moqValue, moqUnit].filter(Boolean).join(' ') || ''} />
            <ProfileRow label="Certifications" value={certifications.length ? certifications.join(', ') : ''} />
            <ProfileRow label="Payment terms accepted" value={paymentTermsAccepted.length ? paymentTermsAccepted.join(', ') : ''} />
            <ProfileRow label="Incoterms offered" value={incotermsOffered.length ? incotermsOffered.join(', ') : ''} />
          </dl>
        </ProfileSection>
      </div>
    )
  }

  return (
    <form className="spr-form" onSubmit={handleSubmit}>
      {message && <div className={`spr-form-message ${message === 'Saved.' ? 'spr-form-message--success' : ''}`}>{message}</div>}
      <ProfileSection title="Business details">
        <div className="spr-form-field-row">
          <label className="spr-form-label">Year established</label>
          <select className="spr-form-input" value={yearEstablished} onChange={(e) => setYearEstablished(e.target.value)}>
            <option value="">Select</option>
            {YEAR_ESTABLISHED_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="spr-form-field-row">
          <label className="spr-form-label">Number of employees</label>
          <select className="spr-form-input" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)}>
            <option value="">Select</option>
            {NUMBER_OF_EMPLOYEES_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="spr-form-field-row">
          <label className="spr-form-label">Annual turnover (INR)</label>
          <select className="spr-form-input" value={annualTurnoverInr} onChange={(e) => setAnnualTurnoverInr(e.target.value)}>
            <option value="">Select</option>
            {ANNUAL_TURNOVER_INR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <label className="spr-form-label">Export experience?</label>
        <div className="spr-form-radio-group">
          <label><input type="radio" name="exp" checked={exportExperienceYes === true} onChange={() => setExportExperienceYes(true)} /> Yes</label>
          <label><input type="radio" name="exp" checked={exportExperienceYes === false} onChange={() => setExportExperienceYes(false)} /> No</label>
        </div>
        {exportExperienceYes === true && (
          <input type="number" className="spr-form-input" min="1" value={exportExperienceYears} onChange={(e) => setExportExperienceYears(e.target.value)} placeholder="Years of export experience" />
        )}
      </ProfileSection>
      <ProfileSection title="Categories & locations">
        <label className="spr-form-label">Primary categories</label>
        <input type="text" className="spr-form-input" value={primaryCategories} onChange={(e) => setPrimaryCategories(e.target.value)} placeholder="Comma-separated" />
        <label className="spr-form-label">HS codes</label>
        <input type="text" className="spr-form-input" value={hsCodes} onChange={(e) => setHsCodes(e.target.value)} placeholder="Comma-separated" />
        <label className="spr-form-label">Locations (JSON array)</label>
        <textarea className="spr-form-input spr-form-textarea" value={locationsJson} onChange={(e) => setLocationsJson(e.target.value)} rows={3} placeholder='[{"city":"Mumbai","state":"Maharashtra","country":"India"}]' />
      </ProfileSection>
      <ProfileSection title="MOQ & terms">
        <div className="spr-form-row">
          <label className="spr-form-label">MOQ value</label>
          <input type="number" className="spr-form-input" min="0" step="any" value={moqValue} onChange={(e) => setMoqValue(e.target.value)} />
          <label className="spr-form-label">MOQ unit</label>
          <input type="text" className="spr-form-input" value={moqUnit} onChange={(e) => setMoqUnit(e.target.value)} placeholder="e.g. kg, units" />
        </div>
        <label className="spr-form-label">Certifications</label>
        <div className="spr-form-checkbox-group">
          {CERTIFICATIONS_OPTIONS.map((c) => (
            <label key={c} className="spr-form-checkbox">
              <input type="checkbox" checked={certifications.includes(c)} onChange={() => toggleCert(c)} />
              {c}
            </label>
          ))}
        </div>
        <label className="spr-form-label">Payment terms accepted</label>
        <div className="spr-form-checkbox-group">
          {PAYMENT_TERMS_OPTIONS.map((o) => (
            <label key={o.value} className="spr-form-checkbox">
              <input type="checkbox" checked={paymentTermsAccepted.includes(o.value)} onChange={() => togglePayment(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
        <label className="spr-form-label">Incoterms offered</label>
        <div className="spr-form-checkbox-group">
          {INCOTERMS_OPTIONS.map((o) => (
            <label key={o.value} className="spr-form-checkbox">
              <input type="checkbox" checked={incotermsOffered.includes(o.value)} onChange={() => toggleIncoterm(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
      </ProfileSection>
      <div className="spr-form-actions">
        <button type="submit" className="spr-form-submit" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        <button type="button" className="spr-form-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default SupplierProfileForm
