import { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import './AuthPage.css'

function AuthPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const modeFromUrl = searchParams.get('mode')
  const [mode, setMode] = useState(modeFromUrl === 'signup' ? 'signup' : 'login')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (modeFromUrl === 'signup') setMode('signup')
    else if (modeFromUrl === 'login') setMode('login')
  }, [modeFromUrl])

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupBusinessType, setSignupBusinessType] = useState('')
  const [signupCountry, setSignupCountry] = useState('')
  const [signupCountryCode, setSignupCountryCode] = useState('')
  const [signupPhone, setSignupPhone] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const BUSINESS_TYPES = [
    { value: '', label: 'Select your role…' },
    { value: 'supplier', label: 'Supplier' },
    { value: 'manufacturer', label: 'Manufacturer' },
    { value: 'distributor', label: 'Distributor' },
    { value: 'buyer', label: 'Buyer' },
    { value: 'agent', label: 'Agent / Trader' },
  ]

  const COUNTRIES = [
    { value: '', label: 'Select country…' },
    { value: 'IN', label: 'India' },
    { value: 'US', label: 'United States' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'CN', label: 'China' },
    { value: 'DE', label: 'Germany' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'SG', label: 'Singapore' },
    { value: 'AU', label: 'Australia' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'JP', label: 'Japan' },
    { value: 'KR', label: 'South Korea' },
    { value: 'VN', label: 'Vietnam' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'TH', label: 'Thailand' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'BR', label: 'Brazil' },
    { value: 'MX', label: 'Mexico' },
    { value: 'other', label: 'Other' },
  ]

  const COUNTRY_CODES = [
    { value: '', label: 'Code' },
    { value: '+91', label: '+91 India' },
    { value: '+1', label: '+1 US/Canada' },
    { value: '+44', label: '+44 UK' },
    { value: '+86', label: '+86 China' },
    { value: '+49', label: '+49 Germany' },
    { value: '+971', label: '+971 UAE' },
    { value: '+65', label: '+65 Singapore' },
    { value: '+61', label: '+61 Australia' },
    { value: '+33', label: '+33 France' },
    { value: '+31', label: '+31 Netherlands' },
    { value: '+81', label: '+81 Japan' },
    { value: '+82', label: '+82 South Korea' },
    { value: '+84', label: '+84 Vietnam' },
    { value: '+880', label: '+880 Bangladesh' },
    { value: '+92', label: '+92 Pakistan' },
    { value: '+60', label: '+60 Malaysia' },
    { value: '+66', label: '+66 Thailand' },
    { value: '+62', label: '+62 Indonesia' },
    { value: '+966', label: '+966 Saudi Arabia' },
    { value: '+27', label: '+27 South Africa' },
    { value: '+55', label: '+55 Brazil' },
    { value: '+52', label: '+52 Mexico' },
    { value: '+90', label: '+90 Turkey' },
    { value: '+39', label: '+39 Italy' },
    { value: '+34', label: '+34 Spain' },
    { value: '+353', label: '+353 Ireland' },
    { value: '+48', label: '+48 Poland' },
    { value: '+46', label: '+46 Sweden' },
    { value: '+47', label: '+47 Norway' },
    { value: '+45', label: '+45 Denmark' },
    { value: '+358', label: '+358 Finland' },
    { value: '+41', label: '+41 Switzerland' },
    { value: '+43', label: '+43 Austria' },
    { value: '+32', label: '+32 Belgium' },
    { value: '+64', label: '+64 New Zealand' },
    { value: '+20', label: '+20 Egypt' },
    { value: '+234', label: '+234 Nigeria' },
    { value: '+254', label: '+254 Kenya' },
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')
    if (!loginEmail.trim() || !loginPassword) {
      setError('Please enter email and password.')
      return
    }
    if (!supabase) {
      setError('Auth is not configured. Add Supabase URL and anon key to .env — see SUPABASE_SETUP.md')
      return
    }
    setIsSubmitting(true)
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: loginEmail.trim(),
        password: loginPassword,
      })
      setIsSubmitting(false)
      if (authError) {
        const msg = authError.message || 'Login failed.'
        if (msg.toLowerCase().includes('invalid') && msg.toLowerCase().includes('credential')) {
          setError('Invalid email or password. Check for typos, or sign up if you don’t have an account.')
        } else {
          setError(msg)
        }
        return
      }
      setSuccessMessage('Signed in successfully.')
      navigate('/', { replace: true })
    } catch (err) {
      setIsSubmitting(false)
      const msg = err?.message || String(err)
      if (msg.toLowerCase().includes('fetch') || msg.toLowerCase().includes('network')) {
        setError(
          'Could not reach Supabase. Check: (1) .env has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, (2) URL has no trailing slash, (3) dev server was restarted after adding .env, (4) try in incognito or disable ad blockers.'
        )
      } else {
        setError(msg || 'Login failed.')
      }
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')
    if (!signupName.trim() || !signupEmail.trim() || !signupBusinessType || !signupCountry || !signupCountryCode || !signupPhone.trim() || !signupPassword || !signupConfirmPassword) {
      setError('Please fill in all fields.')
      return
    }
    if (signupPassword !== signupConfirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (signupPassword.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (!supabase) {
      setError('Auth is not configured. Add Supabase URL and anon key to .env — see SUPABASE_SETUP.md')
      return
    }
    setIsSubmitting(true)
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: signupEmail.trim(),
        password: signupPassword,
        options: {
          data: {
            full_name: signupName.trim(),
            business_type: signupBusinessType,
            country: signupCountry,
            country_code: signupCountryCode,
            phone: signupPhone.trim(),
          },
        },
      })
      if (authError) {
        setIsSubmitting(false)
        setError(authError.message || 'Sign up failed.')
        return
      }
      if (authData?.user) {
        await supabase.from('profiles').upsert(
          {
            id: authData.user.id,
            full_name: signupName.trim(),
            business_type: signupBusinessType,
            country: signupCountry,
            country_code: signupCountryCode,
            phone: signupPhone.trim(),
          },
          { onConflict: 'id' }
        )
      }
      setIsSubmitting(false)
      setSuccessMessage('Account created. Check your email to confirm, or sign in now if confirmation is disabled.')
      navigate('/', { replace: true })
    } catch (err) {
      setIsSubmitting(false)
      const msg = err?.message || String(err)
      if (msg.toLowerCase().includes('fetch') || msg.toLowerCase().includes('network')) {
        setError(
          'Could not reach Supabase. Check: (1) .env has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, (2) URL has no trailing slash, (3) dev server was restarted after adding .env, (4) try in incognito or disable ad blockers.'
        )
      } else {
        setError(msg || 'Sign up failed.')
      }
    }
  }

  return (
    <div className="App">
      <main className="auth-page">
        <div className={`auth-card ${mode === 'signup' ? 'auth-card--wide' : ''}`}>
          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab ${mode === 'login' ? 'auth-tab-active' : ''}`}
              onClick={() => setMode('login')}
            >
              Log in
            </button>
            <button
              type="button"
              className={`auth-tab ${mode === 'signup' ? 'auth-tab-active' : ''}`}
              onClick={() => setMode('signup')}
            >
              Sign up
            </button>
          </div>

          {mode === 'login' ? (
            <form className="auth-form" onSubmit={handleLogin}>
              <h1 className="auth-title">Welcome back</h1>
              <p className="auth-subtitle">Sign in to your account to continue.</p>
              {error && <div className="auth-error">{error}</div>}
              <label className="auth-label">
                Email
                <input
                  type="email"
                  className="auth-input"
                  placeholder="you@company.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
              <label className="auth-label">
                Password
                <input
                  type="password"
                  className="auth-input"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </label>
              <button type="submit" className="auth-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in…' : 'Log in'}
              </button>
            </form>
          ) : (
            <form className="auth-form auth-form--signup" onSubmit={handleSignup}>
              <h1 className="auth-title">Create an account</h1>
              <p className="auth-subtitle">Join Source Central to discover and connect with verified manufacturers.</p>
              {error && <div className="auth-error">{error}</div>}
              <div className="auth-form-grid">
                <label className="auth-label">
                  Full name
                  <input
                    type="text"
                    className="auth-input"
                    placeholder="Your name"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    autoComplete="name"
                  />
                </label>
                <label className="auth-label">
                  Email
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="you@company.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    autoComplete="email"
                  />
                </label>
                <label className="auth-label">
                  I am a
                  <select
                    className="auth-input auth-select"
                    value={signupBusinessType}
                    onChange={(e) => setSignupBusinessType(e.target.value)}
                    aria-label="Business type"
                  >
                    {BUSINESS_TYPES.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </label>
                <label className="auth-label">
                  Country
                  <select
                    className="auth-input auth-select"
                    value={signupCountry}
                    onChange={(e) => setSignupCountry(e.target.value)}
                    aria-label="Country"
                  >
                    {COUNTRIES.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </label>
                <label className="auth-label">
                  Country code
                  <select
                    className="auth-input auth-select auth-select--narrow"
                    value={signupCountryCode}
                    onChange={(e) => setSignupCountryCode(e.target.value)}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </label>
                <label className="auth-label">
                  Phone number
                  <input
                    type="tel"
                    className="auth-input"
                    placeholder="e.g. 9876543210"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                    autoComplete="tel-national"
                  />
                </label>
                <label className="auth-label">
                  Password
                  <input
                    type="password"
                    className="auth-input"
                    placeholder="At least 8 characters"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </label>
                <label className="auth-label">
                  Confirm password
                  <input
                    type="password"
                    className="auth-input"
                    placeholder="••••••••"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </label>
              </div>
              <button type="submit" className="auth-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating account…' : 'Sign up'}
              </button>
            </form>
          )}

          <p className="auth-back">
            <Link to="/" className="auth-back-link">← Back to home</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default AuthPage
