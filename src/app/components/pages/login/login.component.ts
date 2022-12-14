import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    //this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    this.returnUrl = '/home';
  }

  //Obtener el FormControl como una propiedad para utilizarlo en el HTML
  //Para obtener el email: fc.email
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.message = 'Email o password incorrecto';
      return;
    }

    //alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`);

    this.userService
      .login({ email: this.fc.email.value, password: this.fc.password.value })
      .subscribe(() => {
        //this.router.navigateByUrl(this.returnUrl);
        this.router.navigateByUrl('/home');
        this.cartService.clearCart();
      });
  }
}
