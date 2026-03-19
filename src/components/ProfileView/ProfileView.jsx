import './ProfileView.css'

export function ProfileSection({ title, children }) {
  return (
    <section className="profile-view-section">
      <h3 className="profile-view-section-title">{title}</h3>
      {children}
    </section>
  )
}

export function ProfileRow({ label, value }) {
  const display = value != null && value !== '' && String(value).trim() !== '' ? String(value) : '—'
  return (
    <div className="profile-view-row">
      <dt className="profile-view-dt">{label}</dt>
      <dd className="profile-view-dd">{display}</dd>
    </div>
  )
}

export function profileOptionLabel(value, options) {
  if (value == null || value === '') return ''
  const o = options?.find((opt) => opt.value === value || opt === value)
  return o?.label ?? o ?? value
}
