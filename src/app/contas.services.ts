import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Conta } from './components/shared/contas.model'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'


@Injectable()
export class ContasService {

    private url: string = 'http://localhost:3000/contas'

    

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Conta[]>{
        return this.http.get<Conta[]>(`${this.url}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }
    
    public getOfertas2(id: number): Observable<any>{
        return this.http.get<Conta[]>(`${this.url}/${id}`)
    }
    
    public updateValue(id: number, conta: Conta): Observable<any>{
        return this.http.put<Conta[]>(`${this.url}/${id}`, conta)
    }

    // confirmCreate(contas: Conta): Observable<Conta> {
    //     return this.http.post<Conta>('http://localhost:3000/', contas)
    //   }

    public efetivarCompra(conta: Conta): Observable<any>{
       //retornando os dados convertidos em string que sera anexado ao body da requisicao, fazendo um post na url
       return this.http.post(
        `${this.url}`,
            conta,
       )
       .pipe(map((resposta:any)=>{
           return resposta.id
      }))
    }



    public deletarCompra(id: any): Observable<any>{
        //retornando os dados convertidos em string que sera anexado ao body da requisicao, fazendo um post na url
        return this.http.delete(
         `${this.url}/${id}`
        )
    //     .pipe(map((resposta:any)=>{
    //         return resposta.id
    //    }))
     }


}