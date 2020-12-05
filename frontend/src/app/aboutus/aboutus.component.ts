import { Component, OnInit } from '@angular/core';
export class Product{
  pic: string;
  name: string;
  position: string;
  description: string;
}
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {


  contract1: Product[] = [
    {pic: '/assets/managementw.jpg', name : 'Meena Ganesh', position: 'MD & CEO ', description: 'Meena is one of India\'s foremost business leaders and most successful entrepreneurs with nearly three decades of experience in industries including healthcare, consulting, technology, outsourcing, education & e-commerce.'},
    {pic: '/assets/managementm1.jpg', name : 'Ganesh Krishnan', position: 'Chairman ', description: 'Ganesh is a successful serial entrepreneur with four successful green field ventures and exits. His last venture, TutorVista was acquired by US and UK listed education leader Pearson for $ 213 MM.'},
    {pic: '/assets/mangementm2.jpg',  name : 'Vaibhav Tewari', position: 'Director ', description: 'Vaibhav has over 18 year\'s diversified experience in building new businesses across Industries such as Business Process Outsourcing, Technology and Supply Chain Management'},
  ] ;
  contract2: Product[] = [
    {pic: '/assets/doctorm1.jpg' , name : 'Dr. Vishal Sehgal', position: 'Medical Director', description: 'Dr. Vishal Sehgal has over two decades of rich experience in Healthcare domain, both in Clinical Practice and Healthcare Management, across sectors – Hospitals, Corporates, Healthcare Start-ups.'},
    {pic: '/assets/doctorm2.jpg',  name : 'Dr Sanjay Bajpai', position: ' Clinical Head North & East', description: 'Dr. Sanjay Bajpai, has over 15 years of experience in the domain of critical care, emergency medicine and home healthcare. Prior to joining Portea, he was associated with Philips home care for over 18 months.'},
    {pic: '/assets/doctorw.jpg',  name : 'Dr. Kavitha S Manjunath', position: 'Clinical Head – Primary, Preventive & Elderly Care ',
    description: 'Dr Kavitha Manjunath has over 17 years of experience in management of infectious diseases, chronic diseases, palliative care, elderly care besides home healthcare.'},
  ];
  contract3: Product[] = [
    {pic: '/assets/xtrernal1.jpg',  name : 'Dr. Nagendra Swamy S.C', position: 'Medical Advisor, Portea', description: 'Dr. Nagendra Swamy S.C has over 30 years of rich experience in Health care management with various National and International Organizations in senior managerial positions &amp; Board positions.'},
    {pic: '/assets/xtrernal2.jpg',  name : 'Dr. K S Satish', position: 'Partner Doctor/Consultant ', description: 'MBBS, MD - Medicine, MRCP, FRCP (UK) Pulmonologist 34 Years of Experience Dr. K. S. Satish hails from Bangalore, he did his MBBS from JJM Medical College, Davangere securing First Class.'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
