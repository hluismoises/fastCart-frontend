import { Producto } from './Producto';

export class CartItem {
  constructor(public producto: Producto) {}
  cantidad: number = 1;
  precio: number = this.producto.precio;
}
