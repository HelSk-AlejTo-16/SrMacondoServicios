import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutSaComponent } from './pages/layout-sa/layout-sa.component';
import { PrincipalSaComponent } from './pages/principal-sa/principal-sa.component';
import { MaterialModule } from '../material/material.module';


import { NuevoNotasComponent } from './pages/notas/nuevo-notas/nuevo-mensaje.component';

import { ListaNotaComponent } from './pages/notas/listas-notas/lista-notas.component';




@NgModule({
  declarations: [
    LayoutSaComponent,
    PrincipalSaComponent,
    ListaNotaComponent,
    NuevoNotasComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }
