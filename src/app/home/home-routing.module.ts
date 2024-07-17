import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AvisameComponent } from './pages/avisame/avisame.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tienda',
        component: TiendaComponent
      },
      {
        path:  'acerca-de',
        component: AcercaDeComponent
      },
      {
        path:  'avisame',
        component: AvisameComponent
      },
      {
        path:  'producto',
        component: ProductoComponent
      },
      {
        path:  'lista',
        component: ListaComponent
      },
      {
        path: '',
        redirectTo: 'tienda',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
