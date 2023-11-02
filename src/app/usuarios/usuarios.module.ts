import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoComponent } from './medico/medico.component';
import { PacienteComponent } from './paciente/paciente.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';








@NgModule({
  declarations: [

    MedicoComponent,
    PacienteComponent,


  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule



  ]
})
export class UsuariosModule { }
