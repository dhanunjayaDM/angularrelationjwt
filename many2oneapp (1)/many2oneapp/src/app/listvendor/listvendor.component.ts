import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-listvender',
  templateUrl: './listvendor.component.html',
  styleUrls: ['./listvendor.component.css']
})
export class ListvenderComponent implements OnInit {
  vendors:any;
  constructor(private router: Router, private vendorService :VendorService) { }

  

  ngOnInit() {
    this.vendorService.getVendors()
      .subscribe( data => {
        this.vendors = data;
      });
  }
  // editVendor(vendor){
  //   localStorage.removeItem("editUserId");
  //   localStorage.setItem("editUserId", vendor.vendorId.toString());
  //   this.router.navigate(['edit-vendor']);

  // }
  // deleteVendor(vendor){
  //   this.vendorService.deleteVendor(vendor.vendorId)
  //     .subscribe();
  // }

  addVendor(): void {
    this.router.navigate(['add-vendor']);
  };

}
