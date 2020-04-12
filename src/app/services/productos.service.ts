import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos [] = [];

  constructor( public http: HttpClient ) {

    this.cargarProductos();
  }


  cargarProductos() {

    this.http.get('https://angular-template-1ac59.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Productos[]) => {

      console.log(resp);
      this.productos = resp;

      setTimeout(() => {

        this.cargando = false;
      }, 2000);
    });
  }

  getProducto( id: string ) {

    return this.http.get(`https://angular-template-1ac59.firebaseio.com/productos/${ id }.json`);
  }

}
