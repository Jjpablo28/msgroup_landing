import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MetaService } from '../../core/meta.service';

export interface GalleryItem {
  url: string;
  alt: string;
  type?: 'image' | 'video';
}

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly heroImg = 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=70';

  // Referencia al contenedor del lightbox para moverlo directo a <body>.
  @ViewChild('lightboxEl') lightboxEl?: ElementRef<HTMLElement>;

  selectedIndex: number | null = null;

  private inyectarSchemaVideo(): void {

    const videoData = this.images.find(item => item.type === 'video');

    if (videoData) {

      const thumbnailUrl = videoData.url.replace(/\.mp4$/i, '.jpg');

      const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": videoData.alt, // "Evento Privado"
        "description": "Video de evento privado producido por MS Group.",
        "thumbnailUrl": [ thumbnailUrl ],
        "uploadDate": "2026-08-31T08:00:00-05:00", // Actualiza con la fecha real si la tienes
        "contentUrl": videoData.url
      };

      this.metaService.setJsonLd(videoSchema);
    }
  }

  readonly images: GalleryItem[] = [
    // --- EVENTOS SOCIALES Y PRIVADOS ---
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1785052106/93333ba1-b607-4799-be86-a06364242838_wnxzqk.jpg',
      alt: '15 Años - Pantalla led',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/video/upload/v1785047898/Evento_privado__leds__beams__cabezas__t%C3%B3tems__djsetlive__Somos__mobilesoundeventos_Somos__producci%C3%B3n_Somos__eventos_Somos__jimmydj_MP4_flmyer.mp4',
      alt: 'Evento Privado',
      type: 'video'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1787449859/3_ChatGPT_Image_11_ago_2026_12_21_13_p.m._kvxly1.png',
      alt: 'Evento Privado',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1785047880/web_3_zowdmq.png',
      alt: 'Matrimonio',
      type: 'image'
    },
    // --- CONCIERTOS ---
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload//w_600,q_70,f_auto/ChatGPT_Image_11_ago_2026_12_39_44_p.m._uachvk.png',
      alt: 'Concierto - array - Bingo',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/1_ChatGPT_Image_11_ago_2026_11_10_16_a.m._gb0xlo.png',
      alt: 'Concierto - Array - Estructuras - Iluminación',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/ChatGPT_Image_11_ago_2026_11_36_11_a.m._l83xhz.png',
      alt: 'Concierto - array - iluminacion',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/1_Eddie_Santiago_h5m96e.png',
      alt: 'Concierto - Montaje - Eddie Santiago',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1787449860/ChatGPT_Image_20_ago_2026_07_23_18_p.m._psuopf.png',
      alt: 'Concierto - Producción',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1788235129/IMG-20220908-WA0106_khwf5c.jpg',
      alt: 'Ingenieria de concierto',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/IMG_3661_f5p1rl.heic',
      alt: 'Ingenieria de sonido en matrimonio',
      type: 'image'
    },


    // --- EVENTOS CORPORATIVOS ---
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/IMG_0119_w1vs95.jpg',
      alt: 'Evento Empresarial',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1785052797/469dc6ef-1b3a-40b5-a6c6-6018fe41b08e_mozydl.jpg',
      alt: 'Evento corporativo - Pantalla LED - Fortaleza',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/2_ChatGPT_Image_11_ago_2026_12_15_21_p.m._epxd7y.png',
      alt: 'Evento corporativo - Sonido - Pantalla Led - Prysmian',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1785052780/12762_umzvss.jpg',
      alt: 'Evento corporativo - Sonido para musicos - Cruz Roja',
      type: 'image'
    },




    // --- PRODUCCIÓN GENERAL, MONTAJES Y ARTISTAS ---
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/ChatGPT_Image_27_ago_2026_10_37_35_p.m._d2ldix.png',
      alt: 'Evento - Pantallas led - Iluminación - Martin Fierro',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1787449860/ChatGPT_Image_11_ago_2026_07_59_20_a.m._ewjfug.png',
      alt: 'Evento - Producción',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1787449656/IMG_5099_oqhzfg.heic',
      alt: 'Montaje pantallas escenario - Banda Rock - Producción',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1787449860/ChatGPT_Image_11_ago_2026_12_05_37_p.m._z0ysd7.png',
      alt: 'Producción de Eventos',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/IMG_8837_tv93xp.heic',
      alt: 'Puesto de mando pantalla led',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_600,q_70,f_auto/v1787449860/ChatGPT_Image_13_ago_2026_11_35_02_a.m._lf5hv8.png',
      alt: 'Artistas - Banda',
      type: 'image'
    }
  ];

  constructor(
    private metaService: MetaService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Galería — MS Group',
      description: 'Galería de eventos producidos por MS Group en Colombia. Conciertos, matrimonios, eventos corporativos y más.',
      keywords: 'galería eventos colombia, fotos eventos, producción eventos fotos',
    });
    this.inyectarSchemaVideo();
  }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId) && this.lightboxEl) {
      this.renderer.appendChild(document.body, this.lightboxEl.nativeElement);
    }
  }

  ngOnDestroy(): void {
    // Por si el componente se destruye con el lightbox abierto, liberamos el scroll del body.
    this.unlockScroll();

    if (isPlatformBrowser(this.platformId) && this.lightboxEl?.nativeElement.parentNode) {
      this.lightboxEl.nativeElement.parentNode.removeChild(this.lightboxEl.nativeElement);
    }
  }

  openLightbox(index: number): void {
    this.selectedIndex = index;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const modal = document.querySelector('.lightbox-overlay') as HTMLElement || document.querySelector('.modal-overlay') as HTMLElement;
        if (modal) document.body.appendChild(modal);
      }, 0);
    }
  }

  closeLightbox(): void {
    this.selectedIndex = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  prev(): void {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }
  }

  next(): void {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (this.selectedIndex === null) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  get heroStyle(): object {
    return {
      'background-image': `url(${this.heroImg})`,
      'background-size': 'cover',
      'background-position': 'center'
    };
  }

  private lockScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  private unlockScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
