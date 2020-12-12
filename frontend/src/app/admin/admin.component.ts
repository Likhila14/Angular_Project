import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../products/shared/proservice.service';
import { Product } from '../products/shared/product.model' ;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public contracts ;
  constructor(private proservie: ProserviceService ) { }

  ngOnInit(): void {
    this.proservie.getProducts().subscribe(data => this.contracts = data);
  }
  onEdit(product){
    this.proservie.editpro = product ;
  }
  refreshproductList() {
    this.proservie.getProducts().subscribe((res) => {
      this.proservie.contracts = res as Product[];
    });
  }

  
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.proservie.deleteEmployee(_id).subscribe((res) => {
        this.refreshproductList();
       alert('deleted successfully');
      });
    }
  }
}
