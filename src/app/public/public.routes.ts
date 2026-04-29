import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

export const publicRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
        {path: "", loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)},
    ]
  }
];