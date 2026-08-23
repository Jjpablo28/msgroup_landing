import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { MetaService } from '../../core/meta.service';
import {isPlatformBrowser} from '@angular/common';

interface ServicioAdicional {
  id: string;
  icon: string;
  titulo: string;
  descripcion: string;
  items: string[];
  color: string;
  expanded: boolean;
}

@Component({
  selector: 'app-djs',
  standalone: false,
  templateUrl: './djs.component.html',
  styleUrl: './djs.component.scss',
})
export class DjsComponent implements OnInit {
  readonly heroImg = 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80';
  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20servicios%20adicionales%20para%20mi%20evento.';

  servicioActivo: ServicioAdicional | null = null;
  tabActiva: string = 'todos';

  readonly tabs = [
    { id: 'todos',           label: 'Todos' },
    { id: 'gastronomia',     label: 'Gastronomía' },
    { id: 'escenografia',    label: 'Escenografía' },
    { id: 'logistica',       label: 'Logística' },
    { id: 'entretenimiento', label: 'Entretenimiento' },
  ];

  readonly servicios: ServicioAdicional[] = [
    {
      id: 'catering',
      icon: 'fa-solid fa-utensils',
      titulo: 'Catering & Banquetes',
      descripcion: 'Servicio gastronómico completo para tu evento. Desde cócteles hasta banquetes formales.',
      color: '#E67E22',
      expanded: false,
      items: [
        'Menús personalizados según el tipo de evento',
        'Buffet completo para eventos masivos',
        'Estaciones de comida temática',
        'Servicio de bar y bebidas',
        'Personal de servicio uniformado',
        'Vajilla y cristalería de lujo',
      ],
    },
    {
      id: 'tarimas',
      icon: 'fa-solid fa-person-walking-arrow-right',
      titulo: 'Tarimas & Escenarios',
      descripcion: 'Estructuras profesionales para conciertos, presentaciones y eventos masivos.',
      color: '#8E44AD',
      expanded: false,
      items: [
        'Tarimas modulares de distintos tamaños',
        'Escenarios con pasarela tipo runway',
        'Estructuras de truss para iluminación',
        'Montaje y desmontaje incluido',
        'Ingeniería estructural certificada',
        'Cubierta tipo carpa para exteriores',
      ],
    },
    {
      id: 'decoracion',
      icon: 'fa-solid fa-wand-magic-sparkles',
      titulo: 'Ambientación',
      descripcion: 'Transformamos cualquier espacio en el ambiente perfecto para tu celebración.',
      color: '#E91E8C',
      expanded: false,
      items: [
        'Photobooth y zonas de fotos',
        'Iluminación ambiental decorativa',
      ],
    },
    {
      id: 'transporte',
      icon: 'fa-solid fa-van-shuttle',
      titulo: 'Transporte & Logística',
      descripcion: 'Coordinación de transporte y logística para equipos, artistas e invitados.',
      color: '#27AE60',
      expanded: false,
      items: [
        'Transporte de equipos técnicos',
        'Transporte para montaje de escenografía',
        'Logística de carga y descarga',

      ],
    },
    {
      id: 'entretenimiento',
      icon: 'fa-solid fa-masks-theater',
      titulo: 'Entretenimiento Especial',
      descripcion: 'Acts especiales y entretenimiento único para sorprender a tus invitados.',
      color: '#F39C12',
      expanded: false,
      items: [
        'Shows de magia y circo',
        'Bailarines y acróbatas',
        'Personajes animados para eventos infantiles',
        'Transmisión en vivo streaming',
        'Karaoke profesional con pantalla LED',
        'Shows de fuego y efectos especiales',
      ],
    },

  ];

  get serviciosFiltrados(): ServicioAdicional[] {
    if (this.tabActiva === 'todos') return this.servicios;
    const mapa: Record<string, string[]> = {
      gastronomia:     ['catering'],
      escenografia:    ['tarimas', 'decoracion'],
      logistica:       ['transporte'],
      entretenimiento: ['entretenimiento'],
    };
    return this.servicios.filter(s => (mapa[this.tabActiva] || []).includes(s.id));
  }



  constructor(
    private metaService: MetaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Servicios Adicionales — MS Group',
      description: 'Catering, tarimas, decoración, transporte, entretenimiento y mobiliario para tu evento en Colombia.',
      keywords: 'catering eventos, tarimas bogotá, decoración eventos, transporte eventos, entretenimiento colombia',
    });
  }

  get heroStyle(): object {
    return {
      'background-image': `url(${this.heroImg})`,
      'background-size': 'cover',
      'background-position': 'center',
    };
  }

  cambiarTab(id: string): void {
    this.tabActiva = id;
  }

  abrirModal(servicio: ServicioAdicional): void {
    this.servicioActivo = servicio;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      // Mueve el modal al body
      setTimeout(() => {
        const modal = document.querySelector('.modal-overlay') as HTMLElement;
        if (modal) document.body.appendChild(modal);
      }, 0);
    }
  }

  cerrarModal(): void {
    this.servicioActivo = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  getWaLink(titulo: string): string {
    return `https://wa.me/573132892628?text=${encodeURIComponent('Hola! Me interesa cotizar: ' + titulo)}`;
  }
}
