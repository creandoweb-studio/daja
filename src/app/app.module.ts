import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { LoginComponent } from './pages/login/login.component';
import { Contenido2Component } from './components/contenido2/contenido2.component';
import { Contenido3Component } from './components/contenido3/contenido3.component';
import { Contenido4Component } from './components/contenido4/contenido4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContenidoComponent,
    LoginComponent,
    Contenido2Component,
    Contenido3Component,
    Contenido4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
