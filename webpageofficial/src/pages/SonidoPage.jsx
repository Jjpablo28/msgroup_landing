import { SERVICES } from '../data/content.js'
import ServiceDetailPage from './ServiceDetailPage.jsx'

export default function SonidoPage() {
  const service = SERVICES.find(s => s.id === 'sonido')
  return <ServiceDetailPage service={service} />
}
