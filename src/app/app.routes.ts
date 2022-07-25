import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './modules/contenido/components/home/home.component';
import { ProductsComponent } from './modules/contenido/components/products/products.component';
import { WhoAreWeComponent } from './modules/contenido/components/who-are-we/who-are-we.component';
import { ContactUsComponent } from './modules/contenido/components/contact-us/contact-us.component';
import { CollectionCentersComponent } from './modules/contenido/components/collection-centers/collection-centers.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'whoarewe', component: WhoAreWeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'collection', component: CollectionCentersComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutes {

}
