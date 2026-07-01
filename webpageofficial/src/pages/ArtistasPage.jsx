import { SERVICES } from '../data/content.js'
import ServiceDetailPage from './ServiceDetailPage.jsx'

export default function ArtistasPage() {
  const service = SERVICES.find(s => s.id === 'artistas')
  return <ServiceDetailPage service={service} />
}
