import { Component, OnInit } from '@angular/core';
import { FiltroCitasPacientePipe } from './filtro-citas-paciente.pipe';
import { Time } from '@angular/common';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent{

  citasPaciente: FiltroCitasPacientePipe[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'email', 'telefono', 'fechaNacimiento', 'direccion', 'ciudad', 'codigoPostal', 'pais', 'dni', 'acciones'];

  citas: any[] = [];


  horas: Array<string> = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30','12:00','12:30','13:00','13:30','14:00','14:30'];

  fecha = new Date();
  hoy = this.fecha.getFullYear() + "-" + (this.fecha.getMonth() + 1) + "-" + this.fecha.getDate();

  fechaFiltro: string = '';
   // Añade esta línea para almacenar la fecha de filtro
  filtrar(){

    if (this.fechaFiltro) {
      this.citasPaciente = this.citas.filter(cita => cita.fecha_cita === this.fechaFiltro);
    } else {
      this.citasPaciente = this.citas;
    }

  }

  pedirCita(){

    // Lógica para enviar la solicitud de cita a la base de datos utilizando el servicio de Cita
    /* this.citaService.pedirCita().subscribe(
      (response) => {
        console.log(response);
        alert("Cita solicitada con éxito");
      },
      (error) => {
        console.log(error);
        alert("Error al solicitar la cita");
      }
    );
 */
  }


  limpiarCampos() {


    (<HTMLInputElement>document.getElementById("num_ss")).value = "";
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
    (<HTMLInputElement>document.getElementById("apellido1")).value = "";
    (<HTMLInputElement>document.getElementById("apellido2")).value = "";
    (<HTMLInputElement>document.getElementById("fecha_cita")).value = "";
    (<HTMLInputElement>document.getElementById("hora_cita")).value = "";


    alert("Campos Limpiados");
  }


  constructor() { }





}
