import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userserviceService: UserserviceService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    console.log(userId)
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['users']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.userserviceService.getUserById(+userId)
      .subscribe( data => {
        console.log(data);
        this.editForm.patchValue(data);
      });
  }

  onSubmit() {
    this.userserviceService.updateUser(this.editForm.value)
      .pipe()
      .subscribe(
        data => {
            this.router.navigate(['users']);
        },
        error => {
          alert(error);
        });
  }

}
