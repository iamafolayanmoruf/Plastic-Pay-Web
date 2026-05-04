import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { AnimatedSection } from '../AnimatedSection'

function useCount(end: number, duration = 2) {
  const [v, setV] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const from = 0
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      setV(from + (end - from) * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, inView])

  return { ref, value: v }
}

function Stat({
  end,
  label,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  end: number
  label: string
  decimals?: number
  prefix?: string
  suffix?: string
}) {
  const { ref, value } = useCount(end, 2.1)
  return (
    <article ref={ref} className="pp-card impact-stat">
      <div className="impact-value">
        {prefix}
        {value.toLocaleString('en-GB', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </div>
      <div className="impact-label">{label}</div>
    </article>
  )
}

export function ImpactSection() {
  return (
    <AnimatedSection className="pp-section" style={{ background: 'var(--pp-surface)' }}>
      <div className="pp-container">
        <p className="pp-section-kicker">Impact</p>
        <h2 className="pp-section-title">Community-scale outcomes</h2>
        <p className="pp-section-desc">
          Numbers update as the network grows (illustrative live-style counters for this marketing
          preview).
        </p>
        <div className="impact-grid">
          <Stat end={842600} label="Bottles recycled via PlasticPay machines" />
          <Stat end={516220} label="Cans diverted from landfill" />
          <Stat end={1840} label="Tonnes CO₂e impact avoided (estimated)" suffix=" t" />
          <Stat end={2.94} label="Sample rewards circulated (£m equivalent)" decimals={2} prefix="£" />
        </div>
      </div>
    </AnimatedSection>
  )
}
