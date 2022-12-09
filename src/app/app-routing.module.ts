import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/pages/carrito/carrito.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductoDetalleComponent } from './components/pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'empresa/:empresa', component: HomeComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'cart', component: CarritoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
