import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  productName: string = '';
  constructor() {}

  ngOnInit(): void {}

  productArr = [
    {
      sno: 1,
      name: 'Mobile',
      price: '7000 Rs.',
      availability: 'Available',
    },
    {
      sno: 2,
      name: 'TV',
      price: '17000 Rs.',
      availability: 'Not Available',
    },
    {
      sno: 3,
      name: 'Mobile',
      price: '10000 Rs.',
      availability: 'Not Available',
    },
    {
      sno: 4,
      name: 'Washing Machine',
      price: '27000 Rs.',
      availability: 'Available',
    },
    {
      sno: 5,
      name: 'TV',
      price: '23000 Rs.',
      availability: 'Available',
    },
    {
      sno: 6,
      name: 'Mobile',
      price: '30000 Rs.',
      availability: 'Available',
    },
    {
      sno: 7,
      name: 'Washing Machine',
      price: '35000 Rs.',
      availability: 'Available',
    },
    {
      sno: 8,
      name: 'TV',
      price: '50000 Rs.',
      availability: 'Not Available',
    },
  ];
}
