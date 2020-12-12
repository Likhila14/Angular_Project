import { Component, OnInit } from '@angular/core';
import { Product } from '../products/shared/product.model' ;
import { ProserviceService } from '../products/shared/proservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
  myForm: FormGroup;
  constructor(private proservie: ProserviceService , private fb: FormBuilder  , private router: Router) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      id: null ,
        name: '',
      price: null,
      quantity: null,
      pic: '',
    }) ;

    this.myForm.setValue({
   
      id: this.proservie.editpro.id,
      name: this.proservie.editpro.name,
    price: this.proservie.editpro.price,
    quantity: this.proservie.editpro.quantity,
    pic: this.proservie.editpro.pic,
  }) ;
  }
 
  

  onEdit(pro: Product) {
    console.log(pro);
    this.proservie.pro = pro;
    this.proservie.putEmployee(pro) ;
  }


}
