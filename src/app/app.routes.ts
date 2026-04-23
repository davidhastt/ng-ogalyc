import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'**', redirectTo: ''} 
];
