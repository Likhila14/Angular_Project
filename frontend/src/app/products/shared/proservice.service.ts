import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs/Rx';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProserviceService {
  public productid = '' ;
  public sum  = 0 ;
  public len = 0 ;
  public type : string = '';
  public pro : Product  ;
  public editpro : Product ;
  public contracts: Product[] = [
  
  ];
  public store: Product[] = [ ] ;
readonly baseurl = 'http://localhost:3000/Product';
private url = 'http://localhost:3000/product/postpro';
  constructor(private http: HttpClient) { }

 getProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(this.baseurl);
 }
 postpro(user) {
  return this.http.post<Product[]>(this.baseurl, user) ;
}
putEmployee(pro) {
  console.log(pro);
  return this.http.put(this.baseurl + `/${pro._id}`, pro);
}
deleteEmployee(_id: string) {
  return this.http.delete(this.baseurl + `/${_id}`);
}
}
