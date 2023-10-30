import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPacientes'
})

export class FiltroPacientesPipe implements PipeTransform {

  //FiltroPacientesPipe
  transform(value: any, args?: any): any {
    return null;
  }

}
