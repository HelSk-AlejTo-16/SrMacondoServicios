import { Component, OnInit } from '@angular/core';
import { Juego } from '../../../../interfaces/juego';

@Component({
  selector: 'app-lista-juego',
  templateUrl: './lista-juego.component.html',
  styles: ``
})
export class ListaJuegoComponent implements OnInit{

  listJuego: Juego[] = [
    {id: 1, juego: 'Futbolito', precio: 5, tiempo: 'Seis partidas', disponibilidad: true},
    {id: 2, juego: 'Billar', precio: 20, tiempo: 'Media hora', disponibilidad: false}
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}
