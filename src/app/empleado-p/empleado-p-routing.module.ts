import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeEComponent } from './pages/home-e/home-e.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';


import { ListaSucursalComponent } from './pages/sucursal-e/lista-sucursal/lista-sucursal.component';
import { ListaJuegoComponent } from './pages/juego-e/lista-juego/lista-juego.component';
import { InfoJuegoComponent } from './pages/juego-e/info-juego/info-juego.component';
import { InfoSucursalComponent } from './pages/sucursal-e/info-sucursal/info-sucursal.component';
import { InfoProductoComponent } from './pages/producto-e/info-producto/info-producto.component';
import { ListaProductoComponent } from './pages/producto-e/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './pages/producto-e/nuevo-producto/nuevo-producto.component';


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
      path:'sucursales-e',component:ListaSucursalComponent
    },
    {
      path: 'sucursal-e',component:InfoSucursalComponent
    },
    {
     path:'producto-e',component:InfoProductoComponent
    },
    {
      path:'productos-e',component:ListaProductoComponent
    },
    {path:'crear-producto-e',component:NuevoProductoComponent}
  
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
