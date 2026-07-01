import { GALLERY_IMGS } from '../data/content.js'
import HeroSection from '../components/HeroSection.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import styles from './GaleriaPage.module.css'

export default function GaleriaPage() {
  return (
    <>
      <HeroSection
        eyebrow="MS Eventos"
        title="Nuestros mejores"
        accent="momentos"
        subtitle="Cada foto es un evento real. Mira de qué somos capaces."
        imgUrl="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=70"
      />

      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>Galería</div>
            <h2 className={styles.title}>Producción en imágenes</h2>
          </div>
          <GalleryGrid images={GALLERY_IMGS} />
        </div>
      </section>
    </>
  )
}
