import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './shared/proservice.service';
import { Product } from './shared/product.model' ;
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 public contracts ;
 
 public pls = {_id: '', id: 0 , name: '',  price: 0 , quantity: 0 , pic:'' };
  constructor(private proservie: ProserviceService , private fb: FormBuilder  , private router: Router ) { }
  public arr: Product;
 public productid ;
  public store: Product[] = [];
  public name: String;
  ngOnInit(): void {
    
   this.proservie.getProducts().subscribe(data => this.contracts = data);
   this.contracts = this.proservie.contracts;
   this.pls = this.contracts ;
   this.proservie.store = this.store ;
   console.log(this.pls) ;
  }
  // tslint:disable-next-line: typedef
  addToCart(product: Product) {
    // tslint:disable-next-line: max-line-length
    const ar = {_id: product._id , id: product.id, name: product.name,  price: product.price , quantity: product.quantity , pic: product.pic };
    this.arr = ar;
    this.proservie.sum = this.proservie.sum + product.price ;
    this.proservie.len = this.proservie.len + 1 ;
   // tslint:disable-next-line: align
   alert('added to cart sucessfully');
    this.store.push(this.arr);
    console.log(this.store) ;
    }
    // tslint:disable-next-line: typedef
    rent(k){
      this.proservie.pro = k ;
      this.productid = k._id ;
      this.proservie.productid = k._id;
      this.proservie.type = 'rent' ;
      console.log(this.productid) ;
    }
    buy(k){
      this.proservie.pro = k ;
      this.productid = k._id ;
      this.proservie.productid = k._id;
      this.proservie.type = 'buy' ;
    }

    

    search() {
      if ( this.name === '' ) {
        this.ngOnInit();
      } else {
        console.log(this.name);
  this.proservie.contracts = this.proservie.contracts.filter( res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  
    });
  
      }

    }
    refreshproductList() {
      this.proservie.getProducts().subscribe((res) => {
        this.proservie.contracts = res as Product[];
      });
    }

    onEdit(pro: Product) {
      this.proservie.pro = pro;
    }
  
    onDelete(_id: string) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.proservie.deleteEmployee(_id).subscribe((res) => {
          this.refreshproductList();
         alert('deleted successfully')
        });
      }
    }
  }
