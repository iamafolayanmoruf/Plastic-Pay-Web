import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/nav'
import { LogoWordmark } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
        <div className="pp-container nav-inner">
          <a href="#home" onClick={closeMenu}>
            <LogoWordmark />
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
            <a href="#download" className="pp-btn pp-btn-primary pp-btn-nav">
              Download App
            </a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-panel ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="#download" className="pp-btn pp-btn-primary" style={{ marginTop: 8 }} onClick={closeMenu}>
          Download App
        </a>
      </div>
    </>
  )
}
