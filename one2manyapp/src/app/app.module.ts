import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListVenderComponent } from './list_vender/list-vender/list-vender.component';
import { EditVenderComponent } from './edit_vender/edit-vender/edit-vender.component';
import { AddVenderComponent } from './add_vender/add-vender/add-vender.component';
const routes:Routes=[
  {path:'listvender',component:ListVenderComponent},
  {path:'editvender',component:EditVenderComponent},
  {path:'addvender',component:AddVenderComponent},
  
]



@NgModule({
  declarations: [
    AppComponent,
    ListVenderComponent,
    EditVenderComponent,
    AddVenderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
