import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-ingenieria',
  standalone: false,
  templateUrl: './ingenieria.component.html',
  styleUrl: './ingenieria.component.scss',
})
export class IngenieriaComponent implements OnInit {
  readonly heroImg = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80';
  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20Ingenieria%20Tecnica%20para%20mi%20evento.';

  readonly items: string[] = [
    'Diseño y producción de montajes escénicos',
    'Ingeniería de sistemas de audio y video',
    'Soporte técnico en sitio durante el evento',
    'Alquiler de estructuras y mobiliario',
    'Infraestructura para grandes producciones',
    'Conferencias, ruedas de prensa y seminarios',
    'Activación punto de venta y lanzamientos',
    'Conversatorios y eventos institucionales',
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Ingeniería Técnica — MS Group',
      description: 'Diseño de montajes, soporte técnico e infraestructura para eventos en Colombia. Producción integral con más de 20 años de experiencia.',
      keywords: 'ingeniería eventos, montajes escénicos, soporte técnico, producción eventos colombia',
    });
  }
}
