import {AfterContentInit, Component, OnInit} from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { HistorialService} from '../services/historial.service';
import {AdMob} from 'ionic-admob';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  scannedcode = '' ;
  elementType = '';
  constructor(private barcodeScanner: BarcodeScanner , private toastController: ToastController,
              private platform: Platform, private historialService: HistorialService,
              private admob: AdMob) {
      platform.ready().then(() => {
          admob.banner.show({id: 'test'}).then(r => console.log('Muestro')).catch( e => console.log(e));
      });
  }
  escanear() {

    if (! this.platform.is('cordova')) {
       // this.scannedcode = 'MATMSG:TO:camichavesthg@gmail.com;SUB:Holis;BODY:Tkm bebe;;';
      // this.elementType = 'mapa';
      //   this.scannedcode = 'geo:-31.539989700000003,-68.53237502563692'
        this.scannedcode = 'ERROR';
        this.elementType = 'No usable en web';
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
      duration: 2500
    });
    toast.present();
    console.log(' Escaneado: ' + this.scannedcode + '.- Formato: ' + this.elementType);
  }
}
