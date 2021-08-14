import { SacarPage } from './../sacar/sacar.page';
import { DepositarPage } from './../depositar/depositar.page';
import { ModalController, NavParams} from '@ionic/angular';

import { Component, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit, OnDestroy {

  @Input() id: any

  public conta: string = ''
  public banco: string = ''

  constructor( public modalController: ModalController, public navCtrl: NavParams ) { }
  
  ngOnDestroy() {
  }

  ngOnInit() {
    console.log(this.id)
  }

  // bancoChanged(ev: any) {
  //   this.banco = ev.detail.value
  // }
  // tipoChanged(ev: any) {
  //   this.conta = ev.detail.value
  // }

  closeModal() {
    this.modalController.dismiss();
  }


  
  async Depositar()  {
    const modal = await this.modalController.create({
      component: DepositarPage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    return await modal.present();
  }
  async Sacar() {
    const modal = await this.modalController.create({
      component: SacarPage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    return await modal.present();
  }


  

}
