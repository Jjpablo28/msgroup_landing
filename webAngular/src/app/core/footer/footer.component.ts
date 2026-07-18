import { Component } from '@angular/core';

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
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20MS%20Eventos.';

  readonly footerLinks: FooterLink[] = [
    { label: 'Inicio',      path: '/' },
    { label: 'Sonido',      path: '/sonido' },
    { label: 'Artistas',    path: '/artistas' },
    { label: 'Ingeniería',  path: '/ingenieria' },
    { label: 'DJs',         path: '/djs' },
    { label: 'Galería',     path: '/galeria' },
  ];
}
