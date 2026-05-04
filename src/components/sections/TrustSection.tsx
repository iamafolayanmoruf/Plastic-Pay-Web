import { BadgeCheck, Fingerprint, History, Lock, ShieldAlert, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'

const TRUST = [
  {
    title: 'Verified accounts',
    text: 'Sign-up and verification protect payouts and reduce abuse across the network.',
    icon: Fingerprint,
  },
  {
    title: 'Secure wallet',
    text: 'Your balance, pending coins, and cash conversion live behind industry-standard auth flows.',
    icon: Lock,
  },
  {
    title: 'Machine confirmation',
    text: 'Deposits are tied to telemetry from partnered reverse vending machines — not manual claims.',
    icon: BadgeCheck,
  },
  {
    title: 'Admin validation',
    text: 'Edge cases route to PlasticPay admins with full session context.',
    icon: ShieldCheck,
  },
  {
    title: 'Fraud prevention',
    text: 'Rate limits, device signals, and pattern checks safeguard community rewards.',
    icon: ShieldAlert,
  },
  {
    title: 'Clear transaction history',
    text: 'Every ledger movement is labelled so you always know why your balance moved.',
    icon: History,
  },
] as const

export function TrustSection() {
  return (
    <AnimatedSection className="pp-section">
      <div className="pp-container">
        <p className="pp-section-kicker">Trust</p>
        <h2 className="pp-section-title">Designed for credibility</h2>
        <p className="pp-section-desc">
          Rewards should feel inevitable, not ambiguous. PlasticPay aligns machine data, wallets, and
          human oversight.
        </p>
        <div className="trust-grid">
          {TRUST.map(({ title, text, icon: Icon }) => (
            <article key={title} className="pp-card">
              <div className="pp-card-icon">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="pp-card-title">{title}</h3>
              <p className="pp-card-text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
