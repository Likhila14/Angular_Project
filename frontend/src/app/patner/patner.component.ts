import { Component, OnInit } from '@angular/core';
export class Product{
  pic: string;
}
@Component({
  selector: 'app-patner',
  templateUrl: './patner.component.html',
  styleUrls: ['./patner.component.css']
})
export class PatnerComponent implements OnInit {
  contract: Product[] = [
    {pic: '/assets/patner1.jpg'},
    {pic: '/assets/patner2.jpg'},
    {pic: '/assets/patner3.jpg'},
    {pic: '/assets/patner4.jpg'},
    {pic: '/assets/patner5.jpg'},
    {pic: '/assets/patner 6.jpg'},
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
