import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinishComponent } from './finish/finish.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop.component';



const routes: Routes = [
  // { path: '', component: ShopComponent, data: { animation: 'isRight' } },
  { path: '', component: ProductComponent, data: { animation: 'isRight' } },
  { path: 'checkout', component: CheckoutComponent, data: { animation: 'isRight' } },
  { path: 'finish', component: FinishComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }