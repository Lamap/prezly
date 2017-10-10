import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


export interface ICardholderInfo {
  cardHolderName?: string;
  country?: string;
  zipCode?: string;
}
export interface IPaymentParams {
  creditCardNumber: string;
  expirationYear?: string;
  expirationMonth?: string;
  securityCode?: string;
  cardHolderInfo?: ICardholderInfo;
}
export interface IPaymentResult {
  error: string;
}

@Injectable()
export class PaymentService {
  private baseUrl: string = 'https://prezi-homeassignment-backend.herokuapp.com/api/v1/payment/';
  constructor(private http: Http) { }
  public sendPayment (paymentParams: IPaymentParams): Observable<IPaymentResult> {
    return this.http.post(this.baseUrl, paymentParams).map((res: Response) => {
      console.log(res.json());
      return res.json() as IPaymentResult;
    });
  }
}
