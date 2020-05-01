import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isLeft' } },
  { path: 'shop', component: ShopComponent, data: { animation: 'isRight' }, loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
