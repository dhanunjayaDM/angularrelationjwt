import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VenderServiceService {

  baseurl="http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getVenders(){
    return this.http.get(this.baseurl+ "getVenders");
  }
  getVenderById(id:number){
    return this.http.get( this.baseurl+ "vender/"+id);
  }

  saveVender(vender:Vender){
    return this.http.post(this.baseurl+"create",vender);
  }
  updateVender(vender:Vender){
    return this.http.put(this.baseurl+"/vender/"+vender.vendorId,vender);
  }
  deleteVender(id:number){
    return this.http.delete(this.baseurl+ "/vender/"+id);
  }
}
