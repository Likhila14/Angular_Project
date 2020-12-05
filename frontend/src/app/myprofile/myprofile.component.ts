import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ProserviceService } from '../products/shared/proservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myForm: FormGroup;
  public contracts ;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      UserName: '',
      FirstName: '',
      LastName: '',
      Password : '',
      email: '',
      phone: null ,
    });
    this.myForm.setValue({
      UserName: 'dfgh',
      FirstName: 'sdfgpjd',
      LastName: 'qwsdfgb',
      Password : 'xcfghyuio',
      email: 'pokjhbv',
      phone: 951745285 ,
    }) ;
  }
  // tslint:disable-next-line: typedef
}
