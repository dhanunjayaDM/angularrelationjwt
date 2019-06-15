import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor';
import { UserserviceService } from './userservice.service';
import { Router, Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'users',component:ListUserComponent},
  {path:'user',component:AddUserComponent},
  {path:'edituser',component:EditUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    // EditUserComponent,
    ListUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserserviceService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
