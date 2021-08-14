import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.page.html',
  styleUrls: ['./sacar.page.scss'],
})
export class SacarPage implements OnInit {

  constructor( public modalController: ModalController, public navCtrl: NavParams ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
