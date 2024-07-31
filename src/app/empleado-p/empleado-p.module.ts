import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoPRoutingModule } from './empleado-p-routing.module';

import { HomeEComponent } from './pages/home-e/home-e.component';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { MaterialModule } from '../material/material.module';

import { InfoSucursalComponent } from './pages/sucursal-e/info-sucursal/info-sucursal.component';
import { ListaJuegoComponent } from './pages/juego-e/lista-juego/lista-juego.component';
import { InfoJuegoComponent } from './pages/juego-e/info-juego/info-juego.component';
import { NuevoJuegoComponent } from './pages/juego-e/nuevo-juego/nuevo-juego.component';
import { ListaSucursalComponent } from './pages/sucursal-e/lista-sucursal/lista-sucursal.component';
import { NuevaSucursalComponent } from './pages/sucursal-e/nueva-sucursal/nueva-sucursal.component';


@NgModule({
  declarations: [
    
    HomeEComponent,
    LayoutPagesComponent,
    InfoSucursalComponent,
    ListaJuegoComponent,
    InfoJuegoComponent,
    NuevoJuegoComponent,
    ListaSucursalComponent,
    NuevaSucursalComponent

   
  ],
  imports: [
    CommonModule,
    EmpleadoPRoutingModule,
    MaterialModule
  ]
})
export class EmpleadoPModule { }
