import { NgModule } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { RamaComponent } from './rama/rama.component';
import { PagnohayComponent } from './pagnohay/pagnohay.component';


@NgModule({
    declarations: [
        CabeceraComponent,
        BarralateralComponent,
        RamaComponent,
        PagnohayComponent
    ],
    exports: [
        CabeceraComponent,
        BarralateralComponent,
        RamaComponent,
        PagnohayComponent
    ]
})

export class ComunModule { }
