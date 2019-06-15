import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  parents:any;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private customerService:CustomerService,private vendorService:VendorService) { }
   
  ngOnInit() {
  
  this.vendorService.getVendors().subscribe((data)=>{this.parents=data,
    console.log(this.parents)
  });
  
    this.addForm = this.formBuilder.group({
      customerId: [],
      customerName: ['', Validators.required],
      parent: this.formBuilder.group({
        vendorId:['']
      })
      
    });
  }

  onSubmit() {
    console.log(this.addForm.value)
    this.customerService.createCustomer(this.addForm.value)
      .subscribe( () => {
        this.router.navigate(['list-customer']);
      });
  }

}
