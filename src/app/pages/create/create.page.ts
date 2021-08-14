import { Conta } from './../../components/shared/contas.model';
import { ContasService } from './../../contas.services';
import { HttpClient } from '@angular/common/http';
import { ModalController, NavParams} from '@ionic/angular';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [ContasService]
})
export class CreatePage implements OnInit {

  public conta: Conta = {
    id: null, 
    banco: '',
    tipoConta: '',
    valor: 0,
    aberto: true
  }
  
  public tipoConta1: string = ''
  public banco1: string = ''
  public valor1: number = 0
  public idConta!: Conta[]
  public atualizar: string = ""

  constructor( public modalController: ModalController, public navCtrl: NavParams, private http: HttpClient,
    private service: ContasService, ) {}

  ngOnInit() {
  }

  bancoChanged(ev: any) {
    //console.log('Segment changed', ev);
    //console.log(ev.detail.value);
    this.conta.banco = ev.detail.value
  }
  tipoChanged(ev: any) {
    this.conta.tipoConta = ev.detail.value
  }

  closeModal() {
    this.modalController.dismiss();
  }

  confirmCreate() {
    if(this.conta.tipoConta == '' || this.conta.banco == ''){
      alert("Preencha os Campos!")
    } else {


      this.service.efetivarCompra(this.conta)
          .subscribe((num: number) => {
            this.conta.id = num
          })

          setTimeout(() => 
          {
              this.modalController.dismiss();
              window.location.reload();
              //alert("conta criada com sucesso!")
          },
          500);
        }
    }





    // this.modalController.dismiss();
    // console.log(this.banco + ' & ' + this.tipoConta + ' & ' + this.valor);
    // console.log(this.conta)
  // confirmCreate() {
  //   this.service.confirmCreate(this.conta).subscribe((resposta) => { //pega a resposta do INPUT
  //     //this.service.message('To-do criado com sucesso!')
  //     console.log('To-do criado com sucesso!')
  //     this.modalController.dismiss();
  //   }, err => {console.log('Falha ao criar To-do!')
  //   this.modalController.dismiss();
  //     }
  //   )}
    
  


  // public tipoChanged(resposta: Event): void {
  //   this.resposta = (<HTMLInputElement>resposta.target).value
  //   // console.log(this.resposta)
  // }


}
