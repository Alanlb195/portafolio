import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoInfo } from '../../interfaces/producto-info';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  producto: ProductoInfo;
  productoId: string;

  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( parametros => {

        // console.log(parametros.id);
        this.productosService.getProducto(parametros.id)
          .subscribe( (producto: ProductoInfo) => {
            this.productoId = parametros.id;
            this.producto = producto;
          });

      });
  }

}
