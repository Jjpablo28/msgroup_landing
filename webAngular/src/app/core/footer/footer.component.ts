import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20MS%20Group.';

  readonly footerLinks: FooterLink[] = [
    { label: 'Inicio',      path: '/' },
    { label: 'Sonido',      path: '/sonido' },
    { label: 'Artistas',    path: '/artistas' },
    { label: 'Ingeniería',  path: '/ingenieria' },
    { label: 'DJs',         path: '/djs' },
    { label: 'Galería',     path: '/galeria' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
