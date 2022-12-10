import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  message = '';
  order: Order = new Order();
  checkoutForm!: FormGroup;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let { name, address } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required],
    });
  }

  //Obtener los elementos html con form control
  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.message = 'Porfavor revise que todos los campos esten completos';
      console.log('Porfavor revise que todos los campos esten completos');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
        this.cartService.clearCart();
      },
      error: (errorResponse) => {
        console.log('Hubo un error', errorResponse.error);
      },
    });
  }
}
