import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private httpClient: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {

    // Cargar datos del json data-page
    this.httpClient.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {

        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {

    // Cargar datos del json data-page
    this.httpClient.get('https://angular-template-1ac59.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.equipo = resp;
        console.log(resp);
      });
  }



}
