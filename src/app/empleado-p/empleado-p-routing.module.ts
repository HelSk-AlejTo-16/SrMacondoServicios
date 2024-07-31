import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeEComponent } from './pages/home-e/home-e.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';



import { ListaSucursalComponent } from './pages/sucursal-e/lista-sucursal/lista-sucursal.component';
import { ListaJuegoComponent } from './pages/juego-e/lista-juego/lista-juego.component';
import { InfoJuegoComponent } from './pages/juego-e/info-juego/info-juego.component';
import { NuevoJuegoComponent } from './pages/juego-e/nuevo-juego/nuevo-juego.component';
import { InfoSucursalComponent } from './pages/sucursal-e/info-sucursal/info-sucursal.component';
import { NuevaSucursalComponent } from './pages/sucursal-e/nueva-sucursal/nueva-sucursal.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutPagesComponent,
    children: [
    
    {path:'home-e',component:HomeEComponent},
    {
      path: 'juegos-e',component:ListaJuegoComponent
    },
    {
     path:'juego-e',component:InfoJuegoComponent
    },
    {
      path:'nuevo-juego-e',component:NuevoJuegoComponent
    },
  
    {
      path:'sucursales-e',component:ListaSucursalComponent
    },
    {
      path: 'sucursal-e',component:InfoSucursalComponent
    },
    {
      path: 'nueva-sucursal-e',component:NuevaSucursalComponent
    }
    //path 'crearventa/:idv, component:CrearVentaComponent'
    //Uso para la base de datos(?)
    //path: ':idv', component: ventaComponent
    //path 'crearjuego/:idj', component:JuegoComponent
    //path: 'idj', component:JuegosComponent
    //path 'crearPlatillo/:id', component:PlatillosComponent
    //path: ':idp', component:NuevosPlatillosComponent
    //path ''

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoPRoutingModule { }
