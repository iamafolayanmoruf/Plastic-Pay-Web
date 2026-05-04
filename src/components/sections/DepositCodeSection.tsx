import { Copy, Timer } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'

export function DepositCodeSection() {
  return (
    <AnimatedSection id="deposit-code" className="pp-section" style={{ background: 'var(--pp-surface)' }}>
      <div className="pp-container">
        <p className="pp-section-kicker">Deposit code</p>
        <h2 className="pp-section-title">Your code, your window</h2>
        <p className="pp-section-desc">
          Deposit codes keep every session traceable and fair — for you, the machine, and our
          operations team.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            alignItems: 'stretch',
          }}
        >
          <div className="pp-card" style={{ padding: '1.75rem' }}>
            <div className="pp-card-icon" style={{ marginBottom: 16 }}>
              <Copy size={22} strokeWidth={2} />
            </div>
            <h3 className="pp-card-title">Generate anytime</h3>
            <p className="pp-card-text">
              You can create a deposit code whenever you’re ready. Nothing starts until you commit to
              the session.
            </p>
          </div>
          <div className="pp-card" style={{ padding: '1.75rem' }}>
            <div className="pp-card-icon" style={{ marginBottom: 16 }}>
              <Timer size={22} strokeWidth={2} />
            </div>
            <h3 className="pp-card-title">Countdown on copy</h3>
            <p className="pp-card-text">
              The 30-minute timer only begins after you tap <strong>Copy Code</strong>. That’s your
              signal to head to the machine.
            </p>
          </div>
          <div className="pp-card" style={{ padding: '1.75rem' }}>
            <div className="pp-card-icon" style={{ marginBottom: 16 }}>
              <Timer size={22} strokeWidth={2} />
            </div>
            <h3 className="pp-card-title">Expiry & reset</h3>
            <p className="pp-card-text">
              When the countdown ends, the code expires and the <strong>Copy Code</strong> action
              returns so you can start a fresh window.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
