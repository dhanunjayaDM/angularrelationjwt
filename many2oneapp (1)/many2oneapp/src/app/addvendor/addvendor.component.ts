import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-addvender',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvenderComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private vendorService:VendorService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      vendorId: [],
      vendorName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.vendorService.createVendor(this.addForm.value)
      .subscribe( (data) => {
        console.log(data);
        this.router.navigate(['list-vendor']);
      });
  }

}
