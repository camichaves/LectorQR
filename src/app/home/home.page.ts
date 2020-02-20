import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scannedcode = '' ;
  elementType = '';
  constructor(private barcodeScanner: BarcodeScanner , private toastController: ToastController,
              private platform: Platform) {
  }

  escanear() {

    if (! this.platform.is('cordova')) {
      this.scannedcode = 'https://google.com.ar';
      this.elementType = 'QRCODE';
      this.presentToast();
      return;
    }
    this.barcodeScanner.scan().then(
        barcoData => {
          this.scannedcode = barcoData.text;
          this.elementType = barcoData.format;
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
