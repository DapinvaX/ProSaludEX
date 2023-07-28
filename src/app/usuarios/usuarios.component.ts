import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

  tipoUsuario: string;



  constructor() {

    this.tipoUsuario = "medico";
    this.tipoUsuario = "paciente";

   }

}
