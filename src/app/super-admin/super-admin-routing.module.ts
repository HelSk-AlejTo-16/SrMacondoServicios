import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalSaComponent } from './pages/principal-sa/principal-sa.component';
import { LayoutSaComponent } from './pages/layout-sa/layout-sa.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutSaComponent,
    children: [
      {
        path: 'principal',
        component: PrincipalSaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
