import { AnimatedSection } from '../AnimatedSection'

const REWARDS = [
  { item: 'Plastic bottle', coins: 5 },
  { item: 'Aluminium can', coins: 7 },
  { item: 'Large bottle', coins: 10 },
  { item: 'Large can', coins: 12 },
] as const

export function RewardsSection() {
  return (
    <AnimatedSection id="rewards" className="pp-section" style={{ background: 'var(--pp-surface)' }}>
      <div className="pp-container">
        <p className="pp-section-kicker">Rewards</p>
        <h2 className="pp-section-title">Simple earn rates</h2>
        <p className="pp-section-desc">
          Coins add up with every confirmed deposit. Convert to cash when you’re ready — subject to
          the minimum withdrawal.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          <div>
            <div className="reward-rows">
              {REWARDS.map(({ item, coins }) => (
                <div key={item} className="reward-row">
                  <span>{item}</span>
                  <span>{coins} coins</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pp-card" style={{ padding: '1.75rem', alignSelf: 'start' }}>
            <h3 className="pp-card-title">Cash value</h3>
            <p className="pp-card-text" style={{ marginBottom: 16 }}>
              Coins convert at a fixed rate so you always know what your balance is worth.
            </p>
            <div className="reward-row" style={{ marginBottom: 10 }}>
              <span>1 coin</span>
              <span>£0.01</span>
            </div>
            <div className="reward-row">
              <span>Minimum withdrawal</span>
              <span>£10</span>
            </div>
            <p className="pp-card-text" style={{ marginTop: 16, fontSize: 13 }}>
              Rates and thresholds may be updated; the app always shows the live numbers for your
              account.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
