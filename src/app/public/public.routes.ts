import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

export const publicRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
        {path: "", loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)},
        {path: "ediciones", loadComponent:()=> import("./ediciones/ediciones.component").then(m=>m.EdicionesComponent) },
        {path: "eje/:id_eje", loadComponent:()=> import("./eje/eje.component").then(m=>m.EjeComponent) },
    ]
  }
];