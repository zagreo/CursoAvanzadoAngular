import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_RUTAS } from './app.rutas';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagnohayComponent } from './pags/pagnohay/pagnohay.component';
import { EscritorioComponent } from './pags/escritorio/escritorio.component';
import { ProgresoComponent } from './pags/progreso/progreso.component';
import { Graficas1Component } from './pags/graficas1/graficas1.component';
import { CabeceraComponent } from './comun/cabecera/cabecera.component';
import { BarralateralComponent } from './comun/barralateral/barralateral.component';
import { RamaComponent } from './comun/rama/rama.component';
import { PagcontComponent } from './pags/pagcont.component';
import { RegistroComponent } from './login/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagnohayComponent,
    EscritorioComponent,
    ProgresoComponent,
    Graficas1Component,
    CabeceraComponent,
    BarralateralComponent,
    RamaComponent,
    PagcontComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    APP_RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
