import {Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'; // class="highlight"
import {MetaService, PageMeta} from './core/meta.service';
import {filter, map} from 'rxjs';
import {routeTransition} from './core/route-animations';

// ASÍ ESTÁ AHORA (Standalone)
@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  animations: [routeTransition]
})
export class AppComponent implements  OnInit{
  mostrarScrollTop: boolean = false;
  title = 'msgroup';
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarScrollTop = window.scrollY > 200;
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService
  ) {}

  ngOnInit(): void {
    // Escucha cada cambio de página exitoso
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        // Busca en los hijos de la ruta hasta encontrar los metadatos de SEO
        while (child?.firstChild) {
          child = child.firstChild;
        }
        return child?.snapshot.data['seo'] as PageMeta | undefined;
      })
    ).subscribe((seoData) => {
      if (seoData) {
        // Ejecuta tu servicio automáticamente
        this.metaService.setMeta(seoData);
      }
    });
  }


}
