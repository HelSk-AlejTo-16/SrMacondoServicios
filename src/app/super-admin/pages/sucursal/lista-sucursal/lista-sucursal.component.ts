import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../../../interfaces/sucursal';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
  styles: ``
})
export class ListaSucursalComponent implements OnInit{

  listSucursal: Sucursal[] = [
    {id: 1, sucursal: 'Pizzas', localiza: 'Cafeteria UTNG', descripcion: 'Vende pizzas'}
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}
