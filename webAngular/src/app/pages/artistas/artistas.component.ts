import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../core/meta.service';

interface Servicio {
  nombre: string;
  detalle: string;
  tag: string;
  img: string;
}

@Component({
  selector: 'app-artistas',
  standalone: false,
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.scss',
})
export class ArtistasComponent implements OnInit {
  readonly heroImg = 'https://res.cloudinary.com/dzueiucg9/image/upload/c_crop,g_north_west,h_661,w_1431,q_80,f_auto/ChatGPT_Image_13_ago_2026_11_35_02_a.m._lf5hv8.png';
  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20Artistas%20para%20mi%20evento.';

  servicioActivo: string;

  readonly servicios: Servicio[] = [
    {
      nombre: 'Artistas nacionales',
      tag: 'Talento',
      detalle:
        'Acceso directo a un roster de artistas colombianos e internacionales de distintos géneros, adaptados al tono y presupuesto de tu evento.',
      img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
    },
    {
      nombre: 'Bandas en vivo para conciertos y festivales',
      tag: 'En vivo',
      detalle:
        'Agrupaciones profesionales listas para escenarios grandes, con repertorio adaptable y experiencia en festivales y conciertos masivos.',
      img: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_900,q_80,f_auto/v1788233850/1_Eddie_Santiago_h5m96e.png',
    },
    {
      nombre: 'Shows para 15 años y matrimonios',
      tag: 'Social',
      detalle:
        'Puesta en escena pensada para momentos íntimos y celebraciones familiares, cuidando cada detalle desde la entrada hasta el cierre.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80',
    },
    {
      nombre: 'Actos especiales para fiestas privadas',
      tag: 'Privado',
      detalle:
        'Formatos exclusivos y personalizados para eventos privados, con artistas y actos pensados para sorprender a un público selecto.',
      img: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_900,q_80,f_auto/v1787449860/ChatGPT_Image_11_ago_2026_12_07_16_p.m._yoppcy.png',
    },
    {
      nombre: 'Artistas para eventos institucionales',
      tag: 'Corporativo',
      detalle:
        'Shows y actos alineados con la imagen de marca de tu empresa, ideales para lanzamientos, aniversarios y convenciones.',
      img: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_900,q_80,f_auto/ChatGPT_Image_11_ago_2026_11_33_44_a.m._zgxz9s.png',
    },

    {
      nombre: 'Producción completa del espectáculo',
      tag: 'Producción',
      detalle:
        'Desde el diseño del escenario hasta sonido, iluminación y dirección técnica: producimos el espectáculo de principio a fin.',
      img: 'https://res.cloudinary.com/dzueiucg9/image/upload/w_900,q_80,f_auto/v1787449860/ChatGPT_Image_20_ago_2026_07_23_18_p.m._psuopf.png',
    },

  ];

  constructor(private metaService: MetaService) {
    this.servicioActivo = this.servicios[0].nombre;
  }

  ngOnInit(): void {
    this.metaService.setMeta({
      title: 'Artistas — MS Group',
      description:
        'Artistas nacionales e internacionales para tu evento en Colombia. Bandas, shows en vivo, coordinación técnica completa.',
      keywords: 'artistas eventos colombia, bandas en vivo, shows eventos, producción artística',
    });
  }

  get heroStyle(): object {
    return {
      'background-image': `url(${this.heroImg})`,
      'background-size': 'cover',
      'background-position': 'center',
    };
  }

  get servicioActual(): Servicio {
    return this.servicios.find(s => s.nombre === this.servicioActivo)!;
  }

  seleccionarServicio(nombre: string): void {
    this.servicioActivo = nombre;
  }

  getWaLink(nombre: string): string {
    return `https://wa.me/573132892628?text=${encodeURIComponent('Hola! Me interesa cotizar: ' + nombre)}`;
  }
}
