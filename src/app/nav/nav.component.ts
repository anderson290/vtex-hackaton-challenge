import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  url: string = '';

  constructor(router:Router) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
  }
}
