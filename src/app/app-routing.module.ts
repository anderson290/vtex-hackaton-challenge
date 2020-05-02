import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FinishComponent } from './shop/finish/finish.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isLeft' } },
  { path: 'shop', component: ShopComponent, data: { animation: 'isRight' } },
  { path: 'checkout', component: CheckoutComponent, data: { animation: 'isRight' } },
  { path: 'finish', component: FinishComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
