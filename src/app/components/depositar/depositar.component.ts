import { ActivatedRoute, Router } from '@angular/router';
import { ContasService } from './../../contas.services';
import { ModalController, NavParams } from '@ionic/angular';
import { Conta } from './../shared/contas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.scss'],
  providers: [ContasService]
})
export class DepositarComponent implements OnInit {

 
  id: any
  valuechange: number
  myconta: Conta
  public conta: Conta = {
    id: null, 
    banco: '',
    tipoConta: '',
    valor: 0,
    aberto: true
  }

  constructor( 
    // public alertController: AlertController, 
    // private http: HttpClient,
    // public modalController: ModalController, 
    // public navCtrl: NavParams
    private contasService: ContasService,
    private route: ActivatedRoute, 
    public router: Router,
    ) {}
  

    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id)
      this.contasService.getOfertas2(this.id)
      .subscribe((res: Conta) => {
        this.myconta = res
        this.conta = res
        //console.log('esse é contas: ' + this.myconta)
        console.log('esse é conta: ' + this.conta)
      })
    }

    voltar(){
      this.router.navigate([`carteira/update/${this.id}`]);
    }

    valorChanged(ev: any) {
      this.valuechange = parseInt(ev.detail.value)
      console.log(ev)

      // console.log('esse é conta: ' + this.valuechange)
    }

    deposito(){
      // this.conta.valor = this.myconta.valor + 8
      this.conta.valor = this.myconta.valor + this.valuechange
      this.contasService.updateValue(this.id, this.conta)
      .subscribe((res: Conta) => {
        console.log('valor do update: ' + res)
      })

      this.router.navigate(['']);
      alert("deposito de R$" + this.valuechange + " feito com sucesso!")
    }

}



