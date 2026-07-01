import { Link } from 'react-router-dom'
import { waLink } from '../data/content.js'
import HeroSection from '../components/HeroSection.jsx'
import styles from './ServiceDetailPage.module.css'

export default function ServiceDetailPage({ service }) {
  return (
    <>
      <HeroSection
        eyebrow="MS Eventos — Servicios"
        title={service.title}
        subtitle={service.short}
        imgUrl={service.heroImg}
      >
        <a
          href={waLink(`Hola! Me interesa cotizar: ${service.title}`)}
          target="_blank"
          rel="noreferrer"
          className={styles.heroCta}
        >
          Cotizar este servicio →
        </a>
      </HeroSection>

      <section className={styles.detail}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>¿Qué incluye?</div>
            <h2 className={styles.title}>
              <span className={styles.icon}>{service.icon}</span> {service.title}
            </h2>
          </div>

          <div className={styles.grid}>
            {service.items.map((item, i) => (
              <div key={i} className={styles.item}>
                <span className={styles.bullet}>▸</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className={styles.btnPrimary}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              <img src="/src/assets/whatsapp.svg" alt="WhatsApp" style={{ width: 22, height: 22 }} />
              Escribir por WhatsApp
            </a>
            <Link to="/" className={styles.btnBack}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
