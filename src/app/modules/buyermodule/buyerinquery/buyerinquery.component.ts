import { Component, OnInit } from '@angular/core';
import { GeneralserviceService } from 'src/app/Services/generalservice.service';
import { MenuItem } from "primeng/api";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";
import { FilterService } from "primeng/api";
import {
  FormBuilder, FormGroup, FormControl,
  Validators
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-buyerinquery',
  templateUrl: './buyerinquery.component.html',
  styleUrls: ['./buyerinquery.component.css'],
  providers: [FilterService]
})
export class BuyerinqueryComponent implements OnInit {
  filteredlistcategory: any[];
  filteredlocation: any[];
  apiName: string = "";
  BuyerInqueryForm: FormGroup;
  isCustomLocation: boolean = false;

  constructor(private configservice: GeneralserviceService,
    private filterService: FilterService,
    private http:HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.declareForm();
    this.AloowLocation();
    debugger
    var test = this.http.request;

  }
  declareForm() {
    this.BuyerInqueryForm = this.formBuilder.group({
      id_Token: [0],
      categoryId: [0, Validators.required],
      fullname: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });
  }
  AloowLocation() {
    this.configservice.getPosition().then(pos => {
      this.BuyerInqueryForm.controls["latitude"].setValue(`${pos.lng}`);
      this.BuyerInqueryForm.controls["longitude"].setValue(`${pos.lat}`);
      //console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }
  filterGroupedLocation(event: any) {
    let query = event.query;
    let filteredGroups: any = [];
    this.configservice.getmaplocation(query)
      .subscribe(
        data => {
          let items: any = [];
          items = data.data;

          for (let optgroup of items) {
            let filteredSubOptions = this.filterService.filter(
              [optgroup],
              ["display_name"],
              query,
              "contains"
            );
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push({
                label: optgroup["display_name"],
                value: optgroup["lat"] + ',' + optgroup["lon"],
                items: filteredSubOptions
              });
            }
          }
          this.filteredlocation = filteredGroups;
        });
  }
  filteredGroups: any[];
  filterGroupedCategory(event: any) {
    let query = event.query;
    let filteredGroups: any = [];

    this.apiName = "User/GetSearchCaltegory?Search=" + query;
    this.configservice.getRecordservice(this.apiName)
      .subscribe(
        data => {
          var jsonData = JSON.parse(JSON.stringify(data.data));
          if (jsonData.success) {
            let items = [];
            items = [jsonData.output];
            for (let optgroup of items) {
              let filteredSubOptions = this.filterService.filter(
                optgroup,
                ["categoryName"],
                query,
                "contains"
              );
              if (filteredSubOptions && filteredSubOptions.length) {
                filteredGroups.push({
                  label: optgroup[0]["categoryName"],
                  value: optgroup[0]["categoryId"],
                  items: filteredSubOptions
                });
              }
            }
            this.filteredlistcategory = filteredGroups;
          }
        });
  }
  selectedLocation(event: any) {
    if (event.value != "") {
      var locationlatlon = (event.value).split(",", 2)
      debugger
      this.BuyerInqueryForm.controls["latitude"].setValue(locationlatlon[0]);
      this.BuyerInqueryForm.controls["longitude"].setValue(locationlatlon[1]);
      //alert(JSON.stringify(this.BuyerInqueryForm.value));
    }
  }
  submitted: boolean = false;
  changeLocation(event: any) {
    this.BuyerInqueryForm.controls["latitude"].setValue('');
    this.BuyerInqueryForm.controls["longitude"].setValue('');
    if (event.target.value == 'default') {
      this.AloowLocation();
      this.isCustomLocation = false;
    }
    else {
      this.isCustomLocation = true;
    }
  }

  public submit() {
    this.submitted = true;
    try {
      debugger
      if (this.BuyerInqueryForm.invalid) {
        return;
      }

      this.apiName = "User/CreateInquiry";
      this.configservice.postSaveservice(this.BuyerInqueryForm.value, this.apiName)
        .subscribe(
          data => {
            alert(data)
          })
    } catch (error) {
    }
  }

}
