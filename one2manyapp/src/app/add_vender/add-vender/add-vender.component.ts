import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray ,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { VenderServiceService } from 'src/app/services/vender-service.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-vender',
  templateUrl: './add-vender.component.html',
  styleUrls: ['./add-vender.component.css']
})
export class AddVenderComponent implements OnInit {

  constructor(private fb :FormBuilder,private venderServiceService :VenderServiceService,private router: Router) { }
  venderForm: FormGroup;
  ngOnInit() {
    this.venderForm=this.fb.group({
      vendorId:[''],
      vendorName:['',Validators.required],
      children:this.fb.array([
        this.addCustomerFormGroup()
      ])
    });
  }

  addCustomerFormGroup():FormGroup{
      return this.fb.group({
      customerId:[''],
      customerName:['',Validators.required]
     });
  }

  OnSubmit(){
    console.log(this.venderForm)
    console.log(this.venderForm.value);
    this.venderServiceService.saveVender(this.venderForm.value).subscribe(() => this.router.navigate(['listvender']));
   
  }

  addCustomerButtonClick():void{
    (<FormArray>this.venderForm.get('children')).push(this.addCustomerFormGroup());
  }
  removieCustomerButtonClick(index:number){
    (<FormArray>this.venderForm.get('children')).removeAt(index);

  }


}
