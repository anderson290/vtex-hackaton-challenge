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
        company_id: 2,
        image: "https://img.drogasil.com.br/catalog/product/m/e/medley_dipirona_500mg.jpg?width=520&height=520&quality=50&type=resize"
      },
      {
        _id: 2,
        title: "Paracetamol",
        description: "Combate a dor de cabeça!",
        price: 12.00,
        company_id: 3,
        image: "https://img.onofre.com.br/catalog/product/p/a/paracetamol_200mgml_solu_o_cimed.jpg?width=520&height=520&quality=50&type=resize"
      },
      {
        _id: 22,
        title: "Alênia",
        description: "Respiração",
        price: 21.40,
        company_id: 12,
        image: "https://img.drogasil.com.br/catalog/product/a/r/artrogen_duo_01.jpg?width=520&height=520&quality=50&type=resize"
      },
      {
        _id: 34,
        title: "Dorflex",
        description: "Combate dores no corpo!",
        price: 8.40,
        company_id: 10,
        image: "https://img.drogasil.com.br/catalog/product/d/o/dorflex-com-36-comprimidos-7891058017507-_2_.jpg?width=520&height=520&quality=50&type=resize"
      }
    ]
  }

}
