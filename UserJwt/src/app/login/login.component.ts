import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { UserserviceService } from '../userservice.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userserviceService: UserserviceService) { }

  onSubmit() 
  {
    console.log("hi");
    if (this.loginForm.invalid) 
    {
      return;
    }
    console.log(this.loginForm);
    const loginPayload = 
    {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.userserviceService.login(loginPayload).subscribe(data =>
    {
      // if(data.status === 200) {
        console.log(data);
        console.log( data['token']);
      window.localStorage.setItem('token', data['token']);
        this.router.navigate(['users']);
      // }else {
      //    this.invalidLogin = true;
      //    alert(data.message);
      //  }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
