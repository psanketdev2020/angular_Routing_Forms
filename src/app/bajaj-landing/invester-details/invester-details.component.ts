import { Component } from '@angular/core';

@Component({
  selector: 'app-invester-details',
  templateUrl: './invester-details.component.html',
  styleUrls: ['./invester-details.component.css']
})
export class InvesterDetailsComponent {

  constructor() { }


  public investors:any = [
    {
      name: 'Rajiv Bajaj',
      gander: 'Male',
      age: 50,
      location: 'XYZ/Delhi'
    }
  ]

}
