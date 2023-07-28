import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {
  json = {
    "medicos": [
      {
        "id": 1,
        "num_colegiado": "123456789",
        "nombre": "Juan",
        "apellido": "Pérez",
        "apellido2": "López",
        "especialidad": "Traumatología",
        "usuario": "juan",
        "contrasena": "juan1234"
      },
      {
        "id": 2,
        "num_colegiado": "123456799",
        "nombre": "María",
        "apellido": "García",
        "apellido2": "López",
        "especialidad": "Medicina General",
        "usuario": "maria",
        "contrasena": "maria1234"
      },
      {
        "id": 3,
        "num_colegiado": "143456799",
        "nombre": "Antonio",
        "apellido": "Ramirez",
        "apellido2": "Castro",
        "especialidad": "Neurología",
        "usuario": "antonio",
        "contrasena": "antonio1234"
      },
      {
        "id": 4,
        "num_colegiado": "123556799",
        "nombre": "María",
        "apellido": "García",
        "apellido2": "López",
        "especialidad": "Neumología",
        "usuario": "maria",
        "contrasena": "maria1234"
      }
    ]
  };

  //Damos una variable al json
 profesionales = this.json.medicos;


  //Y aqui lo metemos en un array
  profesionalesArray: any[] = [this.profesionales];

  constructor() { }

  ngOnInit() {
    this.profesionales = this.profesionalesArray[0];
  }

}
