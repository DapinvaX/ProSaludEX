import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  tipoUsuario : string;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtiene el tipo de usuario desde la autenticación o cualquier otro método
    this.tipoUsuario = 'medico'; // Ejemplo: usuario logueado como médico
  }
}
