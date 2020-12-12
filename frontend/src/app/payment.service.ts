import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private bookurl = 'http://localhost:3000/payment/paydata' ;
  private bookurls = 'http://localhost:3000/payment/details' ;
  

 constructor(private http: HttpClient ,  private router: Router) { }

  // tslint:disable-next-line: typedef
  books(paydata) {
    return this.http.post<any>(this.bookurl, paydata) ;
  }
  getProducts(): Observable<Details[]>{
    return this.http.get<Details[]>(this.bookurls);
  }
}
