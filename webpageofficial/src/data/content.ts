import {faGear} from "@fortawesome/free-solid-svg-icons";

export const WHATSAPP_NUMBER = '573112240535'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export function waLink(msg = '') {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg || 'Hola! Me interesa cotizar un evento con MS Eventos.')}`
}

export const NAV_LINKS = [
    { label: 'Inicio',      to: '/' },
    { label: 'Sonido',      to: '/sonido' },
    { label: 'Artistas',    to: '/artistas' },
    { label: 'Ingeniería',  to: '/ingenieria' },
    { label: 'DJs',         to: '/djs' },
    { label: 'Galería',     to: '/galeria' },
]

export const SERVICES = [
    {
        id: 'sonido',
        path: '/sonido',
        icon: '🔊',
        title: 'Sonido, Pantallas e Iluminación',
        short: 'Arrays profesionales, pantallas LED y diseño lumínico para todo tipo de evento.',
        heroImg: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
        items: [
            'Arrays line-array para grandes recintos',
            'Pantallas LED indoor/outdoor alta resolución',
            'Totems LED y Booths DJ LED personalizados',
            'Pantallas Smart TV para eventos corporativos',
            'Iluminación con moving heads y beams',
            'Diseño lumínico y shows de luz',
            'Neon Party: ambientación con efectos UV',
            'Ingeniería de sonido en vivo',
        ],
    },
    {
        id: 'artistas',
        path: '/artistas',
        icon: '🎤',
        title: 'Artistas',
        short: 'Artistas nacionales e internacionales, bandas y actos en vivo para tu producción.',
        heroImg: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80',
        items: [
            'Artistas nacionales e internacionales',
            'Bandas en vivo para conciertos y festivales',
            'Shows para 15 años y matrimonios',
            'Actos especiales para fiestas privadas',
            'Artistas para eventos institucionales',
            'Coordinación de rider técnico y hospitalidad',
            'Producción completa del espectáculo',
            'Contactos con agencias de representación',
        ],
    },
    {
        id: 'ingenieria',
        path: '/ingenieria',
        icon: "📐",
        title: 'Ingeniería Técnica',
        short: 'Diseño de montajes, soporte técnico y producción integral de infraestructura.',
        heroImg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        items: [
            'Diseño y producción de montajes escénicos',
            'Ingeniería de sistemas de audio y video',
            'Soporte técnico en sitio durante el evento',
            'Alquiler de estructuras y mobiliario',
            'Infraestructura para grandes producciones',
            'Conferencias, ruedas de prensa y seminarios',
            'Activación punto de venta y lanzamientos',
            'Conversatorios y eventos institucionales',
        ],
    },
    {
        id: 'djs',
        path: '/djs',
        icon: '🎧',
        title: 'DJs Profesionales',
        short: 'Jimmy DJ y equipo — formato abierto, retro, disco, silent party, VeeJay.',
        heroImg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
        items: [
            'Jimmy DJ — Formato Abierto, Retro Disco Dance',
            'Certificación SENA Avanzado en audio y luces',
            'Dee Jay Canal Capital y Pioneer Colombia',
            'Silent Party — pionero en Colombia',
            'Roller Disco y Visual E-Motion',
            'Retro Dance con ediciones propias',
            'Residencias en bares y restaurantes',
            'Gerente de ASODJColombia desde 2025',
        ],
    },
]

export const EVENT_TYPES = [
    {
        id: 'privados',
        label: 'Privados',
        icon: '🎉',
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=70',
        items: ['Fiestas temáticas', '15 Años', 'Matrimonios', 'Neon Party', 'Karaoke', 'Retro', 'VeeJay'],
    },
    {
        id: 'institucionales',
        label: 'Institucionales',
        icon: '🏢',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=70',
        items: ['Conferencias', 'Ruedas de prensa', 'Activación PDV', 'Lanzamiento de producto', 'Conversatorios', 'Seminarios'],
    },
    {
        id: 'masivos',
        label: 'Masivos',
        icon: '🎸',
        img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=70',
        items: ['Conciertos', 'Ferias', 'Festivales', 'Eventos culturales', 'Grandes producciones'],
    },
]

export const GALLERY_IMGS = [
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75', alt: 'Evento con pantallas LED' },
    { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=75', alt: 'Concierto con iluminación' },
    { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=75', alt: 'DJ en acción' },
    { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=75', alt: 'Festival de música' },
    { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=75', alt: 'Boda con iluminación' },
    { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=75', alt: 'Evento corporativo' },
    { url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=75', alt: 'Show en vivo' },
    { url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=75', alt: 'Producción musical' },
]