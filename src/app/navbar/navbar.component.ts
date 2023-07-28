import { Component, OnInit } from '@angular/core';

import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

emailFormControl: any;
hidePassword: any;
password: any;
login() {
  let password = new FormControl('', [Validators.required]);

  let hidePassword = true;

  let emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}



  /* constructor() { } */


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario válido');
      // Aquí puedes realizar acciones adicionales, como enviar los datos al backend
    } else {
      console.log('Formulario inválido');
    }
  }


}
