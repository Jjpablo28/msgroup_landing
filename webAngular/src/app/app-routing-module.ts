import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SonidoComponent } from './pages/sonido/sonido.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { IngenieriaComponent } from './pages/ingenieria/ingenieria.component';
import { DjsComponent } from './pages/djs/djs.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'MS Group | Sonido Profesional, Ingeniería y Eventos',
        description: 'MS Group: Soluciones integrales en sonido profesional, ingeniería audiovisual, booking de DJs y artistas en Bogotá.',
        keywords: 'msgroup, sonido profesional, djs, artistas, eventos bogota'
      }
    }
  },
  {
    path: 'sonido',
    component: SonidoComponent,
    data: {
      seo: {
        title: 'MS Group — Sonido, Pantallas e Iluminación Profesional',
        description: 'Alquiler de sistemas de sonido profesional, pantallas LED de alta definición y shows de iluminación inteligente para eventos.',
        keywords: 'sonido profesional, pantallas led, iluminacion profesional, alquiler de sonido'
      }
    }
  },
  {
    path: 'artistas',
    component: ArtistasComponent,
    data: {
      seo: {
        title: 'MS Group — Artistas y Agrupaciones en Vivo',
        description: 'Encuentra las mejores bandas, orquestas y agrupaciones musicales en vivo para hacer de tu evento un momento inolvidable.',
        keywords: 'booking de artistas, musica en vivo, agrupaciones musicales, eventos'
      }
    }
  },
  {
    path: 'ingenieria',
    component: IngenieriaComponent,
    data: {
      seo: {
        title: 'MS Group — Ingeniería Técnica y Logística',
        description: 'Producción técnica de eventos, soporte especializado, ingenieros de sonido y rigging profesional.',
        keywords: 'ingenieria tecnica, produccion audiovisual, montaje de estructuras'
      }
    }
  },
  {
    path: 'djs',
    component: DjsComponent,
    data: {
      seo: {
        title: 'MS Group — DJs Profesionales para Eventos',
        description: 'Contrata DJs profesionales de amplio recorrido para eventos corporativos, fiestas privadas y conciertos.',
        keywords: 'booking djs, djs profesionales, djs bogota, fiestas'
      }
    }
  },
  {
    path: 'galeria',
    component: GaleriaComponent,
    data: {
      seo: {
        title: 'MS Group — Galería de Proyectos y Montajes',
        description: 'Echa un vistazo a nuestros montajes reales de sonido, iluminación, pantallas y logística en diversos eventos de alto nivel.',
        keywords: 'galeria eventos, fotos eventos, produccion real, msgroup'
      }
    }
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
