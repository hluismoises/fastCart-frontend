import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/pages/carrito/carrito.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlansComponent } from './components/pages/plans/plans.component';
import { ProductoDetalleComponent } from './components/pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'empresa/:empresa', component: HomeComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'cart', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
