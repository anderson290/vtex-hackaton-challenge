import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { FinishComponent } from './finish/finish.component';
import { MaterialCustomModule } from '../modules/material-custom.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ShopComponent,
    CheckoutComponent,
    ProductComponent,
    FinishComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    MaterialCustomModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: []
})
export class ShopModule { }
