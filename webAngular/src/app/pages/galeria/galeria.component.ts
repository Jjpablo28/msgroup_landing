import { Component, OnInit } from '@angular/core';
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
export class GaleriaComponent implements OnInit {
  readonly heroImg = 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=70';

  selectedIndex: number | null = null;

  readonly images : GalleryItem[] = [
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/IMG_0119_w1vs95.jpg',
      alt: 'Evento Empresarial',
      type: 'image'
    },

    {
      url: 'https://res.cloudinary.com/dzueiucg9/video/upload/v1785047898/Evento_privado__leds__beams__cabezas__t%C3%B3tems__djsetlive__Somos__mobilesoundeventos_Somos__producci%C3%B3n_Somos__eventos_Somos__jimmydj_MP4_flmyer.mp4',
      alt: 'Evento Privado',
      type: 'video'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/IMG_3661_f5p1rl.heic',
      alt: 'Ingenieria de sonido en matrimonio',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/IMG_3675_n70n8h.jpg',
      alt: 'Orquesta - Matrimonio',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/6A706274-98FF-4B80-9EA6-85D71CB6BAF6_o4qsgq.jpg',
      alt: 'Evento Privado',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785049704/IMG_8756_h7ojpr.jpg',
      alt: 'Evento Privado 15 Años - Pantalla led- Iluminación',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785047883/WhatsApp_Image_2026-02-25_at_6.58.16_PM_ujbung.jpg',
      alt: 'Concierto - array - iluminacion',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785047880/web_3_zowdmq.png',
      alt: 'Matrimonio',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/IMG_8837_tv93xp.heic',
      alt: 'Puesto de mando pantalla led',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785051499/1A6EDE17-BB85-4512-8956-68201C892DD6_xz2w60.jpg',
      alt: 'Montaje pantalla Led Espejo',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785052071/bdd21617-e3d1-4bf9-82a1-e864b052d644_yrwoe4.jpg',
      alt: 'Novenas Navideñas',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785052106/93333ba1-b607-4799-be86-a06364242838_wnxzqk.jpg',
      alt: '15 Años',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785052797/469dc6ef-1b3a-40b5-a6c6-6018fe41b08e_mozydl.jpg',
      alt: 'Evento corporativo - Pantalla LED',
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dzueiucg9/image/upload/f_auto,q_auto,w_1600/v1785052780/12762_umzvss.jpg',
      alt: 'Evento corporativo - Sonido para musicos',
      type: 'image'
    }
  ];
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Galería — MS Group',
      description: 'Galería de eventos producidos por MS Group en Colombia. Conciertos, matrimonios, eventos corporativos y más.',
      keywords: 'galería eventos colombia, fotos eventos, producción eventos fotos',
    });
  }

  openLightbox(index: number): void {
    this.selectedIndex = index;
  }

  closeLightbox(): void {
    this.selectedIndex = null;
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
  get heroStyle(): object {
    return {
      'background-image': `url(${this.heroImg})`,
      'background-size': 'cover',
      'background-position': 'center'
    };
  }
}
