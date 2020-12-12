import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../products/shared/proservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../products/shared/product.model' ;

@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent implements OnInit {
  myForm: FormGroup;
  constructor(private proservie: ProserviceService , private fb: FormBuilder  , private router: Router ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: null ,
      name: '',
    price: null,
    quantity: null,
    pic: '',
    });
  }

  Addpro(){
    this.proservie.postpro(this.myForm.value).subscribe (
     res => {
       console.log(res);
       alert('posted sucessfully') ;
     },
     err => {
       console.log(err);
     
     }
   ); }


   
}
