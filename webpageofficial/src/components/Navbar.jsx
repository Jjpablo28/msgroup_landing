import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_LINKS, waLink } from '../data/content.js'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  })

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoBadge}>m:s</div>
          <div>
            <div className={styles.logoName}>MS EVENTOS</div>
            <div className={styles.logoSub}>soluciones profesionales</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          {NAV_LINKS.map(l => (
              <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({isActive}) =>
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
              >
                {l.label}
              </NavLink>
          ))}
          <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className={styles.cta}
          >
            <img src="/src/assets/whatsapp.svg" alt="WhatsApp" style={{width: 20, height: 20}}/>
            WhatsApp
          </a>
        </div>

        {/* Hamburger */}
        <button
            className={styles.hamburger}
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
          <div className={styles.mobileMenu}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            💬 Cotizar ahora
          </a>
        </div>
      )}
    </nav>
  )
}
