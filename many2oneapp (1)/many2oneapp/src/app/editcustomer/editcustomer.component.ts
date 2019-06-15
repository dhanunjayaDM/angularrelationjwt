import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {


  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private customerService:CustomerService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-customer']);
      return;
    }
    console.log(userId)
    this.editForm = this.formBuilder.group({
      customerId: [],
      customerName: ['', Validators.required],
      parent: this.formBuilder.group({
        vendorId:['']
      })
    });
    this.customerService.getCustomerById(+userId)
      .subscribe( data => {
        this.editForm.patchValue(data);
      });
  }

  onSubmit() {
    this.customerService.updateCustomer(this.editForm.value)
      .subscribe(
        data => {
          this.router.navigate(['list-customer']);
        },
        error => {
          alert(error);
        });
  }

}
