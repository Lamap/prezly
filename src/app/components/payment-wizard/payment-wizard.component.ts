import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'prezly-payment-wizard',
  templateUrl: './payment-wizard.component.html',
  styleUrls: ['./payment-wizard.component.less']
})
export class PaymentWizardComponent implements OnInit {
  @Input() modalRef: BsModalRef;
  public step: number;
  constructor(private authService: AuthenticationService) {
    this.step = 1;
  }

  ngOnInit() {
  }
  public  stepTo2() {
    console.log('stepTo2');
    this.step = 2;
  }
  public  stepTo3() {
    console.log('stepTo3');
    this.step = 3;
  }
  public  stepTo4() {
    console.log('stepTo4');
    this.authService.grantAccess();
    this.step = 4;
  }
  public  finish() {
    console.log('finish');
    this.modalRef.hide();
  }
}
