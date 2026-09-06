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
  readonly heroImg = 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80';
  readonly heroImg = 'https://res.cloudinary.com/ofho0pt4/image/upload/c_crop,g_north_west,h_661,w_1431,q_80,f_auto/v1788666859/5_Paola_Jara.png';
  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20Artistas%20para%20mi%20evento.';

  servicioActivo: string;

  readonly servicios: Servicio[] = [
    {
      nombre: 'Artistas nacionales',
      tag: 'Talento',
      detalle:
        'Acceso directo a un roster de artistas colombianos e internacionales de distintos géneros, adaptados al tono y presupuesto de tu evento.',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_900,q_80,f_auto/v1788666859/1_Maelo_Ruiz.png',
    },
    {
      nombre: 'Bandas en vivo para conciertos y festivales',
      tag: 'En vivo',
      detalle:
        'Agrupaciones profesionales listas para escenarios grandes, con repertorio adaptable y experiencia en festivales y conciertos masivos.',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_900,q_80,f_auto/v1788233850/2_Eddie_Santiago.png',
    },
    {
      nombre: 'Shows para 15 años y matrimonios',
      tag: 'Social',
      detalle:
        'Puesta en escena pensada para momentos íntimos y celebraciones familiares, cuidando cada detalle desde la entrada hasta el cierre.',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_900,q_80,f_auto/v1788666859/3_Mau_Y_Ricky.png',
    },
    {
      nombre: 'Actos especiales para fiestas privadas',
      tag: 'Privado',
      detalle:
        'Formatos exclusivos y personalizados para eventos privados, con artistas y actos pensados para sorprender a un público selecto.',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_900,q_80,f_auto/v1788666859/4_Alci_Acosta.png',
    },
    {
      nombre: 'Artistas para eventos institucionales',
      tag: 'Corporativo',
      detalle:
        'Shows y actos alineados con la imagen de marca de tu empresa, ideales para lanzamientos, aniversarios y convenciones.',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_900,q_80,f_auto/v1788666859/5_Paola_Jara.png',
    },
    {
      nombre: 'Coordinación de rider técnico y hospitalidad',
      tag: 'Logística',
      detalle:
        'Gestionamos rider técnico, camerinos, transporte y hospitalidad del artista para que la producción fluya sin contratiempos.',
      img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80',
    },
    {
      nombre: 'Producción completa del espectáculo',
      tag: 'Producción',
      detalle:
        'Desde el diseño del escenario hasta sonido, iluminación y dirección técnica: producimos el espectáculo de principio a fin.',
      img: 'https://res.cloudinary.com/ofho0pt4/image/upload/w_900,q_80,f_auto/v1788666860/6._Fulanito.png',
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
