import { SacarComponent } from './sacar/sacar.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositarComponent } from './depositar/depositar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DeleteComponent,
    UpdateComponent,
    DepositarComponent,
    SacarComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
