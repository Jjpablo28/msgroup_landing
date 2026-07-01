import { Link } from 'react-router-dom'
import { NAV_LINKS, waLink } from '../data/content.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoBadge}>m:s</div>
            <div>
              <div className={styles.logoName}>MS EVENTOS</div>
              <div className={styles.logoSub}>soluciones profesionales</div>
            </div>
          </Link>

          <nav className={styles.links}>
            {NAV_LINKS.map(l => (
                <Link key={l.to} to={l.to} className={styles.link}>
                  {l.label}
                </Link>
            ))}
          </nav>
          <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className={styles.cta}
          >
            <img src="/src/assets/whatsapp.svg" alt="WhatsApp" style={{ width: 20, height: 20 }} />
            WhatsApp
          </a>

        </div>

        <div className={styles.bottom}>
          <span>Copyright © 2026 msgroup. Todos los derechos reservados.</span>
          <span>ARRAY · LEDS&BEAMS · PANTALLA</span>
        </div>
      </div>
    </footer>
  )
}
