import { Routes, RouterModule } from '@angular/router';

import { PagcontComponent } from './pagcont.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagsRutas: Routes = [
    {
        path: '',
        component: PagcontComponent,
        children: [
            {path: 'escritorio', component: EscritorioComponent},
            {path: 'progreso', component: ProgresoComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/escritorio', pathMatch: 'full'}
        ]
    }
];

export const PAGS_RUTAS = RouterModule.forChild(pagsRutas);
