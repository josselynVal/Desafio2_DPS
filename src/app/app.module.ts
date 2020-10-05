import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarVisitaComponent } from './agregar-visita/agregar-visita.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VisitasComponent } from './visitas/visitas.component';
import { MenuComponent } from './menu/menu.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

// Auth service
import { AuthService } from "./services/auth.service";

//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarClienteComponent,
    AgregarVisitaComponent,
    ClientesComponent,
    VisitasComponent,
    MenuComponent,
    ModificarClienteComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService], //Agregamos a los providers el guard
  bootstrap: [AppComponent]
})
export class AppModule { }
