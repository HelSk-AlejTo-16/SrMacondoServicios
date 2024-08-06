import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../interfaces/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private apiUrl = 'http://localhost:3000/sucursales';

  constructor(private http: HttpClient) {}

  agregarSucursal(sucursal: Sucursal): Observable<any> {
    return this.http.post('http://localhost:3000/sucursales/addSucursal', sucursal);
  }
}
