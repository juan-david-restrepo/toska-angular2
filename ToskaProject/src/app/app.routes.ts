import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Contrasena } from './contrasena/contrasena';
import { Explorar } from './explorar/explorar';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'registro', component: Registro},
    {path: 'contrasena', component: Contrasena},
    {path: 'explorar', component: Explorar},

];
