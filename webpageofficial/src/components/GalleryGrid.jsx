import { useState } from 'react'
import styles from './GalleryGrid.module.css'

export default function GalleryGrid({ images }) {
  const [selected, setSelected] = useState(null)

  const prev = () => setSelected(i => (i - 1 + images.length) % images.length)
  const next = () => setSelected(i => (i + 1) % images.length)

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.item} onClick={() => setSelected(i)}>
            <img src={img.url} alt={img.alt} loading="lazy" className={styles.img} />
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className={styles.lightbox} onClick={() => setSelected(null)}>
          <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setSelected(null)}>✕</button>
            <img
              src={images[selected].url.replace('w=800', 'w=1200')}
              alt={images[selected].alt}
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxNav}>
              <button onClick={prev}>← Anterior</button>
              <span>{selected + 1} / {images.length}</span>
              <button onClick={next}>Siguiente →</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
