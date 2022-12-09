import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/shared/models/Producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    activatedRoute: ActivatedRoute
  ) {
    let productosObservable: Observable<Producto[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        productosObservable = this.productoService.getAllProductosSearchTerm(
          params.searchTerm
        );
      } else if (params.empresa) {
        productosObservable = this.productoService.getAllProductosEmpresa(
          params.empresa
        );
      } else {
        productosObservable = productoService.getAll();
      }

      productosObservable.subscribe((serverProductos) => {
        this.productos = serverProductos;
      });
    });
  }

  ngOnInit(): void {}
}
