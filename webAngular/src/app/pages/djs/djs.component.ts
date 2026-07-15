import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-djs',
  standalone: false,
  templateUrl: './djs.component.html',
  styleUrl: './djs.component.scss',
})
export class DjsComponent implements OnInit {
  readonly heroImg = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80';
  readonly whatsappUrl =
    'https://wa.me/573112240535?text=Hola!%20Me%20interesa%20cotizar%20un%20DJ%20para%20mi%20evento.';

  readonly directorName = 'Jimmy DJ';
  readonly directorSince = 1995;

  readonly items: string[] = [
    'Jimmy DJ — Formato Abierto, Retro Disco Dance',
    'Certificación SENA Avanzado en audio y luces',
    'Dee Jay Canal Capital y Pioneer Colombia',
    'Silent Party — pionero en Colombia',
    'Roller Disco y Visual E-Motion',
    'Retro Dance con ediciones propias en audio y video',
    'Residencias en bares y restaurantes',
    'Gerente de ASODJColombia desde 2025',
  ];

  readonly formats: string[] = [
    'Formato Abierto',
    'Retro Disco Dance',
    'Silent Party',
    'Roller Disco',
    'Visual E-Motion',
    'VeeJay',
    'Neon Party',
    'Karaoke',
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'DJs Profesionales — MS Eventos',
      description: 'Jimmy DJ y equipo. Dee Jay desde 1995, Canal Capital, Pioneer Colombia. Pionero en Silent Party, Roller Disco y Retro Dance en Colombia.',
      keywords: 'DJ profesional colombia, Jimmy DJ, silent party bogotá, retro dance, DJ eventos',
    });
  }
}
