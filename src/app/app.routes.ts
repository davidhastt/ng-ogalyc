/*
import { Routes } from '@angular/router';
import { MainComponent } from './public/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'**', redirectTo: ''} 
];
*/

import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path:'',
     loadChildren: () => import('./public/public.routes').then(m => m.publicRoutes)
  },
  /*{
    path: 'dashboard',
    loadChildren: () => import('./private/private.routes').then(m => m.privateRoutes)
  },*/{
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },{
    path:'**', redirectTo: ''
  }



];