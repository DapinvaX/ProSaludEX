import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/Auth/auth.service';

/**
 * Componente para la página de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * Formulario de inicio de sesión.
   */
  loginForm: FormGroup;

  /**
   * Constructor del componente.
   * @param formBuilder Servicio para construir formularios reactivos.
   * @param authService Servicio para autenticar al usuario.
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  /**
   * Método que se ejecuta al enviar el formulario de inicio de sesión.
   * Si el formulario es válido, se intenta autenticar al usuario con las credenciales proporcionadas.
   * Si la autenticación es exitosa, se resetea el formulario y se muestra un mensaje de éxito en la consola.
   * Si la autenticación falla, se muestra un mensaje de error en la consola.
   */
  onSubmit(): void {

    if (this.loginForm.valid) {

      const { email, password } = this.loginForm.value;
      const isAuthenticated = this.authService.login(email, password);

      if (isAuthenticated) {
        // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión.
        console.log('Inicio de sesión exitoso.');

        this.loginForm.reset();

      } else {
        console.log('Credenciales incorrectas.');
      }
    }
  }

}
