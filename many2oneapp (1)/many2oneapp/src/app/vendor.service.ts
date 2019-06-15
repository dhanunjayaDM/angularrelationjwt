import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';

  getVendors() {
    return this.http.get(this.baseUrl + "/getVenders");
  }

  // getVendorById(id: number) {
  //   return this.http.get(this.baseUrl + '/' + id);
  // }

  createVendor(vendor: Vendor) {
    return this.http.post(this.baseUrl+ "createVender", vendor);
  }

  // updateVendor(vendor:Vendor) {
  //   return this.http.put(this.baseUrl + '/' + vendor.id, vendor);
  // }

  // deleteVendor(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
}
