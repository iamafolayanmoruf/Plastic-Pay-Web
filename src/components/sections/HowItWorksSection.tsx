import { AnimatedSection } from '../AnimatedSection'

const STEPS = [
  'Create your account',
  'Scan your plastic, cans, aluminium, or recyclable items',
  'Generate and copy your deposit code',
  'Deposit items at the machine within 30 minutes',
  'Coins move from pending to active after confirmation',
  'Withdraw once you reach the minimum balance',
]

export function HowItWorksSection() {
  return (
    <AnimatedSection id="how-it-works" className="pp-section">
      <div className="pp-container">
        <p className="pp-section-kicker">Flow</p>
        <h2 className="pp-section-title">How PlasticPay works</h2>
        <p className="pp-section-desc">
          Six clear steps — from signup to payout. No jargon, just a repeatable loop every time you
          recycle.
        </p>
        <div className="steps-flow">
          {STEPS.map((step, i) => (
            <article key={step} className="step-card">
              <div className="step-badge">{i + 1}</div>
              <h3 className="pp-card-title">{step}</h3>
              <p className="pp-card-text">
                {i === 0 && 'Verify your email and complete your profile to unlock scanning.'}
                {i === 1 && 'Build a batch in the app before you head to a machine.'}
                {i === 2 && 'Your code ties the machine session to your account.'}
                {i === 3 && 'The countdown begins when you copy — plan your trip around it.'}
                {i === 4 && 'Machines report successful intake; we reconcile every session.'}
                {i === 5 && 'Request a withdrawal with complete bank details when you’re eligible.'}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
