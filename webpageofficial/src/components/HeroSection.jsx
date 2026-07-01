import styles from './HeroSection.module.css'

export default function HeroSection({ eyebrow, title, accent, subtitle, imgUrl, children }) {
  return (
    <section className={styles.hero} style={{ '--hero-img': `url(${imgUrl})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h1 className={styles.title}>
          {title}
          {accent && <><br /><span className={styles.accent}>{accent}</span></>}
        </h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
