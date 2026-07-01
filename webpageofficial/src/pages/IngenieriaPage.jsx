import { SERVICES } from '../data/content.js'
import ServiceDetailPage from './ServiceDetailPage.jsx'

export default function IngenieriaPage() {
  const service = SERVICES.find(s => s.id === 'ingenieria')
  return <ServiceDetailPage service={service} />
}
