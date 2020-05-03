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
import { HttpClientModule } from '@angular/common/http';
import { HelpModalComponent } from './modals/help-modal/help-modal.component';
import { ConferenceComponent } from './video/conference/conference.component';
import { CameraComponent } from './video/camera/camera.component';
import { ParticipantsComponent } from './video/participants/participants.component';
import { RoomsComponent } from './video/rooms/rooms.component';
import { SettingsComponent } from './video/settings/settings.component';
import { DeviceSelectComponent } from './video/settings/device-select/device-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CardComponent,
    HelpModalComponent,
    ConferenceComponent,
    CameraComponent,
    ParticipantsComponent,
    RoomsComponent,
    SettingsComponent,
    DeviceSelectComponent,
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialCustomModule,
    ShopModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
