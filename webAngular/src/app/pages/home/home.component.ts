import {Component, OnInit} from '@angular/core';
import {MetaService} from '../../core/meta.service';

interface ServiceCard {
  icon: string; // Guardará las clases de Font Awesome (ej: 'fa-solid fa-volume-high')
  title: string;
  description: string;
  path: string;
}

interface EventType {
  icon: string; // Guardará las clases de Font Awesome (ej: 'fa-solid fa-guitar')
  label: string;
  img: string;
  items: string[];
}

interface Socio {
  nombre: string;
  cargo: string;
  icon: string;
  descripcion: string;
}

interface RedSocial {
  nombre: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20MS%20Group.';

  readonly stats = [
    {number: '+ 20', label: 'Años de experiencia'},
    {number: '+ 1.000', label: 'Eventos realizados'},
  ];

  // SECCIÓN SERVICIOS: Emojis cambiados por iconos vectoriales de Font Awesome
  readonly services: ServiceCard[] = [
    {
      icon: 'fa-solid fa-volume-high', // Icono de sonido profesional
      title: 'Sonido, Pantallas e Iluminación',
      description: 'Arrays profesionales, pantallas LED y diseño lumínico para todo tipo de evento.',
      path: '/sonido',
    },
    {
      icon: 'fa-solid fa-microphone', // Icono de micrófono para artistas
      title: 'Artistas',
      description: 'Artistas nacionales e internacionales, bandas y actos en vivo para tu producción.',
      path: '/artistas',
    },
    {
      icon: 'fa-solid fa-gears', // Icono de engranajes para ingeniería técnica
      title: 'Ingeniería Técnica',
      description: 'Diseño de montajes, soporte técnico y producción integral de infraestructura.',
      path: '/ingenieria',
    },
    {
      icon: 'fa-solid fa-headphones', // Icono de audífonos para DJs
      title: 'DJs Profesionales',
      description: 'Jimmy DJ y equipo — formato abierto, retro, disco, silent party, VeeJay.',
      path: '/djs',
    },
  ];

  // TIPOS DE EVENTO: Emojis cambiados por iconos de Font Awesome
  readonly eventTypes: EventType[] = [
    {
      icon: 'fa-solid fa-champagne-glasses', // Copas brindando para eventos privados
      label: 'Privados',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_90,f_auto/ChatGPT_Image_11_ago_2026_07_59_20_a.m..png',
      items: ['Fiestas temáticas', '15 Años', 'Matrimonios', 'Neon Party', 'Karaoke', 'Retro', 'VeeJay'],
    },
    {
      icon: 'fa-solid fa-building', // Edificio para eventos institucionales
      label: 'Institucionales',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_90,f_auto/ChatGPT_Image_11_ago_2026_12_12_10_p.m..png'
      ,
      items: ['Conferencias', 'Ruedas de prensa', 'Activación PDV', 'Lanzamiento de producto', 'Conversatorios', 'Seminarios'],
    },
    {
      icon: 'fa-solid fa-guitar', // Guitarra eléctrica para masivos/conciertos
      label: 'Masivos',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_90,f_auto/P_U_2.png',
      items: ['Conciertos', 'Ferias', 'Festivales', 'Eventos culturales', 'Grandes producciones'],
    },
  ];


  socioActivo: Socio | null = null;

  readonly socios: Socio[] = [
    {
      nombre: 'MS Eventos',
      cargo: 'Dirección de Operaciones',


      icon: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_200,h_200,c_fit/logo_ms_lueree.png',

      descripcion: 'Coordina la operación integral de cada evento: cronogramas, equipos técnicos y logística en sitio, garantizando que todo salga según lo planeado.',
    },
    {
      nombre: 'Pablo Zoza',
      cargo: 'Manager - Director',

      icon: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_200,h_200,c_fit/Logo_Pablo.png' ,

      descripcion: 'Dirige la relación con clientes y artistas, asegurando que cada producción refleje la visión del evento de principio a fin.',
    },
    {
      nombre: 'Martin Fierro',
      cargo: 'Direccion de Eventos',

      icon: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_200,h_200,c_fit/martin-fierro-logo.svg',

      descripcion: 'Lidera la dirección creativa y de producción de eventos, con experiencia en formatos privados, sociales y corporativos.',
    },
    {
      nombre: 'Diego Cuervo',
      cargo: 'Dirección De Ingenieria',


      icon: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_200,h_200,c_fit/v1785041490/Logo_Diego.png',

      descripcion: 'Encabeza el área de ingeniería técnica: diseño de montajes, sonido e infraestructura para producciones de cualquier escala.',
    },
  ];

  readonly redes: RedSocial[] = [
    {
      nombre: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://instagram.com/mobilesoundeventos',
      color: '#E1306C',
    },
    {
      nombre: 'Facebook',
      icon: 'fa-brands fa-facebook',
      url: 'https://facebook.com/mobilesoundeventos',
      color: '#1877F2',
    },
    {
      nombre: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      url: 'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20MS%20Group.',
      color: '#25D366',
    },
    {
      nombre: 'Email',
      icon: 'fa-solid fa-envelope',
      url: 'mailto:comercial@msgroup.com.co',
      color: '#A8D520',
    },
  ];

  constructor(private metaService: MetaService) {
  }

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'MS Group — Producción Profesional de Eventos en Colombia',
      description: 'Más de 20 años produciendo eventos privados, institucionales y masivos. Sonido, pantallas LED, iluminación, DJs y artistas.',
      keywords: 'eventos colombia, sonido profesional, pantallas LED, iluminación, DJs, producción eventos bogotá',
    });
  }

  getWaLink(msg: string): string {
    return `https://wa.me/573132892628?text=${encodeURIComponent(msg)}`;
  }

  seleccionarSocio(socio: Socio): void {
    this.socioActivo = this.socioActivo?.nombre === socio.nombre ? null : socio;
  }
}
