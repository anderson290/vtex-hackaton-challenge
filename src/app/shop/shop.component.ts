import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sliderLazing } from './../route-animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [sliderLazing]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
