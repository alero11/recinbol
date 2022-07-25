import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenidoModule } from './modules/contenido/contenido.module';
import { AppRoutes } from './app.routes';
import { NavbarMenuComponent } from './principal/navbar-menu/navbar-menu.component';
import { FooterComponent } from './principal/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    FooterComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    ContenidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
