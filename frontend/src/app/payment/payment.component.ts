import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookserService } from '../bookser.service';
import { PaymentService } from '../payment.service';
import { ProserviceService } from '../products/shared/proservice.service';

export class Arr{
  productid: string;
  bookid: string ;
  Userid: string ;
  mood: string ;
  type: string;
  price:  number ;
  code : number
  no: number ;
  name: string ;
  expire: string ;
  cvv: number;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myForm: FormGroup;
  public contracts ;
  public arr: Arr = { productid: '' , bookid: '', mood: '' , type: '', price: null,  code : null ,Userid: '' , no: null , name : '' , expire: '' , cvv: null} ;
  public productid = '' ;
  public upicode ;
  public userid = '';
  public debit = false ;
  public confirm = false ;
  public upi = false ;
  public code = null;
    // tslint:disable-next-line: max-line-length
    constructor(private fb: FormBuilder , private book: PaymentService , private router: Router , private auth: AuthService , private proser: ProserviceService , private books: BookserService) { }

    ngOnInit(): void {
   this.contracts = this.proser.pro ;
       this.myForm = this.fb.group({
        productid:  '',
      Userid: '',
      bookid: '',
      Adress: '',
      No: null,
      email: '',
      phone:  null,
      });
      this.userid = this.auth.userid._id ;
       this.productid = this.proser.productid ;
    }


    // tslint:disable-next-line: typedef
    ondelivery(){
      this.confirm = true ;
      this.debit = false ;
      this.upi = false ;
      console.log(this.productid) ;
      this.arr.productid = this.productid ;
      this.arr.Userid = this.userid ;
      this.arr.bookid = this.books.bookid._id ;
      this.arr.mood = 'cash on delivery';
      this.arr.type = this.proser.type ;
      this.arr.price = this.proser.pro.price ;
      this.arr.Userid =  this.auth.userid ;
      this.arr.no = this.myForm.value.Adress ;
     this.arr.name  = this.myForm.value.No ;
     this.arr.expire = this.myForm.value.email;
     this.arr.cvv = this.myForm.value.phone ;
  
      this.book.books(this.arr).subscribe (
       res => {
         console.log(res);

         this.confirm = true ;
       },
       err => {
         console.log(err);

          }

      );
    }

   // tslint:disable-next-line: typedef
   UPI(){
    this.code = Math.floor(Math.random() * (1000000000000 - 1)) + 1;
     this.arr.mood = 'upi' ;
     this.upi = true ;
     this.debit = false ;
     this.confirm = true ;
     console.log(this.productid) ;
     this.arr.productid = this.productid ;
     this.arr.Userid = this.userid ;
     this.arr.bookid = this.books.bookid._id ;
     this.arr.type = this.proser.type ;
      this.arr.price = this.proser.pro.price ;
     this.arr.code = this.code ;
     this.arr.Userid =  this.auth.userid ;
     this.arr.no = this.myForm.value.Adress ;
     this.arr.name  = this.myForm.value.No ;
     this.arr.expire = this.myForm.value.email;
     this.arr.cvv = this.myForm.value.phone ;
  
     this.book.books(this.arr).subscribe (
       res => {
         console.log(res);
         alert('payment sucessfully') ;
         this.confirm = true ;
       },
       err => {
         console.log(err);
         alert('Error in payment please try again') ;
          }

      );
   }
   // tslint:disable-next-line: typedef
   net(){
    this.arr.productid = this.productid ;
    this.arr.Userid = this.userid ;
    this.arr.bookid = this.books.bookid._id ;
    this.arr.type = this.proser.type ;
     this.arr.price = this.proser.pro.price ;
     this.arr.mood = 'net baking' ;
     this.arr.no = this.myForm.value.Adress ;
     this.arr.name  = this.myForm.value.No ;
     this.arr.expire = this.myForm.value.email;
     this.arr.cvv = this.myForm.value.phone ;
  
     this.upi = false ;
     this.debit = true ;
     this.confirm = false ;
   }
    // tslint:disable-next-line: typedef
    booking(){
      this.arr.productid = this.productid ;
      this.arr.Userid = this.userid ;
      this.arr.bookid = this.books.bookid._id ;
      this.arr.Userid =  this.auth.userid ;
      this.arr.no = this.myForm.value.Adress ;
     this.arr.name  = this.myForm.value.No ;
     this.arr.expire = this.myForm.value.email;
     this.arr.cvv = this.myForm.value.phone ;
  
     console.log(this.arr);
      this.book.books(this.arr).subscribe (
       res => {
         console.log(res);
         alert('payment sucessfully') ;
         this.confirm = true ;
       },
       err => {
         console.log(err);
         alert('Error in payment please try again') ;
          }

      );
        }
      }
