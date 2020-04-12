import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos[] = [];
  productosFiltrado: Productos[] = [];

  constructor(public http: HttpClient) {

    this.cargarProductos();
  }


  cargarProductos() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-template-1ac59.firebaseio.com/productos_idx.json')
        .subscribe((resp: Productos[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });

    });

  }

  getProducto(id: string) {

    return this.http.get(`https://angular-template-1ac59.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if ( this.productos.length === 0 ) {
      // Cargar productos
      this.cargarProductos().then( () => {
        // Ejecutar despues de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // Aplicar filtro
    }

  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloToLowercase = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloToLowercase.indexOf( termino ) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });

  }


}
