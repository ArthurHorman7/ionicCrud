import { SacarPage } from './../../pages/sacar/sacar.page';
import { DepositarPage } from './../../pages/depositar/depositar.page';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Conta } from './../shared/contas.model';
import { ContasService } from './../../contas.services';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [ContasService]
})
export class UpdateComponent implements OnInit {

  id: any
  conta: Conta

  constructor( 
    // public alertController: AlertController, 
    // private http: HttpClient,
    // public navCtrl: NavParams,
    // public modalController: ModalController, 
    private contasService: ContasService,
    public router: Router,
    private route: ActivatedRoute, 
    ) {}
  

    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.contasService.getOfertas2(this.id)
      .subscribe((res: Conta) => {
        this.conta = res
        console.log(this.conta)
      })
      //console.log(this.id)
    }

    depositar(){
      this.router.navigate([`carteira/depositar/${this.id}`]);
    }

    sacar(){
      this.router.navigate([`carteira/sacar/${this.id}`]);
    }

  
  // async Depositar()  {
  //   const modal = await this.modalController.create({
  //     component: DepositarPage,
  //     cssClass: 'my-custom-class',
  //     backdropDismiss: true,
  //   });
  //   return await modal.present();
  // }

  // async Sacar() {
  //   const modal = await this.modalController.create({
  //     component: SacarPage,
  //     cssClass: 'my-custom-class',
  //     backdropDismiss: true
  //   });
  //   return await modal.present();
  // }

}
