import { Box, CircleDot, Package, Recycle, Wine } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'

const ITEMS = [
  { label: 'Plastic bottles', icon: Recycle },
  { label: 'Aluminium cans', icon: CircleDot },
  { label: 'Drink cans', icon: Wine },
  { label: 'Large bottles', icon: Package },
  { label: 'Other recyclable packaging', icon: Box },
] as const

export function RecyclingItemsSection() {
  return (
    <AnimatedSection id="recycling-items" className="pp-section">
      <div className="pp-container">
        <p className="pp-section-kicker">Accepted items</p>
        <h2 className="pp-section-title">What you can recycle with PlasticPay</h2>
        <p className="pp-section-desc">
          Bring approved packaging to supported reverse vending machines. In-app scanning validates
          barcodes before you travel.
        </p>
        <div className="item-grid">
          {ITEMS.map(({ label, icon: Icon }) => (
            <article key={label} className="pp-card item-tile">
              <div className="pp-card-icon">
                <Icon size={24} strokeWidth={2} />
              </div>
              <h3 className="pp-card-title">{label}</h3>
              <p className="pp-card-text">Reward value varies by item type — see Rewards.</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
