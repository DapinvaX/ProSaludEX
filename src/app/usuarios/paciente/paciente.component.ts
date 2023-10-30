import { Component, OnInit } from '@angular/core';
import { FiltroCitasPacientePipe } from './filtro-citas-paciente.pipe';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  citasPaciente: FiltroCitasPacientePipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  nombre : string = '';
  apellido1 : string = '';
  apellido2 : string = '';
  fecha_cita: String = '';
  hora_cita: String = '';
  motivo: String = '';
  tratamiento: String = '';

  columnaOrdenada: string = '';
  ordenarPor(columna: string) {
    // Lógica para ordenar la tabla por la columna seleccionada
    this.columnaOrdenada = columna;
  }


  //Rellenar tabla pacientes con los datos del paciente logueado
  rellenarTablaPacientes(paciente: any) {
    this.nombre = paciente.nombre;
    this.apellido1 = paciente.apellido1;
    this.apellido2 = paciente.apellido2;
  }

}
