import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacarPageRoutingModule } from './sacar-routing.module';

import { SacarPage } from './sacar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SacarPage]
})
export class SacarPageModule {}
