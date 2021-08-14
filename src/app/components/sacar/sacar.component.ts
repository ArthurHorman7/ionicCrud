import { ActivatedRoute, Router } from '@angular/router';
import { ContasService } from './../../contas.services';
import { Conta } from './../shared/contas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.scss'],
  providers: [ContasService]
})
export class SacarComponent implements OnInit {

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
      this.valuechange = ev.detail.value
      console.log('esse é conta: ' + this.valuechange)
    }

    saque(){
      this.conta.valor = this.myconta.valor - this.valuechange
      this.contasService.updateValue(this.id, this.conta)
      .subscribe((res: Conta) => {
        console.log('valor do update: ' + res)
      })

      this.router.navigate(['']);
      alert("saque de R$" + this.valuechange + " feito com sucesso!")

    }
}
