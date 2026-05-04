import {
  Banknote,
  Clock,
  QrCode,
  Recycle,
  ScanLine,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'

const FEATURES = [
  {
    title: 'Scan recyclable items',
    text: 'Point your camera at barcodes — PlasticPay recognises bottles, cans, and approved packaging instantly.',
    icon: ScanLine,
  },
  {
    title: 'Generate deposit code',
    text: 'Create a secure one-time deposit code whenever you’re ready to drop items at a reverse vending machine.',
    icon: QrCode,
  },
  {
    title: 'Deposit at recycling machine',
    text: 'Take your scanned batch to an on-network machine and deposit within the countdown window.',
    icon: Recycle,
  },
  {
    title: 'Earn coins',
    text: 'Coins are credited after the machine confirms your drop — transparent rules, every time.',
    icon: Wallet,
  },
  {
    title: 'Withdraw cash',
    text: 'Convert coins to cash and request a payout once you hit the minimum balance.',
    icon: Banknote,
  },
  {
    title: 'Track recycling impact',
    text: 'See your history, pending vs active balance, and the difference you’re making.',
    icon: TrendingUp,
  },
] as const

export function FeaturesSection() {
  return (
    <AnimatedSection className="pp-section" style={{ background: 'var(--pp-surface)' }}>
      <div className="pp-container">
        <p className="pp-section-kicker">Product</p>
        <h2 className="pp-section-title">Everything you need to recycle on your terms</h2>
        <p className="pp-section-desc">
          One app for scanning, depositing, and getting paid — built for clarity, speed, and trust.
        </p>
        <div className="feature-grid">
          {FEATURES.map(({ title, text, icon: Icon }) => (
            <article key={title} className="pp-card">
              <div className="pp-card-icon">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="pp-card-title">{title}</h3>
              <p className="pp-card-text">{text}</p>
            </article>
          ))}
        </div>
        <div
          style={{
            marginTop: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--pp-muted)',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          <Clock size={18} strokeWidth={2} />
          Deposit windows are countdown-protected — see the Deposit Code section for details.
        </div>
      </div>
    </AnimatedSection>
  )
}
