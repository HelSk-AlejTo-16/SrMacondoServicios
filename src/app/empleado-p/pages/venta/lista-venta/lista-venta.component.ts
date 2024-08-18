import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../../interfaces/venta';
import { VentaService } from '../../../../services/venta.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-lista-venta',
  templateUrl: './lista-venta.component.html',
  styles: ``
  
})
export class ListaVentaComponent implements OnInit{
  ListVenta: Venta[] = []
    

  constructor(private _ventaService: VentaService,
    private _snackBar:MatSnackBar
  ){

  }
  ngOnInit(): void{
this.getListVentas();
  }
  getListVentas(){
  
   
      this._ventaService.getListVentas().subscribe((data:Venta[])=> {
        this.ListVenta = data;
       
        })


  }
  deleteVentas(id: number){
    
    this._ventaService.deleteVenta(id).subscribe(data =>{
      console.log(data)
      this.getListVentas();
      this._snackBar.open('Venta borrada con exito','Cerrar',{
        duration: 2000,
      });
      
    })
  }

}
