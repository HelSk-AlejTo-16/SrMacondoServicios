import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../interfaces/producto';
import { ProductoService } from '../../../../services/producto.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styles: ``
  
})
export class ListaProductoComponent implements OnInit{
  ListProducto: Producto[] = []
    

  constructor(private _productService: ProductoService,
    private _snackBar: MatSnackBar
  ){

  }
  ngOnInit(): void{
this.getListProducts();
  }
  getListProducts(){
  
   
      this._productService.getListProducts().subscribe((data:Producto[])=> {
        this.ListProducto = data;
       
        })


  }
  deleteProduct(id: string){
    
    this._productService.deletedProduct(id).subscribe(data =>{
      console.log(data)
      this.getListProducts();
      
      this._snackBar.open('Venta Eliminada con exito','Cerrar',{
        duration:3000,
      });
      
    })
  }

}
