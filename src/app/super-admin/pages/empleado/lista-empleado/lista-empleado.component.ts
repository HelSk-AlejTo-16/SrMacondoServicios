import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styles: ``
})
export class ListaEmpleadoComponent implements OnInit{

  //Creamos un array para listar a los empleados
  listEmpleado: Empleado[] = [
    {id: 1, nombreCompleto: 'Camila Romero Juarez', telefono: '4461183428', email: 'camilarj@gmail.com', rol: 1, sucursal: 2 },
    {id: 2, nombreCompleto: 'Rene Alvarado Mendez', telefono: '4182345678', email: 'reneam@gmail.com', rol: 4, sucursal: 2 }
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}
