import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl: string = 'http://localhost:8090/';

  constructor(private http: HttpClient) { }
  login(loginPayload)  {
    return this.http.post('http://localhost:8090/'+ 'token/generate-token', loginPayload).pipe();
  };

  getUsers()  {
  return this.http.get(this.baseUrl + "/users").pipe();
  }
  getUserById(id: number) {
    return this.http.get(this.baseUrl+"/users/" + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl+"/signup", user);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl + "/users/"+ user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + "/users/"+ id);
  }


  }

