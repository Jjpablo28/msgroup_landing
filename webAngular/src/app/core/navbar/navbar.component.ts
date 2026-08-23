import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface NavLink {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  menuOpen = false;

  readonly whatsappUrl =
    'https://wa.me/573132892628?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20MS%20Group.';

  readonly navLinks: NavLink[] = [
    { label: 'Inicio',      path: '/' },
    { label: 'Producción',      path: '/sonido' },
    { label: 'Artistas',    path: '/artistas' },
    { label: 'Ingeniería',  path: '/ingenieria' },
    { label: 'Servicios',         path: '/servicios' },
    { label: 'Galería',     path: '/galeria' },
    { label: 'Quienes Somos?', path: '/', fragment: 'quienes-somos' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // Por si el componente se destruye con el menú móvil abierto.
    this.unlockScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  // Cierra el menú móvil con la tecla Escape, para quienes navegan con teclado.
  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.menuOpen ? this.lockScroll() : this.unlockScroll();
  }

  closeMenu(): void {
    if (!this.menuOpen) return;
    this.menuOpen = false;
    this.unlockScroll();
  }

  scrollTo(path: string, fragment?: string) {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  }

  private lockScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  private unlockScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
