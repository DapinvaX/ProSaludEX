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

  citas: any[] = [];

  filtrar(){

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


  ngOnInit(): void {



  }

}
