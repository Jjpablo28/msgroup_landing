import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(private meta: Meta, private title: Title) {}

  setMeta(data: PageMeta): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
    // Open Graph
    this.meta.updateTag({ property: 'og:title',       content: data.title });
    this.meta.updateTag({ property: 'og:description',  content: data.description });
    this.meta.updateTag({ property: 'og:type',         content: 'website' });
    this.meta.updateTag({ property: 'og:site_name',    content: 'MS Eventos' });
  }
}
