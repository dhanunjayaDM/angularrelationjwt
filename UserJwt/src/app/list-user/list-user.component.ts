import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:any;

  constructor(private router: Router, private userserviceService: UserserviceService) { }

  ngOnInit() {
    console.log(window.localStorage.getItem('token'));
    if(!window.localStorage.getItem('token')) 
    {
      this.router.navigate(['login']);
      return;
    }


    this.userserviceService.getUsers()
      .subscribe( data => {
        console.log(data)
          this.users=data;
      });
  }

  deleteUser(user: User): void {
    this.userserviceService.deleteUser(user.id)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['users']);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edituser']);
  };

  addUser(): void {
    this.router.navigate(['user']);
  };
}
