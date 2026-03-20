import './FeatureShowcaseRow.css'

/**
 * Two-column feature block: copy on one side, visual (demo / image) on the other.
 * Use visualSide="left" | "right" to alternate rows below the hero CTAs.
 */
function FeatureShowcaseRow({
  visualSide = 'right',
  eyebrow,
  title,
  description,
  headingId = 'feature-showcase-heading',
  /** Shorter visuals (e.g. static cards) — don’t reserve the tall demo min-height */
  compactVisual = false,
  /** Extra horizontal space between copy and visual */
  wideGap = false,
  children,
}) {
  const copy = (
    <div className="feature-showcase-row__copy">
      {eyebrow && <p className="feature-showcase-row__eyebrow">{eyebrow}</p>}
      {title && (
        <h2 id={headingId} className="feature-showcase-row__title">
          {title}
        </h2>
      )}
      {description && <p className="feature-showcase-row__desc">{description}</p>}
    </div>
  )

  const visual = <div className="feature-showcase-row__visual">{children}</div>

  const sectionClass = [
    'feature-showcase-row',
    `feature-showcase-row--visual-${visualSide}`,
    compactVisual ? 'feature-showcase-row--compact-visual' : '',
    wideGap ? 'feature-showcase-row--wide-gap' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClass} aria-labelledby={title ? headingId : undefined}>
      <div className="feature-showcase-row__inner">
        {visualSide === 'right' ? (
          <>
            {copy}
            {visual}
          </>
        ) : (
          <>
            {visual}
            {copy}
          </>
        )}
      </div>
    </section>
  )
}

export default FeatureShowcaseRow
