import { Component, OnInit } from '@angular/core';
import { VenderServiceService } from 'src/app/services/vender-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vender',
  templateUrl: './list-vender.component.html',
  styleUrls: ['./list-vender.component.css']
})
export class ListVenderComponent implements OnInit {

  venders:any;
  constructor(private venderServiceService :VenderServiceService,private router:Router) { }

  ngOnInit() {
    this.venderServiceService.getVenders().subscribe((data)=>{this.venders=data})
  }
  updateVender(vender:Vender){
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", vender.vendorId.toString());
    this.router.navigate(['/editvender'])
  }
  deleteVender(vender:Vender){
    this.venderServiceService.deleteVender(vender.vendorId).subscribe(()=>{
      this.router.navigate(['/listvender'])});
  }
  addVender(){
    this.router.navigate(['/addvender']);
  }


}
