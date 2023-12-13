import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis Import
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
/* import { UsuariosComponent } from './usuarios/usuarios.component'; */
import { MedicoComponent } from './usuarios/medico/medico.component';
import { PacienteComponent } from './usuarios/paciente/paciente.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { AdminComponent } from './usuarios/admin/admin.component';



const routes: Routes = [

  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio'  , component: InicioComponent},
 /*  { path: 'usuario', component: UsuariosComponent }, */

  //Provisional (para probar el componente). Eliminar después.
  { path: 'medico', component: MedicoComponent},
  { path: 'paciente', component: PacienteComponent},
  { path: 'administrador', component: AdminComponent},
  { path: 'recuperar-contrasena', component: ForgotPassComponent},
  { path: 'nueva-contrasena', component: NewPassComponent},
  //{ path: 'recuperar-contrasena/:token', component: ForgotPassComponent},


  //Descomentar después de crear los componentes
  /* { path: 'medico/:id', component: MedicoComponent},
  { path: 'paciente/:id', component: PacienteComponent}, */


  { path: '**', redirectTo: 'inicio'},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
