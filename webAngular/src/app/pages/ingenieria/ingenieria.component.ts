import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MetaService } from '../../core/meta.service';

interface CategoriaTecnica {
  id: string;
  icon: string;
  titulo: string;
  items: string[];
}

interface FotoGaleria {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-ingenieria',
  standalone: false,
  templateUrl: './ingenieria.component.html',
  styleUrl: './ingenieria.component.scss',
})
export class IngenieriaComponent implements OnInit {
  readonly heroImg = 'https://res.cloudinary.com/dzueiucg9/image/upload/w_1200,q_80,f_auto/ChatGPT_Image_11_ago_2026_12_05_37_p.m._z0ysd7.png';
  private readonly whatsappNumber = '573132892628';

  // Mismos 8 ítems originales, agrupados en 3 categorías (sin agregar contenido nuevo)
  readonly servicios: CategoriaTecnica[] = [
    {
      id: 'montajes',
      icon: 'fa-solid fa-toolbox',
      titulo: 'Montajes & Estructuras',
      items: [
        'Diseño y producción de montajes escénicos',
        'Alquiler de estructuras y mobiliario',
        'Infraestructura para grandes producciones',
      ],
    },
    {
      id: 'tecnico',
      icon: 'fa-solid fa-headset',
      titulo: 'Audio & Soporte Técnico',
      items: [
        'Ingeniería de sistemas de audio y video',
        'Soporte técnico en sitio durante el evento',
        'Ingeniero VJ (visual)'
      ],
    },
    {
      id: 'produccion',
      icon: 'fa-solid fa-bullhorn',
      titulo: 'Producción de Eventos',
      items: [
        'Conferencias, ruedas de prensa y seminarios',
        'Activación punto de venta y lanzamientos',
        'Conversatorios y eventos institucionales',
      ],
    },
  ];

  // Barras del "ecualizador" 3D del hero (decorativo)
  readonly eqBars = Array.from({ length: 22 });

  readonly fotos: FotoGaleria[] = [
    {
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
      alt: 'Consola de audio profesional',
    },
    {
      url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      alt: 'Montaje técnico en concierto',
    },
    {
      url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
      alt: 'Estructura y truss para iluminación',
    },
    {
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      alt: 'Armado de escenario',
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      alt: 'Soporte técnico durante evento corporativo',
    },
    {
      url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
      alt: 'Ingeniería de sonido en vivo',
    },
  ];

  tabActiva: string = 'montajes';
  servicioActivo: CategoriaTecnica | null = null;

  private tilt = { rx: 0, ry: 0 };
  heroActive = false;

  private btnOffset = { x: 0, y: 0 };
  private btnHover = false;

  private selectedKeys = new Set<string>();

  constructor(
    private metaService: MetaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Ingeniería Técnica — MS Group',
      description: 'Diseño de montajes, soporte técnico e infraestructura para eventos en Colombia. Producción integral con más de 20 años de experiencia.',
      keywords: 'ingeniería eventos, montajes escénicos, soporte técnico, producción eventos colombia',
    });
  }

  get heroStyle(): object {
    return {
      'background-image': `url(${this.heroImg})`,
      'background-size': 'cover',
      'background-position': 'center',
    };
  }

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }



  get sceneStyle(): object {
    return {
      transform: `rotateX(${this.tilt.rx}deg) rotateY(${this.tilt.ry}deg)`,
    };
  }

  // --- Botón magnético del hero -------------------------------------------

  onBtnMove(event: MouseEvent): void {
    this.btnHover = true;
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    this.btnOffset = {
      x: (event.clientX - rect.left - rect.width / 2) * 0.25,
      y: (event.clientY - rect.top - rect.height / 2) * 0.25,
    };
  }

  onBtnLeave(): void {
    this.btnHover = false;
    this.btnOffset = { x: 0, y: 0 };
  }

  get btnStyle(): object {
    const scale = this.btnHover ? 1.04 : 1;
    return {
      transform: `translate(${this.btnOffset.x}px, ${this.btnOffset.y}px) scale(${scale})`,
    };
  }

  // --- Tabs y modal ---------------------------------------------------------

  get servicioActivoTab(): CategoriaTecnica {
    return this.servicios.find((s) => s.id === this.tabActiva) ?? this.servicios[0];
  }

  cambiarTab(id: string): void {
    this.tabActiva = id;
  }

  abrirModal(servicio: CategoriaTecnica): void {
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

  // --- Selección de ítems para cotizar -----------------------------------

  private key(servicioId: string, index: number): string {
    return `${servicioId}::${index}`;
  }

  isSelected(servicioId: string, index: number): boolean {
    return this.selectedKeys.has(this.key(servicioId, index));
  }

  toggleItem(servicioId: string, index: number): void {
    const key = this.key(servicioId, index);
    if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }
  }

  isServicioFullySelected(servicio: CategoriaTecnica): boolean {
    return servicio.items.every((_, i) => this.isSelected(servicio.id, i));
  }

  toggleAllInServicio(servicio: CategoriaTecnica): void {
    const allSelected = this.isServicioFullySelected(servicio);
    servicio.items.forEach((_, i) => {
      const key = this.key(servicio.id, i);
      if (allSelected) {
        this.selectedKeys.delete(key);
      } else {
        this.selectedKeys.add(key);
      }
    });
  }

  clearSelection(): void {
    this.selectedKeys.clear();
  }

  get selectedCount(): number {
    return this.selectedKeys.size;
  }

  get whatsappUrl(): string {
    if (this.selectedKeys.size === 0) {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
        'Hola! Me interesa cotizar Ingenieria Tecnica para mi evento.'
      )}`;
    }

    const bloques: string[] = [];
    for (const servicio of this.servicios) {
      const elegidos = servicio.items.filter((_, i) => this.isSelected(servicio.id, i));
      if (elegidos.length) {
        bloques.push(`${servicio.titulo}:\n- ${elegidos.join('\n- ')}`);
      }
    }

    const mensaje = `Hola! Me interesa cotizar Ingeniería Técnica para mi evento, puntualmente:\n\n${bloques.join('\n\n')}`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  }
}
