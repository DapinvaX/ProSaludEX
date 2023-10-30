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
