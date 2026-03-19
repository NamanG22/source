import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { ProfileSection, ProfileRow, profileOptionLabel } from '../ProfileView/ProfileView'
import {
  YEAR_ESTABLISHED_OPTIONS,
  NUMBER_OF_EMPLOYEES_OPTIONS,
  ANNUAL_TURNOVER_INR_OPTIONS,
  INCOTERMS_OPTIONS,
  PAYMENT_TERMS_OPTIONS,
} from '../ManufacturerProfileForm/constants'
import './DistributorProfileForm.css'

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

function DistributorProfileForm({ userId, mode = 'view', onSaved, onCancel }) {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [yearEstablished, setYearEstablished] = useState('')
  const [numberOfEmployees, setNumberOfEmployees] = useState('')
  const [annualTurnoverInr, setAnnualTurnoverInr] = useState('')
  const [distributionTerritories, setDistributionTerritories] = useState('')
  const [primaryCategories, setPrimaryCategories] = useState('')
  const [paymentTermsAccepted, setPaymentTermsAccepted] = useState([])
  const [incotermsOffered, setIncotermsOffered] = useState([])

  useEffect(() => {
    if (!supabase || !userId) {
      setLoading(false)
      return
    }
    supabase
      .from('distributor_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        if (data) {
          setYearEstablished(data.year_established ?? '')
          setNumberOfEmployees(data.number_of_employees ?? '')
          setAnnualTurnoverInr(data.annual_turnover_inr ?? '')
          setDistributionTerritories(Array.isArray(data.distribution_territories) ? data.distribution_territories.join(', ') : '')
          setPrimaryCategories(Array.isArray(data.primary_categories) ? data.primary_categories.join(', ') : '')
          setPaymentTermsAccepted(parseJsonArray(data.payment_terms_accepted))
          setIncotermsOffered(parseJsonArray(data.incoterms_offered))
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [userId])

  const togglePayment = (v) => setPaymentTermsAccepted((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  const toggleIncoterm = (v) => setIncotermsOffered((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))

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
      distribution_territories: distributionTerritories.trim() ? distributionTerritories.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      primary_categories: primaryCategories.trim() ? primaryCategories.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
      payment_terms_accepted: paymentTermsAccepted,
      incoterms_offered: incotermsOffered,
      updated_at: new Date().toISOString(),
    }
    const { error } = await supabase.from('distributor_profiles').upsert(payload, { onConflict: 'user_id' })
    setSaving(false)
    if (error) {
      setMessage(error.message || 'Failed to save.')
      return
    }
    setMessage('Saved.')
    onSaved?.()
  }

  if (loading) return <p className="dpr-form-loading">Loading…</p>

  if (mode === 'view') {
    return (
      <div className="dpr-view">
        <ProfileSection title="Business details">
          <dl className="dpr-view-dl">
            <ProfileRow label="Year established" value={profileOptionLabel(yearEstablished, YEAR_ESTABLISHED_OPTIONS)} />
            <ProfileRow label="Number of employees" value={profileOptionLabel(numberOfEmployees, NUMBER_OF_EMPLOYEES_OPTIONS)} />
            <ProfileRow label="Annual turnover (INR)" value={profileOptionLabel(annualTurnoverInr, ANNUAL_TURNOVER_INR_OPTIONS)} />
          </dl>
        </ProfileSection>
        <ProfileSection title="Distribution & categories">
          <dl className="dpr-view-dl">
            <ProfileRow label="Distribution territories" value={distributionTerritories} />
            <ProfileRow label="Primary categories" value={primaryCategories} />
            <ProfileRow label="Payment terms accepted" value={paymentTermsAccepted.length ? paymentTermsAccepted.join(', ') : ''} />
            <ProfileRow label="Incoterms offered" value={incotermsOffered.length ? incotermsOffered.join(', ') : ''} />
          </dl>
        </ProfileSection>
      </div>
    )
  }

  return (
    <form className="dpr-form" onSubmit={handleSubmit}>
      {message && <div className={`dpr-form-message ${message === 'Saved.' ? 'dpr-form-message--success' : ''}`}>{message}</div>}
      <ProfileSection title="Business details">
        <div className="dpr-form-field-row">
          <label className="dpr-form-label">Year established</label>
          <select className="dpr-form-input" value={yearEstablished} onChange={(e) => setYearEstablished(e.target.value)}>
            <option value="">Select</option>
            {YEAR_ESTABLISHED_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="dpr-form-field-row">
          <label className="dpr-form-label">Number of employees</label>
          <select className="dpr-form-input" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)}>
            <option value="">Select</option>
            {NUMBER_OF_EMPLOYEES_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="dpr-form-field-row">
          <label className="dpr-form-label">Annual turnover (INR)</label>
          <select className="dpr-form-input" value={annualTurnoverInr} onChange={(e) => setAnnualTurnoverInr(e.target.value)}>
            <option value="">Select</option>
            {ANNUAL_TURNOVER_INR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </ProfileSection>
      <ProfileSection title="Distribution & categories">
        <label className="dpr-form-label">Distribution territories</label>
        <input type="text" className="dpr-form-input" value={distributionTerritories} onChange={(e) => setDistributionTerritories(e.target.value)} placeholder="Comma-separated" />
        <label className="dpr-form-label">Primary categories</label>
        <input type="text" className="dpr-form-input" value={primaryCategories} onChange={(e) => setPrimaryCategories(e.target.value)} placeholder="Comma-separated" />
        <label className="dpr-form-label">Payment terms accepted</label>
        <div className="dpr-form-checkbox-group">
          {PAYMENT_TERMS_OPTIONS.map((o) => (
            <label key={o.value} className="dpr-form-checkbox">
              <input type="checkbox" checked={paymentTermsAccepted.includes(o.value)} onChange={() => togglePayment(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
        <label className="dpr-form-label">Incoterms offered</label>
        <div className="dpr-form-checkbox-group">
          {INCOTERMS_OPTIONS.map((o) => (
            <label key={o.value} className="dpr-form-checkbox">
              <input type="checkbox" checked={incotermsOffered.includes(o.value)} onChange={() => toggleIncoterm(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
      </ProfileSection>
      <div className="dpr-form-actions">
        <button type="submit" className="dpr-form-submit" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        <button type="button" className="dpr-form-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default DistributorProfileForm
