import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MaterialCustomModule } from './modules/material-custom.module';
import { CardComponent } from './home/card/card.component';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CardComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialCustomModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
