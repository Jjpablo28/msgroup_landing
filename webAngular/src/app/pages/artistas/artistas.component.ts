import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-artistas',
  standalone: false,
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.scss',
})
export class ArtistasComponent implements OnInit {
  readonly heroImg = 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80';
  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20Artistas%20para%20mi%20evento.';

  readonly items: string[] = [
    'Artistas nacionales e internacionales',
    'Bandas en vivo para conciertos y festivales',
    'Shows para 15 años y matrimonios',
    'Actos especiales para fiestas privadas',
    'Artistas para eventos institucionales',
    'Coordinación de rider técnico y hospitalidad',
    'Producción completa del espectáculo',
    'Contactos directos con agencias de representación',
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Artistas — MS Group',
      description: 'Artistas nacionales e internacionales para tu evento en Colombia. Bandas, shows en vivo, coordinación técnica completa.',
      keywords: 'artistas eventos colombia, bandas en vivo, shows eventos, producción artística',
    });
  }
}
