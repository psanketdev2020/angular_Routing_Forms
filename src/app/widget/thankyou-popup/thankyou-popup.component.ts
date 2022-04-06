import { Component, OnInit } from '@angular/core';
import  { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-thankyou-popup',
  templateUrl: './thankyou-popup.component.html',
  styleUrls: ['./thankyou-popup.component.css']
})
export class ThankyouPopupComponent implements OnInit {

  constructor(public _modelRef: BsModalRef) { }

  ngOnInit(): void {
  }

  clodeMOdal(){
    this._modelRef.hide();
  }

}
