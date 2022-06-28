import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import {HeaderComponent} from './header/header.component';
//import {FooterComponent} from './footer/footer.component';
import { PhonemaskDirective } from './../../directive/phonemask.directive';
import { MessagereuestComponent } from './../../modules/layout/messagereuest/messagereuest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyerinqueryComponent } from './buyerinquery/buyerinquery.component';
import { SellerregisterComponent } from './sellerregister/sellerregister.component';
@NgModule({
  declarations: [
   // HeaderComponent,
    //FooterComponent,
    
  
    DashboardComponent,
   BuyerinqueryComponent,
   SellerregisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
   // PhonemaskDirective,
   // MessagereuestComponent
  ]
})
export class LayoutModule { }
