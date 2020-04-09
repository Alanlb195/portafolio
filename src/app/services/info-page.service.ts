import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: any = { };
  cargada = false;

  constructor(private httpClient: HttpClient) {

    // Cargar datos del json data-page
    this.httpClient.get('assets/data/data-page.json')
      .subscribe( resp => {

        this.cargada = true;
        this.info = resp;
        console.log( resp );

      });

  }

}
