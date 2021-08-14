import { SacarComponent } from './components/sacar/sacar.component';
import { DepositarComponent } from './components/depositar/depositar.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'carteira',
    loadChildren: () => import('./pages/carteira/carteira.module').then( m => m.CarteiraPageModule)
  },
  {
    path: 'modal/:id',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'depositar',
    loadChildren: () => import('./pages/depositar/depositar.module').then( m => m.DepositarPageModule)
  },
  {
    path: 'sacar',
    loadChildren: () => import('./pages/sacar/sacar.module').then( m => m.SacarPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'carteira/delete/:id',
    component: DeleteComponent
  },
  {
    path: 'carteira/update/:id',
    component: UpdateComponent
  },
  {
    path: 'carteira/depositar/:id',
    component: DepositarComponent
  },
  {
    path: 'carteira/sacar/:id',
    component: SacarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
