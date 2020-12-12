import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userid ;



  private signinurl = 'http://localhost:3000/api/register' ;

  private loginurl = 'http://localhost:3000/api/login' ;

 private idurl = 'http://localhost:3000/api' ;

 private loginurls = 'http://localhost:3000/admin/login' ;


  // tslint:disable-next-line: typedef
  getToken() {
    throw new Error('Method not implemented.');
  }



  constructor(private http: HttpClient ,  private router: Router) { }

   // tslint:disable-next-line: typedef
   registerUser(user) {
     return this.http.post<any>(this.signinurl, user) ;
   }

   // tslint:disable-next-line: typedef
   loginUser(user) {
    return this.http.post<any>(this.loginurl, user ) ;
   }

   // tslint:disable-next-line: typedef
   loggedIn() {
    return !!localStorage.getItem('token') ;
  }
  // tslint:disable-next-line: typedef
  loggedIns(){
    return !!localStorage.getItem('Admin') ;
  }
// tslint:disable-next-line: typedef
etToken() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
    localStorage.removeItem('Admin');
    this.router.navigate(['../']);
  }
  // tslint:disable-next-line: typedef
  updateproduct(product) {
    console.log(this.userid._id) ;
    return this.http.put(this.idurl + `/${this.userid._id}`, product);
  }

  loginAdmin(user) {
    return this.http.post<any>(this.loginurls, user ) ;
   }
  
}
