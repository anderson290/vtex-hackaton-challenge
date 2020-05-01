import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { FinishComponent } from './finish/finish.component';
import { ShopRoutingModule } from './shop.routing.module';


@NgModule({
  declarations: [
    ShopComponent,
    CheckoutComponent,
    ProductComponent,
    FinishComponent
  ],
  imports: [
    ShopRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ShopModule { }
