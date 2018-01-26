import { NgModule } from '@angular/core';

// Rutas
import { PAGS_RUTAS } from './pags.routes';

import { EscritorioComponent } from './escritorio/escritorio.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagcontComponent } from './pagcont.component';
import { ComunModule } from '../comun/comun.module';

@NgModule({
    declarations: [
        PagcontComponent,
        EscritorioComponent,
        ProgresoComponent,
        Graficas1Component
    ],
    exports: [
        PagcontComponent,
        EscritorioComponent,
        ProgresoComponent,
        Graficas1Component
    ],
    imports: [
        ComunModule,
        PAGS_RUTAS
    ]
})

export class PagsModule { }
