import { Mail, MapPinned } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="pp-section" style={{ background: 'var(--pp-surface)' }}>
      <div className="pp-container">
        <p className="pp-section-kicker">Contact</p>
        <h2 className="pp-section-title">Talk to PlasticPay</h2>
        <p className="pp-section-desc" style={{ marginBottom: '1.75rem', marginInline: 'auto' }}>
          Partnerships, press, and rider support routes — placeholder details below until production
          mailboxes go live.
        </p>
        <div className="contact-card">
          <Mail
            size={32}
            strokeWidth={2}
            color="var(--pp-primary)"
            style={{ marginBottom: 12 }}
            aria-hidden
          />
          <h3 className="pp-card-title" style={{ marginBottom: 8 }}>
            Email us
          </h3>
          <p className="pp-card-text" style={{ marginBottom: 18 }}>
            <a href="mailto:hello@plasticpay.example">hello@plasticpay.example</a>
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: 'var(--pp-muted)',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            <MapPinned size={20} strokeWidth={2} />
            Network coverage expanding across the UK — check the app for live machine pins.
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
