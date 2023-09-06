import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoComponent } from './medico/medico.component';
import { PacienteComponent } from './paciente/paciente.component';



@NgModule({
  declarations: [

    MedicoComponent,
    PacienteComponent

  ],
  imports: [
    CommonModule,
  ]
})
export class UsuariosModule { }
