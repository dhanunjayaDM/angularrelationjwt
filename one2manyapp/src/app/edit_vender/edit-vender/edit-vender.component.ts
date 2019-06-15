import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray ,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { VenderServiceService } from 'src/app/services/vender-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-vender',
  templateUrl: './edit-vender.component.html',
  styleUrls: ['./edit-vender.component.css']
})
export class EditVenderComponent implements OnInit {
  venderForm: FormGroup;
  constructor(private fb :FormBuilder,private venderServiceService :VenderServiceService, private router :Router) { }
  
  ngOnInit() {
    let userId=window.localStorage.getItem("editUserId");
    console.log(userId)
    if(!userId){
      alert("invalid action")
      this.router.navigate(['listvender']);
      return;
    }

   

    this.venderForm=this.fb.group({
      vendorId:[''],
      vendorName:['',Validators.required],
      children:this.fb.array([
        this.addCustomerFormGroup()
      ])
    });
   this.venderServiceService.getVenderById(+userId).subscribe((data)=>{
    // this.venderForm.patchValue(data)
      this.venderForm.patchValue({
       vendorId:data['vendorId'],
        vendorName: data['vendorName']
      });
      this.venderForm.setControl('children', this.setExistingCustomers(data['children']));
      });    
  }

  setExistingCustomers(children:Customers[]):FormArray
  {
    const formArray = new FormArray([]);
    children.forEach((s:Customers) => {
    formArray.push(this.fb.group({
      customerId: s['customerId'],
      customerName: s['customerName'],
    }));
  });
    return formArray;
  }

OnSubmit(){
  console.log(this.venderForm)
  console.log(this.venderForm.value);
  this.venderServiceService.saveVender(this.venderForm.value).subscribe((data) => data);
  this.router.navigate(['listvender']);
}
removeCustomerButtonClick(index:number){
  (<FormArray>this.venderForm.get('children')).removeAt(index);
}

addCustomerButtonClick():void{
  (<FormArray>this.venderForm.get('children')).push(this.addCustomerFormGroup());
}
addCustomerFormGroup():FormGroup{
  return this.fb.group({
  customerId:[''],
  customerName:['',Validators.required]
 });
}

}
