import {Component, AfterViewInit, Input, AfterContentChecked, AfterContentInit} from '@angular/core';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements AfterContentInit {
  @Input() coords;
  private API = 'place';
  private KEY = 'AIzaSyDJTLIfUHhSd2hllr6UUjKdMHTeRUVejkk';
  // private lat = '-31.537034492705484';
  // private lon = '-68.53237502563692';
  lat: number ;
  lng: number ;
  zoom = 15;
  // https://www.google.com/maps/embed/v1/place?key=AIzaSyDJTLIfUHhSd2hllr6UUjKdMHTeRUVejkk&q=-31.537034492705484,-68.53237502563692&zoom=18

  constructor( private modalController: ModalController) { }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Longitude: ' + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log('Latitude: ' + position.coords.latitude);
      } );
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }

  cargaMapa(): void {
    // esto es para que la ubicacion del mapa sea mi ubicacion
    // this.getLocation();
    var co = this.coords;
    const separador = ',';
    var coordsArray = co.split(separador);
    console.log('Latitud: ' + coordsArray[0].replace('geo:', '') );
    console.log('Longitud: ' + coordsArray[1]  );
    // tslint:disable-next-line:radix
    this. lat = parseFloat(coordsArray[0].replace('geo:', '')); //-31.539989700000003
    // tslint:disable-next-line:radix
    this.lng = parseFloat(coordsArray[1]); //-68.558084
  }


    cerrarModal() {
      this.modalController.dismiss();
    }

  ngAfterContentInit(): void {
    this.cargaMapa();
    // this.getLocation();
  }

}
