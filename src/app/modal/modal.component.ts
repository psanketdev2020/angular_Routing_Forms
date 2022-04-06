import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { ThankyouPopupComponent } from '../widget/thankyou-popup/thankyou-popup.component'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  _modalRef : BsModalRef;
  constructor(public _modalService:  BsModalService) { }

  ngOnInit(): void {
  }

  thankYouModal(){
    this._modalRef = this._modalService.show(ThankyouPopupComponent);
  }
}
