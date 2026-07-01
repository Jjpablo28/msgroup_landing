import { SERVICES } from '../data/content.js'
import ServiceDetailPage from './ServiceDetailPage.jsx'

export default function DjsPage() {
  const service = SERVICES.find(s => s.id === 'djs')
  return <ServiceDetailPage service={service} />
}
