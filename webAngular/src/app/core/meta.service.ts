import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'; // Para poder acceder de forma segura al <head> de la página
import { Router } from '@angular/router';   // Para saber en qué ruta exacta está parado el usuario

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,                      // Inyectamos el enrutador
    @Inject(DOCUMENT) private document: Document // Inyectamos el DOM nativo
  ) {}

  setMeta(data: PageMeta): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    this.meta.updateTag({ property: 'og:title',       content: data.title });
    this.meta.updateTag({ property: 'og:description',  content: data.description });
    this.meta.updateTag({ property: 'og:type',         content: 'website' });
    this.meta.updateTag({ property: 'og:site_name',    content: 'MS Group' });


    const currentUrl = 'https://msgroup.com.co' + this.router.url;
    this.updateCanonicalUrl(currentUrl);
  }


  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);

    this.meta.updateTag({ property: 'og:url', content: url });
  }
}
