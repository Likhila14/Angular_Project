import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../products/shared/proservice.service';
export class Product{
  pic: string;
}
export class Products{
  pic: string;
  name: string;
  position: string;
  description: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 
 
  constructor(private proservie: ProserviceService ) { }
  contract: Product[] = [
    {pic: '/assets/patner1.jpg'},
    {pic: '/assets/patner2.jpg'},
    {pic: '/assets/patner3.jpg'},
    {pic: '/assets/patner4.jpg'},


  ] ;
  contract1: Products[] = [
    {pic: '/assets/managementw.jpg', name : 'Meena Ganesh', position: 'MD & CEO ', description: 'Meena is one of India\'s foremost business leaders and most successful entrepreneurs with nearly three decades of experience in industries including healthcare, consulting, technology, outsourcing, education & e-commerce.'},
    {pic: '/assets/managementm1.jpg', name : 'Ganesh Krishnan', position: 'Chairman ', description: 'Ganesh is a successful serial entrepreneur with four successful green field ventures and exits. His last venture, TutorVista was acquired by US and UK listed education leader Pearson for $ 213 MM.'},
    {pic: '/assets/mangementm2.jpg',  name : 'Vaibhav Tewari', position: 'Director ', description: 'Vaibhav has over 18 year\'s diversified experience in building new businesses across Industries such as Business Process Outsourcing, Technology and Supply Chain Management'},
  ] ;
  ngOnInit(): void {

  }

}
