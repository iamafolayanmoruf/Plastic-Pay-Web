import { AnimatedSection } from '../AnimatedSection'
import { AppDownloadButtons } from '../AppDownloadButtons'

export function DownloadSection() {
  return (
    <AnimatedSection id="download" className="pp-section">
      <div className="pp-container">
        <div
          className="pp-card"
          style={{
            padding: 'clamp(1.75rem, 5vw, 3rem)',
            textAlign: 'center',
            background:
              'linear-gradient(145deg, var(--pp-accent-soft) 0%, #fff 38%, var(--pp-bg-deep) 100%)',
            borderRadius: '24px',
            boxShadow: 'var(--pp-shadow)',
          }}
        >
          <p className="pp-section-kicker" style={{ justifyContent: 'center' }}>
            Get the app
          </p>
          <h2 className="pp-section-title">Start earning from your recycling today</h2>
          <p className="pp-section-desc" style={{ marginInline: 'auto', marginBottom: '1.75rem' }}>
            Download PlasticPay on iOS or Android — same secure wallet experience everywhere. Store
            links go here when listings are approved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AppDownloadButtons />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
