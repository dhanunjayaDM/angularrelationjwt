import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {
  customers:any;
  constructor(private router: Router,private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
    .subscribe( data => {
      this.customers = data;
    });
  }

  addCustomer(){
    this.router.navigate(['add-customer']);
  }
  deleteCustomer(customer :Customers){
    this.customerService.deleteCustomer(customer.customerId)
    .subscribe();
  }

  editCustomer(customer :Customers){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", customer.customerId.toString());
    this.router.navigate(['edit-customer']);
  }

}
