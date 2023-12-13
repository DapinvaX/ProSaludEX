import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  email: string = '';
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  tipoUsuario : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  

}
