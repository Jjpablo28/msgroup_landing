import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MetaService } from '../../core/meta.service';

interface Categoria {
  id: string;
  label: string;
  descripcion: string;
  icon: string;
  equipos: Equipo[];
}

interface Equipo {
  nombre: string;
  detalle: string;
  tag: string;
}

@Component({
  selector: 'app-sonido',
  standalone: false,
  templateUrl: './sonido.component.html',
  styleUrl: './sonido.component.scss',
})
export class SonidoComponent implements OnInit {

  readonly heroImg = 'https://res.cloudinary.com/ofho0pt4/image/upload/w_1200,q_80,f_auto/1_ChatGPT_Image_11_ago_2026_11_10_16_a.m..png';

  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20Sonido%2C%20Pantallas%20e%20Iluminaci%C3%B3n.';

  categoriaActiva: string = 'sonido';
  equipoExpandido: string | null = null;

  readonly categorias: Categoria[] = [
    {
      id: 'sonido',
      label: 'Sonido',
      icon: 'fa-solid fa-wave-square',
      descripcion: 'Sistemas de audio profesional para cualquier escala de evento.',
      equipos: [
        {
          nombre: 'Line Array',
          detalle: 'Sistemas de columna para cobertura uniforme en recintos grandes. Ideal para conciertos y festivales con más de 500 personas.',
          tag: 'Grandes eventos',
        },

        {
          nombre: 'Consolas Digitales',
          detalle: 'Mesas de mezcla digitales de última generación con procesamiento en tiempo real y recall de escenas.',
          tag: 'Control',
        },
        {
          nombre: 'Subwoofers',
          detalle: 'Baja frecuencia potente y controlada para eventos que requieren impacto físico en el sonido. Cardioid o end-fire.',
          tag: 'Bajo',
        },
      ],
    },
    {
      id: 'pantallas',
      label: 'Pantallas LED',
      icon: 'fa-solid fa-tv',
      descripcion: 'Pantallas de alta resolución para visualización de contenido en cualquier ambiente.',
      equipos: [
        {
          nombre: 'LED Indoor',
          detalle: 'Pantallas para espacios cerrados con alta definición. Perfectas para conferencias, lanzamientos y eventos VIP.',
          tag: 'Interior',
        },
        {
          nombre: 'LED Outdoor ',
          detalle: 'Alta luminosidad para exteriores incluso bajo luz solar directa. Resistentes al agua y polvo.',
          tag: 'Exterior',
        },
        {
          nombre: 'Totems LED',
          detalle: 'Estructuras verticales con pantalla LED para branding y señalización en stands, ferias y puntos de venta.',
          tag: 'Branding',
        },
        {
          nombre: 'Smart TV Corporativo',
          detalle: 'Pantallas comerciales para presentaciones, directorios y señalización en eventos institucionales.',
          tag: 'Corporativo',
        },
      ],
    },
    {
      id: 'iluminacion',
      label: 'Iluminación',
      icon: 'fa-solid fa-lightbulb',
      descripcion: 'Diseño lumínico que transforma el ambiente y crea experiencias visuales únicas.',
      equipos: [
        {
          nombre: 'Moving Heads Beam',
          detalle: 'Cabezas móviles con haz de luz concentrado. Generan el efecto de rayos de luz en conciertos y discotecas.',
          tag: 'Show',
        },
        {
          nombre: 'Iluminación Exterior',
          detalle: 'Iluminación de área suave y uniforme para escenarios, tarimas y zonas de espectáculo.',
          tag: 'Escena',
        },
        {
          nombre: 'Efectos UV & Neon',
          detalle: 'Luces ultravioleta y neón para Neon Party, eventos temáticos y ambientaciones especiales con pintura reactiva.',
          tag: 'Temático',
        },
        {
          nombre: 'Programación DMX',
          detalle: 'Control sincronizado de toda la iluminación con operador técnico. Shows de luz programados al ritmo de la música.',
          tag: 'Técnico',
        },
      ],
    },
  ];

  readonly proyectos = [


    { img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_70,f_auto/v1788667825/1_ChatGPT_Image_11_ago_2026_11_10_16_a.m..png', tipo: 'Concierto' },
    { img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_70,f_auto/v1788667824/Hcienda_Salitre_02.jpg', tipo: 'Matrimonio' },
    { img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_70,f_auto/v1788667824/3_ChatGPT_Image_11_ago_2026_12_21_13_p.m..png', tipo: 'Fiesta privada' },
    { img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_70,f_auto/v1788667825/2_ChatGPT_Image_11_ago_2026_12_15_21_p.m..png', tipo: 'Corporativo' },
    { img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_70,f_auto/v1788667824/4_ChatGPT_Image_11_ago_2026_12_10_37_p.m..png', tipo: 'Cumpleaños' },
    { img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_600,q_70,f_auto/v1788667824/ChatGPT_Image_3_sept_2026_11_00_46_p.m..png', tipo: 'Quince Años' },

  ];

  get categoriaActual(): Categoria {
    return this.categorias.find(c => c.id === this.categoriaActiva)!;
  }

  constructor(
    private metaService: MetaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Sonido, Pantallas e Iluminación — MS Group',
      description: 'Arrays profesionales, pantallas LED indoor/outdoor y diseño lumínico para eventos en Colombia.',
      keywords: 'sonido profesional, pantallas LED, iluminación eventos, line array, moving heads, Colombia',
    });
  }

  get heroStyle(): object {
    return {
      'background-image': `url(${this.heroImg})`,
      'background-size': 'cover',
      'background-position': 'center',
    };
  }

  cambiarCategoria(id: string): void {
    this.categoriaActiva = id;
    this.equipoExpandido = null;
  }

  toggleEquipo(nombre: string): void {
    this.equipoExpandido = this.equipoExpandido === nombre ? null : nombre;
  }

  getWaLink(equipo: string): string {
    return `https://wa.me/573132892628?text=${encodeURIComponent('Hola! Me interesa cotizar: ' + equipo)}`;
  }
}
