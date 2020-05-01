import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({

  imports: [
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]

})

export class MaterialCustomModule { }
