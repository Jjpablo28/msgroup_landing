import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-sonido',
  standalone: false,
  templateUrl: './sonido.component.html',
  styleUrl: './sonido.component.scss',
})
export class SonidoComponent implements OnInit {
  readonly heroImg = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80';

  readonly whatsappUrl =
    'https://wa.me/573112240535?text=Hola!%20Me%20interesa%20cotizar%20Sonido%2C%20Pantallas%20e%20Iluminaci%C3%B3n.';

  readonly items: string[] = [
    'Arrays line-array para grandes recintos',
    'Pantallas LED indoor/outdoor alta resolución',
    'Totems LED y Booths DJ LED personalizados',
    'Pantallas Smart TV para eventos corporativos',
    'Iluminación con moving heads y beams',
    'Diseño lumínico y shows de luz programados',
    'Neon Party: ambientación completa con efectos UV',
    'Ingeniería de sonido en vivo con operador técnico',
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Sonido, Pantallas e Iluminación — MS Eventos',
      description: 'Arrays profesionales, pantallas LED indoor/outdoor y diseño lumínico para eventos en Colombia. Más de 20 años de experiencia.',
      keywords: 'sonido profesional, pantallas LED, iluminación eventos, line array, moving heads, Colombia',
    });
  }
}
