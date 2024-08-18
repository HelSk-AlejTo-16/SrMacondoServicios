import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccederComponent } from './componentes/acceder/acceder.component';
import { Error404Component } from './componentes/error404/error404.component';

const routes: Routes = [
  {
    path:'super-admin',
    loadChildren:() => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule),
  },
  {
    path:'sr-macondo',
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule),
    //component: HomeModule
  },
  {
    path:'empleado',
    loadChildren:() => import('./empleado-p/empleado-p.module').then(m => m.EmpleadoPModule)
    //component: HomeModule
  },
  {
    path: 'acceder',
    component: AccederComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'sr-macondo',
    pathMatch: 'full'

  },
  {
    path :'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
