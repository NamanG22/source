import { useEffect, useRef, useState } from 'react'
import './HeroIntelligenceDemo.css'

const FULL_PROMPT =
  'Find me sustainable leather suppliers in Kanpur and compare import duties for UK vs USA.'

const REPLAY_DELAY_MS = 5000
/** How much of the demo must be visible to count as “scrolled to” */
const IN_VIEW_THRESHOLD = 0.3
const IN_VIEW_ROOT_MARGIN = '0px 0px -8% 0px'

/**
 * Interactive demo card (ported from SourceCentral hell / HeroTerminal).
 * Typing → analyzing → suppliers + duty table + negotiation tip; Replay restarts.
 * Autoplays when scrolled into view and loops every REPLAY_DELAY_MS after each completion while visible.
 */
function HeroIntelligenceDemo() {
  const rootRef = useRef(null)
  const prevInViewRef = useRef(false)
  const [isInView, setIsInView] = useState(false)

  const [session, setSession] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showResponse, setShowResponse] = useState(false)
  const [phase, setPhase] = useState('idle') // idle | typing | thinking | done

  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }
    const ob = new IntersectionObserver(
      ([entry]) => setIsInView(Boolean(entry?.isIntersecting)),
      { threshold: IN_VIEW_THRESHOLD, rootMargin: IN_VIEW_ROOT_MARGIN },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  /** Entering the viewport kicks off (or restarts) a run */
  useEffect(() => {
    const entered = isInView && !prevInViewRef.current
    prevInViewRef.current = isInView
    if (!entered) return
    setSession((s) => s + 1)
  }, [isInView])

  /** While visible, replay a few seconds after the previous run finishes */
  useEffect(() => {
    if (!isInView || phase !== 'done') return
    const t = setTimeout(() => {
      setSession((s) => s + 1)
    }, REPLAY_DELAY_MS)
    return () => clearTimeout(t)
  }, [phase, isInView])

  useEffect(() => {
    if (session === 0) return

    let cancelled = false
    let timeoutId
    setDisplayText('')
    setShowResponse(false)
    setPhase('typing')

    let currentIndex = 0
    const interval = setInterval(() => {
      if (cancelled) return
      if (currentIndex <= FULL_PROMPT.length) {
        setDisplayText(FULL_PROMPT.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        if (cancelled) return
        setPhase('thinking')
        timeoutId = setTimeout(() => {
          if (!cancelled) {
            setShowResponse(true)
            setPhase('done')
          }
        }, 600)
      }
    }, 30)

    return () => {
      cancelled = true
      clearInterval(interval)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [session])

  const handlePlay = () => {
    setSession((s) => s + 1)
  }

  const isTyping = phase === 'typing'
  const showThinking = phase === 'thinking'

  const buttonLabel =
    phase === 'typing' || phase === 'thinking'
      ? '⟳ Analyzing...'
      : showResponse
        ? '▶ Replay'
        : '▶ See intelligence in action'

  return (
    <div className="hero-intel" ref={rootRef}>
      <div className="hero-intel-glow" aria-hidden />
      <div className="hero-intel-card">
        <div className="hero-intel-card__header">
          <div className="hero-intel-card__title">
            <span className="hero-intel-card__dot" aria-hidden />
            <span>Source Central Intelligence</span>
          </div>
          <span className="hero-intel-card__live">Live</span>
        </div>

        <div className="hero-intel-scroll">
          <div className="hero-intel-row hero-intel-row--user">
            <div className="hero-intel-bubble hero-intel-bubble--user">
              <p>{displayText}</p>
              {isTyping && !showResponse && <span className="hero-intel-cursor">▋</span>}
            </div>
          </div>

          {showThinking && !showResponse && (
            <div className="hero-intel-row hero-intel-row--ai">
              <div className="hero-intel-bubble hero-intel-bubble--thinking">
                <div className="hero-intel-dots" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <span>Analyzing tariffs & factories...</span>
              </div>
            </div>
          )}

          {showResponse && (
            <div className="hero-intel-row hero-intel-row--ai hero-intel-response">
              <div className="hero-intel-bubble hero-intel-bubble--response">
                <div className="hero-intel-block">
                  <p className="hero-intel-block__title">✓ Found 8 Verified Suppliers</p>
                  <div className="hero-intel-suppliers">
                    <div className="hero-intel-supplier">
                      <p className="hero-intel-supplier__name">Kanpur Leather Co.</p>
                      <p className="hero-intel-supplier__meta">4.8★ • ISO 9001</p>
                    </div>
                    <div className="hero-intel-supplier">
                      <p className="hero-intel-supplier__name">Premium Hides Ltd</p>
                      <p className="hero-intel-supplier__meta">4.6★ • OEKO-TEX</p>
                    </div>
                  </div>
                </div>

                <div className="hero-intel-block">
                  <p className="hero-intel-block__title">Import Duty Comparison</p>
                  <table className="hero-intel-table">
                    <thead>
                      <tr>
                        <th>Route</th>
                        <th>Duty</th>
                        <th>Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hero-intel-table__highlight">
                        <td>India → UK</td>
                        <td>0% (FTA)</td>
                        <td>$4.20/unit</td>
                      </tr>
                      <tr>
                        <td>India → USA</td>
                        <td>12% (MFN)</td>
                        <td>$4.68/unit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="hero-intel-tip">
                  <p className="hero-intel-tip__label">💡 Negotiation Tip</p>
                  <p className="hero-intel-tip__text">
                    Current raw material costs favor a price floor of $3.85/unit for bulk orders.
                    Escalating to suppliers for approval.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="hero-intel-replay"
          onClick={handlePlay}
          disabled={phase === 'typing' || phase === 'thinking'}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}

export default HeroIntelligenceDemo
