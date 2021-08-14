import { AlertController, ModalController } from '@ionic/angular';
import { Conta } from './../shared/contas.model';
import { ContasService } from './../../contas.services';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  providers: [ContasService]
})
export class DeleteComponent implements OnInit {

  id: any
  deleteId: number
  conta: Conta

  constructor(    
    public alertController: AlertController, 
    public modalController: ModalController, 
    private http: HttpClient,
    private contasService: ContasService,
    private route: ActivatedRoute,
    private router: Router
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
  
  
  deleteconta() {      
    setTimeout(() => 
    {
      this.router.navigate(['']);
      alert("conta " + this.id + " deletada com sucesso!")
    },
    500);
    //window.location.reload();
          
    this.contasService.deletarCompra(this.id)
    .subscribe((num: number) => {
      this.deleteId = num
      //console.log(this.deleteId)
    })
  }

}
