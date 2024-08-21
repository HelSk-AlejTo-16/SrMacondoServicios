import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myappUrl:string;
  private myapiUrl:string;


  constructor(private http:HttpClient) {
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/productos/'
  }

  getListProducts():Observable<Producto[]>{
    return this.http.get<Producto[]>( `${this.myappUrl}${this.myapiUrl}`);

  }

  deletedProduct(id: string):Observable<void>{
   return this.http.delete<void>( `${this.myappUrl}${this.myapiUrl}${id}`);

  }
  saveProduct(product:Producto):Observable<void>{
    return this.http.post<void>(`${this.myappUrl}${this.myapiUrl}`,product)
  }
  getProduct(id: string):Observable<Producto>{
    return this.http.get<Producto>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }
  updateProduct(id: string, product:Producto):Observable<void>{
    return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`,product)
  }
}
