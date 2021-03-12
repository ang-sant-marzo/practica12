import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any = [];
  private contador = new Subject<any>()

  constructor() { }

  addProducto (producto: any): void {
    this.productos.push(producto);
    this.contador.next({numeroProductos: this.productos.length})
  }

  getNumeroProductos(): Observable<any> {
    return this.contador.asObservable();
  }

}
// 