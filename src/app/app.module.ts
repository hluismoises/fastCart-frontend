import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';
import { ListaEmpresasComponent } from './components/partials/lista-empresas/lista-empresas.component';
import { ProductoDetalleComponent } from './components/pages/producto-detalle/producto-detalle.component';
import { CarritoComponent } from './components/pages/carrito/carrito.component';
import { TituloComponent } from './components/partials/titulo/titulo.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './components/pages/plans/plans.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PageEditorComponent } from './components/pages/page-editor/page-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ListaEmpresasComponent,
    ProductoDetalleComponent,
    CarritoComponent,
    TituloComponent,
    NotFoundComponent,
    LoginComponent,
    PlansComponent,
    LandingComponent,
    RegisterComponent,
    CheckoutComponent,
    ProfileComponent,
    PageEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
