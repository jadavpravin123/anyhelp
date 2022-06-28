import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelleinfoComponent } from './selleinfo/selleinfo.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelleinfoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SellermoduleModule { }
