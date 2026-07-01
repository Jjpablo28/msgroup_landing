import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ icon, title, short, path }) {
  return (
    <Link to={path} className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{short}</p>
      <span className={styles.link}>Ver más →</span>
    </Link>
  )
}
