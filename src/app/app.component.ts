import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  constructor(public infoPage: InfoPageService,
              public productosService: ProductosService ) {

  }

}
