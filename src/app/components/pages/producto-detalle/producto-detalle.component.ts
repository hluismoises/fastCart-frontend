import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/shared/models/Producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent implements OnInit {
  producto!: Producto;
  constructor(
    activatedRoute: ActivatedRoute,
    productoService: ProductoService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        productoService.getProductoId(params.id).subscribe((serverProducto) => {
          this.producto = serverProducto;
        });
        console.log('Producto..', this.producto);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.producto);
    this.router.navigateByUrl('/cart');
    console.log('Producto..', this.producto);
  }
}

/* function changeImage(element) {

  var main_prodcut_image = document.getElementById('main_product_image');
  main_prodcut_image.src = element.src;
  

} */
