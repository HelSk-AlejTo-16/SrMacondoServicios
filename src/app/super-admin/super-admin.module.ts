import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { LayoutSaComponent } from './pages/layout-sa/layout-sa.component';
import { PrincipalSaComponent } from './pages/principal-sa/principal-sa.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutSaComponent,
    PrincipalSaComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MaterialModule
  ]
})
export class SuperAdminModule { }
