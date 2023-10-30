import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoComponent } from './medico/medico.component';
import { PacienteComponent } from './paciente/paciente.component';
import { FiltroPacientesPipe } from './medico/filtro-pacientes.pipe';
import { FiltroCitasPacientePipe } from './paciente/filtro-citas-paciente.pipe';



@NgModule({
  declarations: [

    MedicoComponent,
    PacienteComponent,
    FiltroPacientesPipe,
    FiltroCitasPacientePipe

  ],
  imports: [
    CommonModule,
  ]
})
export class UsuariosModule { }
