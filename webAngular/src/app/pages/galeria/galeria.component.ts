import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../core/meta.service';

interface GalleryImage {
  url: string;
  alt: string;
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

  readonly images: GalleryImage[] = [
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75', alt: 'Evento con pantallas LED' },
    { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=75', alt: 'Concierto con iluminación' },
    { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=75', alt: 'DJ en acción' },
    { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=75', alt: 'Festival de música' },
    { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=75', alt: 'Boda con iluminación' },
    { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=75', alt: 'Evento corporativo' },
    { url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=75', alt: 'Show en vivo' },
    { url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=75', alt: 'Producción musical' },
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Galería — MS Eventos',
      description: 'Galería de eventos producidos por MS Eventos en Colombia. Conciertos, matrimonios, eventos corporativos y más.',
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
}
