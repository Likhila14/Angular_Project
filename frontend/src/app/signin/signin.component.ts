import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  myForm: FormGroup;
  details;

  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      UserName: '',
      FirstName:'',
      LastName: '',
      Password : '',
      email: '',
      phone: '', 
    });
  }



  // tslint:disable-next-line: typedef
  registerUser(){
   this.auth.registerUser(this.myForm.value).subscribe (
    res => {
      console.log(res);
      this.details = res.registered;
      console.log(this.details);
      localStorage.setItem('token', res.token) ;
      localStorage.setItem('User',  JSON.stringify(res.registered));
      this.router.navigate(['/products']) ;
      this.auth.userid = JSON.parse(localStorage.getItem('User')) ;
    },
    err => {
      console.log(err);
      if (err instanceof HttpErrorResponse){
           if (err.status === 401) {
             this.router.navigate(['/login']) ;
           }
      }
    }
  ); }

}
