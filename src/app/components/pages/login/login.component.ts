import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  //Obtener el FormControl como una propiedad para utilizarlo en el HTML
  //Para obtener el email: fc.email
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`);

    /* this.userService.login({email:this.fc.email.value,
       password: this.fc.password.value}).subscribe(() => {
         this.router.navigateByUrl(this.returnUrl);
       }); */
  }
}
