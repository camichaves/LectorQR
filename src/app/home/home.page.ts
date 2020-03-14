import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { HistorialService} from '../services/historial.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  scannedcode = '' ;
  elementType = '';
  constructor(private barcodeScanner: BarcodeScanner , private toastController: ToastController,
              private platform: Platform, private historialService: HistorialService) {
  }

  escanear() {

    if (! this.platform.is('cordova')) {
       this.scannedcode = 'MATMSG:TO:camichavesthg@gmail.com;SUB:Holis;BODY:Tkm bebe;;';
      // this.elementType = 'mapa';
       this.historialService.agregarHistorial(this.scannedcode);
       this.presentToast();
       return;
    }
    this.barcodeScanner.scan().then(
        barcoData => {
          this.scannedcode = barcoData.text;
          this.elementType = barcoData.format;
          if (!barcoData.cancelled && barcoData.text != null) {
            this.historialService.agregarHistorial(barcoData.text);
          }
          this.presentToast();
        }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Scan: ' + this.scannedcode.toString() + '.- Formato: ' + this.elementType,
      duration: 7500
    });
    toast.present();
    console.log(' Escaneado: ' + this.scannedcode + '.- Formato: ' + this.elementType);
  }



}
