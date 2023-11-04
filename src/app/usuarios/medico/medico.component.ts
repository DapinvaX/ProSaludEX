import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {


filtrar(){

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

//Array de la tabla
displayedColumns: string[] = ['id', 'num_ss', 'nombre', 'apellido1', 'apellido2', 'fecha_cita', 'hora_cita', 'motivo', 'tratamiento', 'acciones'];


editarCita( any: any) {
  throw new Error('Method not implemented.');

}

eliminarCita(any : any) {
  throw new Error('Method not implemented.');

  

  }

  citas: any [] ;
  num_ss: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fecha_cita: string;
  hora_cita: string;

  constructor() {
    this.citas = [
      { id: 1, num_ss: '1234567890A', nombre: 'Juan', apellido1: 'Pérez', apellido2: 'García', fecha_cita: '2021-10-01', hora_cita: '10:00', motivo: 'Dolor de cabeza', tratamiento: 'Aspirina' },
      { id: 2, num_ss: '0987654321B', nombre: 'María', apellido1: 'González', apellido2: 'López', fecha_cita: '2021-10-02', hora_cita: '11:00', motivo: 'Fiebre', tratamiento: 'Paracetamol' },
      { id: 3, num_ss: '1357908642C', nombre: 'Pedro', apellido1: 'Sánchez', apellido2: 'Gómez', fecha_cita: '2021-10-03', hora_cita: '12:00', motivo: 'Dolor de garganta', tratamiento: 'Antibiótico' }
    ];
    this.num_ss = '';
    this.nombre = '';
    this.apellido1 = '';
    this.apellido2 = '';
    this.fecha_cita = '';
    this.hora_cita = '';
  }

  //Filtrar por número de seguridad social
  filtrarPorNumSS() {
    this.citas = this.citas.filter((cita) => {
      return cita.num_ss.toLowerCase().includes(this.num_ss.toLowerCase());
    });
  }

  //Filtrar por nombre
  filtrarPorNombre() {
    this.citas = this.citas.filter((cita) => {
      return cita.nombre.toLowerCase().includes(this.nombre.toLowerCase());
    });
  }

  //Filtrar por apellido 1
  filtrarPorApellido1() {
    this.citas = this.citas.filter((cita) => {
      return cita.apellido1.toLowerCase().includes(this.apellido1.toLowerCase());
    });
  }

  //Filtrar por apellido 2
  filtrarPorApellido2() {

    this.citas = this.citas.filter((cita) => {
      return cita.apellido2.toLowerCase().includes(this.apellido2.toLowerCase());
    });
  }

  //Filtrar por fecha de cita
  filtrarPorFechaCita() {
    this.citas = this.citas.filter((cita) => {
      return cita.fecha_cita.toLowerCase().includes(this.fecha_cita.toLowerCase());
    });
  }

  //Filtrar por hora de cita
  filtrarPorHoraCita() {
    this.citas = this.citas.filter((cita) => {
      return cita.hora_cita.toLowerCase().includes(this.hora_cita.toLowerCase());
    });
  }

  //Funcion para limpiar los filtros
  limpiarFiltros() {
    this.num_ss = '';
    this.nombre = '';
    this.apellido1 = '';
    this.apellido2 = '';
    this.fecha_cita = '';
    this.hora_cita = '';
  }

  //Funcion para editar una fila
  editarFila(cita: any) {
    this.citaSeleccionada = cita;
  }

  citaSeleccionada: any = null;

  eliminarFila(cita: any) {
    this.citas = this.citas.filter((cita) => {
      return cita.id !== cita.id;
    });
  }



  //Ordenar tabla
  columnaOrdenada: string = '';

  ordenarPor(columna: string) {
    // Lógica para ordenar la tabla por la columna seleccionada
    this.columnaOrdenada = columna;
  }

  ngOnInit(): void {
  }

}
