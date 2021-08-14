import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SacarPage } from './sacar.page';

const routes: Routes = [
  {
    path: '',
    component: SacarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SacarPageRoutingModule {}
