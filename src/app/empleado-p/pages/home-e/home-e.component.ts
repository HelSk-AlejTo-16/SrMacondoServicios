import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../../interfaces/sucursal';
import { SucursalService } from '../../../services/sucursal.service';
import { NotasService } from '../../../services/nota.service';
import { Notas } from '../../../interfaces/notas';

@Component({
  selector: 'app-home-e',
  templateUrl: './home-e.component.html',
  styles: ``
})
export class HomeEComponent implements OnInit {
  
  ListSucursal: Sucursal[] = []
  constructor(
    private _sucursalService: SucursalService,
    private _notasService: NotasService
  ) { }
  ngOnInit(): void{
   
    this.getListNota();
    this.getListSucursal();
      }
      getListSucursal(){
        this._sucursalService.getListSucursal().subscribe((data:Sucursal[])=> {
          this.ListSucursal = data;
      })
  }
  ListNotas: Notas[] = []
  getListNota() {
    this._notasService.getListNotas().subscribe((data: Notas[]) => {
      this.ListNotas = data;
    });
  }

  deleteNota(id: number) {
    this._notasService.deleteNota(id).subscribe(() => {
      this.getListNota();
    });
  }
  }

