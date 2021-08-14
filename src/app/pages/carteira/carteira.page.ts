import { CreatePage } from './../create/create.page';
import { ContasService } from './../../contas.services';
import { Conta } from './../../components/shared/contas.model';
import { HttpClient } from '@angular/common/http';
import { ModalPage } from './../modal/modal.page';
import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.page.html',
  styleUrls: ['./carteira.page.scss'],
  providers: [ContasService]
})
export class CarteiraPage implements OnInit, OnChanges  {

  public resultadoCriar: string
  public vendoValor: boolean
  public iconeOlho: string
  public total: number
  public contas: Conta[]
  public conta: Conta
  

  // id: number = 5
  // deleteId: number


  constructor(
    public alertController: AlertController, 
    public modalController: ModalController, 
    private http: HttpClient,
    private contasService: ContasService,    ) {}

  ngOnChanges() {
    this.ngOnInit()
  }

  ngOnInit(): void {
      this.vendoValor = false
      this.iconeOlho = 'eye-off-outline'

      this.contasService.getOfertas()
        .then(( contas: Conta[] ) => { 
            this.contas = contas
            console.log(this.contas)

            this.total = contas.reduce( function(a, b){
              return a + b['valor'];
          }, 0);
          //console.log(this.total);
        })
        .catch( ( param: any ) => { 
      })

    
  }

  verValores() {
    if(this.vendoValor) {
      
      this.http.get(`http://localhost:3000/contas`)
                 .subscribe(resultado => resultado);
 
      //console.log('Valores não mostrando')
      this.vendoValor = false
      this.iconeOlho = 'eye-off-outline'
    }else {
      //console.log('Valores mostrando')
      this.vendoValor = true
      this.iconeOlho = 'eye-outline'
    }

  }

  async criarconta() {
      const modal = await this.modalController.create({
        component: CreatePage,
        cssClass: 'my-custom-class',
        backdropDismiss: true
      });
      return await modal.present();
    }

  // async updateconta(id) {
  //   const modal = await this.modalController.create(
  //   {
  //     component: ModalPage,
  //     cssClass: 'my-custom-class',
  //     backdropDismiss: true,
  //     id:id
  //   }
  //   );
  //   return await modal.present();
  // }

//   deleteconta() {
//     // this.contasService.getOfertas()
//     // .then(( contas: Conta[] ) => { 
//     //     this.contas = contas
//     //     console.log(this.contas)
      
//     setTimeout(() => 
//     {
//         window.location.reload();
//     },
//     500);

//     this.contasService.deletarCompra(this.id)
//     .subscribe((num: number) => {
//       this.deleteId = num
//       console.log(this.deleteId)
//     })
// // });
//   }

}
