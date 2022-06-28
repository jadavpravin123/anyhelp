import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormControl,
  Validators
} from '@angular/forms';

import { GeneralserviceService } from 'src/app/Services/generalservice.service';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor(private configservice: GeneralserviceService,    
    private formBuilder: FormBuilder) { }
  PaymentForm: FormGroup;
  ngOnInit(): void {
    alert(1111)
    //this.declareForm();
  }
  declareForm() {
    this.PaymentForm = this.formBuilder.group({
      id_Token: [0],
      key: ['', Validators.required],
      firstname: ['', Validators.required],
      surl: ['', Validators.required], 
      phone: ['', Validators.required],
      hash:['c2522a8d561e7c52f7d6b2d46c96b924afac8554313af4b80edef3e237e179bd6e2020e8c548060306d9fa2cf5c75c35205bcc4b09bcf5b9a9becec8de2952d0', Validators.required],
      curl:['',Validators.required],
      furl:['',Validators.required],
      txnid:['',Validators.required],
      productinfo:['',Validators.required],
      amount:['',Validators.required],
      udf5:['',Validators.required]
    });
  }

  onSubmit(){
    
  }
}
