import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CollectionCentersComponent } from './components/collection-centers/collection-centers.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    WhoAreWeComponent,
    ContactUsComponent,
    CollectionCentersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
