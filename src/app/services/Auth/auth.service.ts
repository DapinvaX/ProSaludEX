import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(email: string, password: string): boolean {
    // Simula la autenticación en el frontend. En un entorno real, llamaría a un servicio externo.
    if (email === 'usuario@example.com' && password === 'contraseña') {
      this.loggedIn = true;
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }


}
