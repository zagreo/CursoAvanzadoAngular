import { Routes, RouterModule } from '@angular/router';

import { EscritorioComponent } from './pags/escritorio/escritorio.component';
import { LoginComponent } from './login/login.component';
import { ProgresoComponent } from './pags/progreso/progreso.component';
import { Graficas1Component } from './pags/graficas1/graficas1.component';
import { PagnohayComponent } from './pags/pagnohay/pagnohay.component';
import { PagcontComponent } from './pags/pagcont.component';
import { RegistroComponent } from './login/registro.component';


const appRutas: Routes = [
    {
        path: '',
        component: PagcontComponent,
        children: [
            {path: 'escritorio', component: EscritorioComponent},
            {path: 'progreso', component: ProgresoComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/escritorio', pathMatch: 'full'}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', component: PagnohayComponent}
];

export const APP_RUTAS = RouterModule.forRoot( appRutas, { useHash: true } );
