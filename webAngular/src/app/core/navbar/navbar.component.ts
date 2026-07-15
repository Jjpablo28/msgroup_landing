import { Component, HostListener, OnInit } from '@angular/core';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  readonly whatsappUrl =
    'https://wa.me/573112240535?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20MS%20Eventos.';

  readonly navLinks: NavLink[] = [
    { label: 'Inicio',      path: '/' },
    { label: 'Sonido',      path: '/sonido' },
    { label: 'Artistas',    path: '/artistas' },
    { label: 'Ingeniería',  path: '/ingenieria' },
    { label: 'DJs',         path: '/djs' },
    { label: 'Galería',     path: '/galeria' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
