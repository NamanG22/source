import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import PageMask from '../components/PageMask/PageMask'
import Footer from '../components/Footer/Footer'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabaseClient'
import ManufacturerProfileForm from '../components/ManufacturerProfileForm/ManufacturerProfileForm'
import SupplierProfileForm from '../components/SupplierProfileForm/SupplierProfileForm'
import DistributorProfileForm from '../components/DistributorProfileForm/DistributorProfileForm'
import './ProfilePage.css'

const BUSINESS_TYPE_LABELS = {
  supplier: 'Supplier',
  manufacturer: 'Manufacturer',
  distributor: 'Distributor',
  buyer: 'Buyer',
  agent: 'Agent / Trader',
  other: 'Other',
}

function ProfilePage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, profile, loading: authLoading } = useAuth()
  const [profileData, setProfileData] = useState(null)
  const [companyName, setCompanyName] = useState('')
  const [plantLocation, setPlantLocation] = useState('')
  const [website, setWebsite] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [myProducts, setMyProducts] = useState([])
  const [productsLoading, setProductsLoading] = useState(false)

  const isBuyer = profile?.business_type === 'buyer'
  const canListProducts = Boolean(profile?.business_type && profile.business_type !== 'buyer')
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const showEditProfileButton = !isBuyer && ['manufacturer', 'supplier', 'distributor', 'agent', 'other'].includes(profile?.business_type)

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth?mode=login', { replace: true })
    }
  }, [user, authLoading, navigate])

  useEffect(() => {
    if (!user || !profile) return
    setProfileData(profile)
    setCompanyName(profile.company_name ?? '')
    setPlantLocation(profile.plant_location ?? '')
    setWebsite(profile.website ?? '')
  }, [user, profile])

  useEffect(() => {
    if (!supabase || !user?.id || !canListProducts) return
    setProductsLoading(true)
    supabase
      .from('products')
      .select('id, title, description, category, price, unit, moq, image_url, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setMyProducts(data ?? [])
        setProductsLoading(false)
      })
      .catch(() => setProductsLoading(false))
  }, [user?.id, canListProducts])

  const handleSaveDetails = async (e) => {
    e.preventDefault()
    if (!supabase || !user) return
    setSaving(true)
    setSaveMessage('')
    const { error } = await supabase
      .from('profiles')
      .update({
        company_name: companyName.trim() || null,
        plant_location: plantLocation.trim() || null,
        website: website.trim() || null,
      })
      .eq('id', user.id)
    setSaving(false)
    if (error) {
      setSaveMessage(error.message || 'Failed to save.')
      return
    }
    setSaveMessage('Saved.')
    setIsEditingProfile(false)
    setProfileData((prev) => ({
      ...prev,
      company_name: companyName.trim() || null,
      plant_location: plantLocation.trim() || null,
      website: website.trim() || null,
    }))
  }

  if (authLoading || !user) {
    return (
      <div className="App">
        <main className="profile-page profile-page--center">
          <p className="profile-loading">Loading…</p>
        </main>
      </div>
    )
  }

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="profile-page">
        <div className="profile-container">
          <h1 className="profile-heading">My profile</h1>

          <section className="profile-section">
            <h2 className="profile-section-title">Account details</h2>
            <dl className="profile-dl">
              <dt>Name</dt>
              <dd>{profileData?.full_name || '—'}</dd>
              <dt>Email</dt>
              <dd>{user?.email || '—'}</dd>
              <dt>Role</dt>
              <dd>{BUSINESS_TYPE_LABELS[profileData?.business_type] || profileData?.business_type || '—'}</dd>
              <dt>Country</dt>
              <dd>{profileData?.country || '—'}</dd>
              <dt>Phone</dt>
              <dd>{profileData?.country_code && profileData?.phone ? `${profileData.country_code} ${profileData.phone}` : (profileData?.phone || '—')}</dd>
            </dl>
          </section>

          {showEditProfileButton && !isEditingProfile && (
            <div className="profile-edit-wrap">
              <button type="button" className="profile-edit-btn" onClick={() => setIsEditingProfile(true)}>Edit profile</button>
            </div>
          )}

          {profile?.business_type === 'manufacturer' && (
            <section className="profile-section">
              <h2 className="profile-section-title">Manufacturer profile</h2>
              <ManufacturerProfileForm
                userId={user.id}
                mode={isEditingProfile ? 'edit' : 'view'}
                onSaved={() => setIsEditingProfile(false)}
                onCancel={() => setIsEditingProfile(false)}
              />
            </section>
          )}

          {profile?.business_type === 'supplier' && (
            <section className="profile-section">
              <h2 className="profile-section-title">Supplier profile</h2>
              <SupplierProfileForm
                userId={user.id}
                mode={isEditingProfile ? 'edit' : 'view'}
                onSaved={() => setIsEditingProfile(false)}
                onCancel={() => setIsEditingProfile(false)}
              />
            </section>
          )}

          {profile?.business_type === 'distributor' && (
            <section className="profile-section">
              <h2 className="profile-section-title">Distributor profile</h2>
              <DistributorProfileForm
                userId={user.id}
                mode={isEditingProfile ? 'edit' : 'view'}
                onSaved={() => setIsEditingProfile(false)}
                onCancel={() => setIsEditingProfile(false)}
              />
            </section>
          )}

          {['manufacturer', 'supplier', 'distributor', 'agent', 'other'].includes(profile?.business_type) && (
            <section className="profile-section">
                <div className="profile-section-header">
                  <h2 className="profile-section-title">Your listed products</h2>
                  <Link to="/marketplace/list" className="profile-add-product-btn">Add product</Link>
                </div>
                {productsLoading ? (
                  <p className="profile-products-loading">Loading products…</p>
                ) : myProducts.length === 0 ? (
                  <p className="profile-products-empty">You haven’t listed any products yet. Add your first product to appear on the marketplace.</p>
                ) : (
                  <ul className="profile-product-list">
                    {myProducts.map((p) => (
                      <li key={p.id} className="profile-product-item">
                        <div className="profile-product-image">
                          {p.image_url ? (
                            <img src={p.image_url} alt="" />
                          ) : (
                            <span>No image</span>
                          )}
                        </div>
                        <div className="profile-product-info">
                          <strong>{p.title}</strong>
                          {p.category && <span className="profile-product-cat">{p.category}</span>}
                          {p.price && <span className="profile-product-price">₹ {p.price}{p.unit ? ` / ${p.unit}` : ''}</span>}
                          {p.moq && <span className="profile-product-moq">MOQ: {p.moq}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
          )}

          {['agent', 'other'].includes(profile?.business_type) && (
            <section className="profile-section">
              <h2 className="profile-section-title">Business details</h2>
              {!isEditingProfile ? (
                <>
                  <dl className="profile-dl">
                    <dt>Company / business name</dt>
                    <dd>{companyName?.trim() || '—'}</dd>
                    <dt>Plant / business location</dt>
                    <dd>{plantLocation?.trim() || '—'}</dd>
                    <dt>Website</dt>
                    <dd>{website?.trim() ? (
                      <a href={website.trim()} target="_blank" rel="noopener noreferrer">{website.trim()}</a>
                    ) : '—'}</dd>
                  </dl>
                </>
              ) : (
                <form className="profile-form" onSubmit={handleSaveDetails}>
                  {saveMessage && (
                    <div className={`profile-save-message ${saveMessage === 'Saved.' ? 'profile-save-message--success' : ''}`}>
                      {saveMessage}
                    </div>
                  )}
                  <label className="profile-label">
                    Company / business name
                    <input type="text" className="profile-input" placeholder="Your company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                  </label>
                  <label className="profile-label">
                    Plant / business location
                    <input type="text" className="profile-input" placeholder="City, state, country" value={plantLocation} onChange={(e) => setPlantLocation(e.target.value)} />
                  </label>
                  <label className="profile-label">
                    Website
                    <input type="url" className="profile-input" placeholder="https://..." value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </label>
                  <div className="profile-form-actions">
                    <button type="submit" className="profile-save-btn" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
                    <button type="button" className="profile-cancel-btn" onClick={() => setIsEditingProfile(false)}>Cancel</button>
                  </div>
                </form>
              )}
            </section>
          )}

          <p className="profile-back">
            <Link to="/" className="profile-back-link">← Back to home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProfilePage
