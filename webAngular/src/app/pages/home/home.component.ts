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
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=70',
      items: ['Fiestas temáticas', '15 Años', 'Matrimonios', 'Neon Party', 'Karaoke', 'Retro', 'VeeJay'],
    },
    {
      icon: 'fa-solid fa-building', // Edificio para eventos institucionales
      label: 'Institucionales',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=70',
      items: ['Conferencias', 'Ruedas de prensa', 'Activación PDV', 'Lanzamiento de producto', 'Conversatorios', 'Seminarios'],
    },
    {
      icon: 'fa-solid fa-guitar', // Guitarra eléctrica para masivos/conciertos
      label: 'Masivos',
      img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=70',
      items: ['Conciertos', 'Ferias', 'Festivales', 'Eventos culturales', 'Grandes producciones'],
    },
  ];


  readonly socios: Socio[] = [
    {
      nombre: 'MS Eventos',
      cargo: 'Director',
      icon: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_200,h_200,c_fit/v1785043160/logo_ms_lueree.png',
    },
    {
      nombre: 'Pablo Zoza',
      cargo: 'Cantante',
      icon: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_200,h_200,c_fit/v1785041490/p_z_f_chnw6g.png',
    },
    {
      nombre: 'Martin Fierro',
      cargo: 'Patrocinadores',
      icon: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_200,h_200,c_fit/v1785041490/mf_fi_omwx37.png',
    },
    {
      nombre: 'Diego Cuervo',
      cargo: 'Ingenieria Audio-Visual',
      icon: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_200,h_200,c_fit/v1785041490/D_C_2_yquutt.png',
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
}
