import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BookserService } from '../bookser.service';
import { AuthService } from '../auth.service';
import { ProserviceService } from '../products/shared/proservice.service';

export class Arr{
  productid: string;
  Userid: string ;
  type: string;
  price: number;
  Adress: string ;
  No: number ;
  email: string ;
  phone: number ;
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  myForm: FormGroup;
public arr: Arr = { productid: '' , Userid: '' , type: '', price: null, Adress: '' , No : null , email: '' , phone: null} ;
public productid = '' ;
public contracts ;

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder , private book: BookserService , private router: Router , private auth: AuthService , private proser: ProserviceService) { }

  ngOnInit(): void {
    this.contracts = this.proser.pro ;
     this.myForm = this.fb.group({
      productid:  '',
    Userid: '',
    type: ' ',
    price: null,
    Adress: '',
    No: null,
    email: '',
    phone:  null,
    });
     this.productid = this.proser.productid ;
  }


  // tslint:disable-next-line: typedef
  booking(){ 
    this.arr.productid = this.productid ;
    this.arr.Userid =  this.auth.userid ;
    this.arr.type = this.proser.type ;
    this.arr.price = this.proser.pro.price ;
    this.arr.Adress = this.myForm.value.Adress ;
    this.arr.No = this.myForm.value.No ;
    this.arr.email = this.myForm.value.email;
    this.arr.phone = this.myForm.value.phone ;
    
    this.book.booked(this.arr).subscribe (
     res => {
       this.book.bookid = res ;
       alert('Booked sucessfully') ;
     },
     err => {
       console.log(err);
       alert('Error in booking please try again') ;
        }

    );
      }
    }
