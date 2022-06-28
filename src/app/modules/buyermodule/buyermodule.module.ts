import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerinqueryComponent } from './buyerinquery/buyerinquery.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [BuyerinqueryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AutoCompleteModule,
    BrowserAnimationsModule
  ]
})
export class BuyermoduleModule { }
