import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import { AppDownloadButtons } from '../AppDownloadButtons'
import { PhoneMockup } from '../PhoneMockup'

export function HeroSection() {
  return (
    <AnimatedSection id="home" className="hero-block">
      <div className="hero-bg" aria-hidden />
      <div className="pp-container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="pp-section-kicker"
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Recycling rewards
          </motion.span>
          <h1 className="hero-title">Recycle More. Earn More. Build a Cleaner Future.</h1>
          <p className="hero-sub">
            PlasticPay lets you earn rewards when you recycle plastic bottles, cans, aluminium, and
            other recyclable items through our smart recycling system.
          </p>
          <div className="hero-btns">
            <a href="#download" className="pp-btn pp-btn-primary">
              Download App
            </a>
            <a href="#how-it-works" className="pp-btn pp-btn-ghost">
              Learn How It Works
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <BadgeCheck size={18} color="var(--pp-primary)" strokeWidth={2.25} />
              Machine-confirmed deposits
            </span>
            <span>
              <BadgeCheck size={18} color="var(--pp-accent)" strokeWidth={2.25} />
              Cash withdrawals to your bank
            </span>
          </div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
      <div className="pp-container" style={{ marginTop: 24 }}>
        <AppDownloadButtons />
      </div>
    </AnimatedSection>
  )
}
