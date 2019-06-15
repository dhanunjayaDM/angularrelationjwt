import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListvenderComponent } from './listvendor/listvendor.component';
import { EditvenderComponent } from './editvendor/editvendor.component';
import { AddvenderComponent } from './addvendor/addvendor.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

const secondaryRoutes: Routes = [
  { path: 'list-vendor',  component: ListvenderComponent },
  { path: 'add-vendor', component: AddvenderComponent },
  { path: 'edit-vendor', component:EditvenderComponent },
  { path: 'list-customer',  component: ListcustomerComponent },
  { path: 'add-customer', component: AddcustomerComponent },
  { path: 'edit-customer', component:EditcustomerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListvenderComponent,
    EditvenderComponent,
    AddvenderComponent,
    ListcustomerComponent,
    AddcustomerComponent,
    EditcustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(secondaryRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
