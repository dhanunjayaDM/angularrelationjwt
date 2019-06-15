import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(this.baseUrl+"getCustomers");
  }

  getCustomerById(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  createCustomer(customers: Customers) {
    return this.http.post(this.baseUrl+ "create", customers);
  }

  updateCustomer(customer: Customers){
    return this.http.put(this.baseUrl + customer.customerId, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.baseUrl + id);
  }



}
