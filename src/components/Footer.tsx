import { NAV_LINKS } from '../data/nav'
import { LogoWordmark } from './Logo'
import { IconInstagram, IconLinkedIn, IconX } from './SocialLinks'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="pp-container">
        <div className="footer-grid">
          <div>
            <a href="#home">
              <LogoWordmark />
            </a>
            <p className="footer-desc">
              PlasticPay turns everyday recycling into real rewards — scanned in-app, deposited at smart
              machines, paid out responsibly.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map(({ href, label }: (typeof NAV_LINKS)[number]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
            <div className="footer-social" aria-label="Social media">
              <a href="#" aria-label="PlasticPay on LinkedIn">
                <IconLinkedIn width={20} height={20} />
              </a>
              <a href="#" aria-label="PlasticPay on X">
                <IconX width={20} height={20} />
              </a>
              <a href="#" aria-label="PlasticPay on Instagram">
                <IconInstagram width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} PlasticPay Ltd. Placeholder footer.</span>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </nav>
          <span>Contact: hello@plasticpay.example</span>
        </div>
      </div>
    </footer>
  )
}
