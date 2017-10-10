import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {AuthenticationService} from "../../services/authentication.service";
import {IPaymentParams, IPaymentResult, PaymentService} from "../../services/payment.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'prezly-payment-wizard',
  templateUrl: './payment-wizard.component.html',
  styleUrls: ['./payment-wizard.component.less']
})
export class PaymentWizardComponent implements OnInit {
  @Input() modalRef: BsModalRef;
  public step: number;
  public dummyError: string;
  public cardNumber: string;
  public expDate: string;
  public expMonth: string;
  public cvv: string;
  public cardholderName: string;
  public postCode: string;
  public country: string;
  constructor(private authService: AuthenticationService, private paymentService: PaymentService) {
    this.step = 1;
    this.cardNumber = '4111111111111111';
    this.expDate = '2019';
    this.expMonth = '10';
    this.cardholderName = 'Béla';
    this.postCode = '1111';
    this.country = 'Hungary';
    this.cvv = '111';
    this.dummyError = '';
  }

  ngOnInit() {
  }
  public  stepTo2() {
    console.log('stepTo2');
    this.step = 2;
  }
  public  stepTo3() {
    console.log('stepTo3');
    if (!this.verifyPaymentDetails()) {
      return;
    }
    const paymentParams: IPaymentParams = {
      creditCardNumber: this.cardNumber,
      expirationYear: this.expDate,
      expirationMonth: this.expMonth,
      securityCode: this.cvv,
      cardHolderInfo: {
        cardHolderName: this.cardholderName,
        country: this.country,
        zipCode: this.postCode
      }
    }
    this.paymentService.sendPayment(paymentParams).subscribe(
      (data: IPaymentResult) => {
        console.log('success');
        this.step = 3;
      }, (error: HttpErrorResponse) => {
        console.log('terrible problem');
        this.dummyError = 'Terrible problem';
    });
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
  private verifyPaymentDetails(): boolean {
    console.log(this.cardNumber, this.cardholderName, this.country);
    return true;
  }
}
