import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PatnerComponent } from './patner/patner.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: 'products', component : ProductsComponent ,
  canActivate: [AuthGuard]
},
     { path: 'login', component: LoginComponent} ,
     { path: 'signin', component : SigninComponent },
     { path: '', component : HomepageComponent },
     { path: 'aboutus', component : AboutusComponent },
     { path: 'contactus', component : ContactusComponent },
     { path: 'book', component : BookComponent },
     { path: 'patners', component : PatnerComponent },
     { path: 'payment', component : PaymentComponent },
     { path: 'myprofile', component : MyprofileComponent ,
     canActivate: [AuthGuard]
   },
   { path: 'mycart', component : MycartComponent ,
     canActivate: [AuthGuard]
   },
     {path : '' , redirectTo: '/products', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, LoginComponent, SigninComponent,
  HomepageComponent, AboutusComponent, ContactusComponent , PatnerComponent, BookComponent   ];
