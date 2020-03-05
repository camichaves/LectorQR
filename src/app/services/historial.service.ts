import { Injectable } from '@angular/core';
import { ScanData} from '../models/scanData.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private historial: ScanData[] = [];

  constructor( private inAppBrowser: InAppBrowser) { }
  agregarHistorial(texto: string) {
    let data = new ScanData(texto);
    this.historial.unshift(data);
    this.abrirEscaneado(0);
    console.log(this.historial);
  }
  abrirEscaneado(index: number) {
    let scanData = this.historial[index];
    switch ( scanData.tipo) {
      case 'http':
        const browser = this.inAppBrowser.create(scanData.info);
        break;
      default:
        console.error('Tipo no soportado');

    }

  }

  cargarHistorial() {
    return this.historial;
  }
}
