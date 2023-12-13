import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //Recuperar los parametros del login name="inpEmail" id="inpEmail"


  private loggedIn = false;

  private typeUser : string = 'medico';

  constructor(private router: Router) {}

  //Recoger parametros del login para la autenticación


  login(email: string, password: string): boolean {
    // LLamar a php para el login

    if (email === '' && password === '') {

      this.loggedIn = true;
      //this.router.navigate(['/']);
      return true;

      if(this.typeUser == 'medico'){
        this.router.navigate(['/medico']);

    }else if(this.typeUser == 'paciente'){

      this.router.navigate(['/paciente']);

  }else if(this.typeUser == 'admin'){
        this.router.navigate(['/admin']);
  }
    }

    return false;
    console.log("Error en el inicio de sesión");
    alert("Error en el inicio de sesión");
  }

  // ...
}
/*   isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }


}
 */
