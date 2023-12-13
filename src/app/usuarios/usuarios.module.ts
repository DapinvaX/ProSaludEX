import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoComponent } from './medico/medico.component';
import { PacienteComponent } from './paciente/paciente.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [

    MedicoComponent,
    PacienteComponent,
    AdminComponent,


  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule


  ]
})
export class UsuariosModule { }
