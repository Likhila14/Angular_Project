import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../products/shared/proservice.service';
import { Product } from '../products/shared/product.model' ;
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  public store: Product[] = [ ] ;
  public i = 0 ;
  public contracts: Product[] = [];
  public sum ;
  public length ;

  constructor(private product: ProserviceService) { }

  ngOnInit(): void {
    this.contracts = this.product.contracts;
    this.length = this.store.length ;
    this.store = this.product.store;
    this.sum = this.product.sum ;
    this.length = this.product.len ;
   
  }
  // tslint:disable-next-line: typedef
  remove(k) {
    this.i = this.store.findIndex(h => h._id === k._id);
    if (this.i !== -1) {
      this.store.splice(this.i, 1) ;
      this.product.len = this.product.len - 1 ;
      this.product.sum = this.product.sum - k.price;
  }

  }

}
