import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';


import { PagnohayComponent } from './comun/pagnohay/pagnohay.component';


const appRutas: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', component: PagnohayComponent}
];

export const APP_RUTAS = RouterModule.forRoot( appRutas, { useHash: true } );
