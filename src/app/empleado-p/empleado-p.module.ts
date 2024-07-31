import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoPRoutingModule } from './empleado-p-routing.module';

import { HomeEComponent } from './pages/home-e/home-e.component';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { MaterialModule } from '../material/material.module';

import { InfoSucursalComponent } from './pages/sucursal-e/info-sucursal/info-sucursal.component';
import { ListaJuegoComponent } from './pages/juego-e/lista-juego/lista-juego.component';
import { InfoJuegoComponent } from './pages/juego-e/info-juego/info-juego.component';

import { ListaSucursalComponent } from './pages/sucursal-e/lista-sucursal/lista-sucursal.component';
import { InfoProductoComponent } from './pages/producto-e/info-producto/info-producto.component';
import { ListaProductoComponent } from './pages/producto-e/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './pages/producto-e/nuevo-producto/nuevo-producto.component';





@NgModule({
  declarations: [
    
    HomeEComponent,
    LayoutPagesComponent,
    InfoSucursalComponent,
    ListaJuegoComponent,
    InfoJuegoComponent,
    ListaSucursalComponent,
    InfoProductoComponent,
    ListaProductoComponent,
    NuevoProductoComponent
    
    

   
  ],
  imports: [
    CommonModule,
    EmpleadoPRoutingModule,
    MaterialModule
  ]
})
export class EmpleadoPModule { }
