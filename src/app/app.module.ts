import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Mis Componentes
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { RegistroComponent } from './registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { NewPassComponent } from './new-pass/new-pass.component';

//Material
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

//Componentes MDB
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

//Pipes
import { FiltroCitasPacientePipe } from './usuarios/paciente/filtro-citas-paciente.pipe';
import { FiltroPacientesPipe } from './usuarios/medico/filtro-pacientes.pipe';








@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    ServiciosComponent,
    ProfesionalesComponent,
    RegistroComponent,
    NavbarComponent,
    CarruselComponent,
    InicioComponent,
    FooterComponent,
    LoginComponent,
    FiltroCitasPacientePipe,
    FiltroPacientesPipe,
    ForgotPassComponent,
    NewPassComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    MatIconModule,
    MatDatepickerModule,


    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
