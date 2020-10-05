import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Imprimir todos los componentes para los que se debe activar el servicio de navegación
import { ClientesComponent } from './clientes/clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { VisitasComponent } from './visitas/visitas.component';
import { AgregarVisitaComponent } from './agregar-visita/agregar-visita.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

//para el login
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./guard/auth.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'nuevo-cliente',
    component: AgregarClienteComponent
  },
  {
    path: 'modificar-cliente',
    component: ModificarClienteComponent
  },
  {
    path: 'visitas',
    component: VisitasComponent
  },
  {
    path: 'nueva-visita',
    component: AgregarVisitaComponent
  },

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
