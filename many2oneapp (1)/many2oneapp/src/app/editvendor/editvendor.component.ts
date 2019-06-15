import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editvender',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvenderComponent implements OnInit {
  vendor: Vendor;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private vendorService:VendorService) { }

  ngOnInit() {
    // let userId = localStorage.getItem("editUserId");
    // if(!userId) {
    //   alert("Invalid action.")
    //   this.router.navigate(['list-vendor']);
    //   return;
    // }
    // this.editForm = this.formBuilder.group({
    //   vendorId: [],
    //   vendorName: ['', Validators.required]
    // });
    // this.vendorService.getVendorById(+userId)
    //   .subscribe( data => {
    //     this.editForm.setValue(data);
    //   });
  }

  // onSubmit() {
  //   this.vendorService.updateVendor(this.editForm.value)
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['list-vendor']);
  //       },
  //       error => {
  //         alert(error);
  //       });
  // }

}
