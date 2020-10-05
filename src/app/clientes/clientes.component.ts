import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  filterPost = '';

  post = [
  {
  	"id":1,
  	"nombre": "Lola Navarrete",
  	"dui": "123456789",
  	"visitas": "3",
  },
  {
  	"id":2,
  	"nombre": "Marcela Valencia",
  	"dui": "111111111",
  	"visitas": "8",
  },
  {
  	"id":3,
  	"nombre": "Alexander Díaz",
  	"dui": "0987654321",
  	"visitas": "3",
  },
  {
  	"id":4,
  	"nombre": "Juan Pérez",
  	"dui": "234567890",
  	"visitas": "1",
  }
  ];

  ngOnInit(): void {
  }

}
