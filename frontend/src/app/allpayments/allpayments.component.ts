import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

export class Details{
  productid:String ;
  Userid: String;
  bookid: String;
  mood: String ;
  type: String;
  price: Number;
  code: Number;
  no: Number;
  name: String;
  expire: String;
  cvv: Number;
}
@Component({
  selector: 'app-allpayments',
  templateUrl: './allpayments.component.html',
  styleUrls: ['./allpayments.component.css']
})
export class AllpaymentsComponent implements OnInit {
public product: Details[] = [ ] ;
  constructor( private pay : PaymentService) { }

  ngOnInit(): void {
    this.pay.getProducts().subscribe(data => this.product = data);
  }

}
