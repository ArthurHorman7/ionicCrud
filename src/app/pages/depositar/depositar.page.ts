import { Conta } from './../../components/shared/contas.model';
import { ContasService } from './../../contas.services';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.page.html',
  styleUrls: ['./depositar.page.scss'],
  providers: [ContasService]
})
export class DepositarPage implements OnInit {


  id: any
  contas: Conta

  constructor( 
    // public alertController: AlertController, 
    // private http: HttpClient,
    public modalController: ModalController, 
    private contasService: ContasService,
    // public navCtrl: NavParams,
    private route: ActivatedRoute, 
    public navCtrl: NavParams
    ) {}
  

    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id)
      this.contasService.getOfertas2(this.id)
      .subscribe((res: Conta) => {
        this.contas = res
        console.log(this.contas)
      })
    }

  closeModal() {
    this.modalController.dismiss();
  }

}
