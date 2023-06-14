import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis Import
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [

  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio'  , component: InicioComponent},
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
