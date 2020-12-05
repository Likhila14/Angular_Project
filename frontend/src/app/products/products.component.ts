import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './shared/proservice.service';
import { Product } from './shared/product.model' ;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 public contracts ;
  constructor(private proservie: ProserviceService ) { }
  public arr: Product;
 public productid ;
  public store: Product[] = [];
  ngOnInit(): void {
   this.proservie.getProducts().subscribe(data => this.contracts = data);
   this.contracts = this.proservie.contracts;
   this.proservie.store = this.store ;
  }
  // tslint:disable-next-line: typedef
  addToCart(product: Product) {
    // tslint:disable-next-line: max-line-length
    const ar = {_id: product._id , id: product.id, name: product.name,  price: product.price , quantity: product.quantity , pic: product.pic };
    this.arr = ar;
   // tslint:disable-next-line: align
   alert('added to cart sucessfully');
    this.store.push(this.arr);
    console.log(this.store) ;
    }
    // tslint:disable-next-line: typedef
    idid(k){
      this.productid = k._id ;
      this.proservie.productid = k._id;
      console.log(this.productid) ;
    }
}
