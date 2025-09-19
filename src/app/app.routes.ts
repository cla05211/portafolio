import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {path: "home", loadComponent: ()=> import ('./pages/home/home.component') .then ((archivo) => archivo.HomeComponent),  data: { animation: 'home' }},
    {path: "proyectos", loadComponent: ()=> import ('./pages/proyectos/proyectos.component') .then ((archivo) => archivo.ProyectosComponent),  data: { animation: 'proyectos' }},
    {path: "sobreMi", loadComponent: ()=> import ('./pages/sobre-mi/sobre-mi.component') .then ((archivo) => archivo.SobreMiComponent),  data: { animation: 'sobreMi' }},
    {path: "", redirectTo: "home", pathMatch: 'full'},
];    