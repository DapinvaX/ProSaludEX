import { Component, OnInit } from '@angular/core';
import { FiltroCitasPacientePipe } from './filtro-citas-paciente.pipe';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  citasPaciente: FiltroCitasPacientePipe[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'email', 'telefono', 'fechaNacimiento', 'direccion', 'ciudad', 'codigoPostal', 'pais', 'dni', 'acciones'];


  constructor() { }


  ngOnInit(): void {



  }

}
