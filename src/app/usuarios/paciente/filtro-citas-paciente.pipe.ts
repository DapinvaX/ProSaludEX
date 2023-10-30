import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCitasPaciente'
})
export class FiltroCitasPacientePipe implements PipeTransform {
nombre: String = '';
apellido1: String = '';
apellido2: String  = '';
fecha_cita: String = '';
hora_cita: String = '';
motivo: String = '';
tratamiento: String = '';



  //FiltroPacientesPipe
  transform(value: any, args?: any): any {
    return null;
  }

}
