import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  card_content: any;

  constructor() { }

  ngOnInit(): void {
    this.card_content = [
      {
        _id: 1,
        title: "Dipirona",
        description: "Combate a dor de cabeça!",
        price: 10.00,
        company_id: 2
      },
      {
        _id: 2,
        title: "Paracetamol",
        description: "Combate a dor de cabeça e corpo!",
        price: 12.00,
        company_id: 3
      },
      {
        _id: 34,
        title: "Dorflex",
        description: "Combate dores no corpo!",
        price: 8.40,
        company_id: 10
      }
    ]
  }

}
