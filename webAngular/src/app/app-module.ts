import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app'; // Asegúrate de que apunte correctamente a tu archivo app.ts o app.component.ts
import { AppRoutingModule } from './app-routing-module'; // Importamos tu módulo de rutas real

import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SonidoComponent } from './pages/sonido/sonido.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { IngenieriaComponent } from './pages/ingenieria/ingenieria.component';
import { DjsComponent } from './pages/djs/djs.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SonidoComponent,
    ArtistasComponent,
    IngenieriaComponent,
    DjsComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Cargamos tu módulo de rutas de forma clásica
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
