import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public userid = '';
public userdata = '';
  myForm: FormGroup;


  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
    UserName: '',
    Password : '',
  }) ;
  }

  // tslint:disable-next-line: typedef
  loginUser(){
    this.auth.loginUser(this.myForm.value).subscribe(
      res => {
        console.log(res);

        localStorage.setItem('token', res.token) ;
        this.router.navigate(['/products']) ;

      },
      err => {console.log(err);
        // tslint:disable-next-line: align
        alert(' You entered wrong UserName or Password ');
      }
    )

    ;
   }
}
