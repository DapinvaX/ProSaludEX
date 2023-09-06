import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {

    if (this.loginForm.valid) {

      const { email, password } = this.loginForm.value;
      const isAuthenticated = this.authService.login(email, password);

      if (isAuthenticated) {
        // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión.
        console.log('Inicio de sesión exitoso.');
      } else {
        console.log('Credenciales incorrectas.');
      }
    }
  }

}
