import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
//import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent,
   // DashboardComponent
  ]
    ,
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule   
    
  ]
})
export class AuthenticationModule { }
