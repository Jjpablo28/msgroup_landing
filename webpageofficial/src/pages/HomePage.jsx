import { Link } from 'react-router-dom'
import { SERVICES, EVENT_TYPES, waLink } from '../data/content.js'
import HeroSection from '../components/HeroSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Más de 20 años de experiencia"
        title="Tu evento, nuestra"
        accent="producción profesional"
        subtitle="Sonido, pantallas LED, iluminación, DJs y artistas para eventos privados, institucionales y masivos en Colombia."
        imgUrl="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&q=70"
      >
        <div className={styles.heroBtns}>
          <a href={waLink()} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
            Cotiza tu evento
          </a>
          <Link to="/sonido" className={styles.btnOutline}>
            Ver servicios
          </Link>
        </div>

        <div className={styles.stats}>
          {[['20+', 'Años de experiencia'], ['500+', 'Eventos realizados'], ['100%', 'Compromiso técnico']].map(([n, t]) => (
            <div key={t} className={styles.stat}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{t}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Nuestros servicios</div>
            <h2 className={styles.sectionTitle}>Producción técnica integral</h2>
            <p className={styles.sectionSub}>Cada elemento pensado para que tu evento supere expectativas.</p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map(s => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className={styles.events}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Tipos de evento</div>
            <h2 className={styles.sectionTitle}>Cuéntanos cuál es tu evento</h2>
            <p className={styles.sectionSub}>Más de 20 años en toda clase de producciones.</p>
          </div>
          <div className={styles.eventsGrid}>
            {EVENT_TYPES.map(evt => (
              <div key={evt.id} className={styles.evtCard}>
                <div
                  className={styles.evtImg}
                  style={{ backgroundImage: `url(${evt.img})` }}
                >
                  <div className={styles.evtImgOverlay} />
                  <span className={styles.evtIcon}>{evt.icon}</span>
                </div>
                <div className={styles.evtBody}>
                  <h3 className={styles.evtTitle}>Eventos {evt.label}</h3>
                  <div className={styles.evtTags}>
                    {evt.items.slice(0, 3).map(item => (
                      <span key={item} className={styles.tag}>{item}</span>
                    ))}
                    {evt.items.length > 3 && (
                      <span className={styles.tagMore}>+{evt.items.length - 3} más</span>
                    )}
                  </div>
                  <a
                    href={waLink(`Hola! Quiero cotizar un evento ${evt.label}`)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.evtCta}
                  >
                    Cotizar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>cotiza con nosotros...</h2>
          <p className={styles.ctaSub}>INFO: 311 224 0535</p>
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
        </div>
      </section>
    </>
  )
}
