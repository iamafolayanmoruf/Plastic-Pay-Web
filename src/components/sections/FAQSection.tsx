import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

const FAQS = [
  {
    q: 'What is PlasticPay?',
    a: 'PlasticPay is a recycling rewards platform: scan approved packaging in the app, generate a deposit code, recycle at partnered machines, and earn coins that convert to withdrawable cash.',
  },
  {
    q: 'How do I earn coins?',
    a: 'Each successfully scanned item is assigned coins when the machine confirms your deposit batch. Larger or higher-value SKUs typically earn more coins per item.',
  },
  {
    q: 'When does my deposit code expire?',
    a: 'Codes last 30 minutes, but only after you tap Copy Code — that tap starts your countdown.',
  },
  {
    q: 'Can I recycle cans and aluminium?',
    a: 'Yes. Aluminium and drink cans supported by the barcode catalogue are recognised in-scan and credited after machine confirmation.',
  },
  {
    q: 'When can I withdraw?',
    a: 'Once your available cash equivalent meets or exceeds £10 — and your bank payout details pass validation — you can request a withdrawal in the wallet flow.',
  },
  {
    q: 'Why are my coins pending?',
    a: 'Pending coins attach to batches that machines have not finalized yet. After confirmation moves through our ledger, balances shift from pending to active.',
  },
  {
    q: 'How are items confirmed?',
    a: 'Reverse vending endpoints report intake tied to your issued deposit code; PlasticPay validates the session payload before releasing coins.',
  },
] as const

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <AnimatedSection id="faq" className="pp-section">
      <div className="pp-container">
        <p className="pp-section-kicker">FAQ</p>
        <h2 className="pp-section-title">Questions, answered plainly</h2>
        <p className="pp-section-desc">
          Straightforward guidance for newcomers. For account-specific queries, reach out via{' '}
          <a href="mailto:hello@plasticpay.example" style={{ color: 'var(--pp-primary)' }}>
            hello@plasticpay.example
          </a>
          .
        </p>
        <div className="faq-list">
          {FAQS.map((item, idx) => {
            const expanded = open === idx
            return (
              <div key={item.q} className="faq-item">
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : idx)}
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {expanded && <div className="faq-a">{item.a}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
