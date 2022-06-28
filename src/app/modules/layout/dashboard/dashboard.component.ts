import { Component, OnInit } from '@angular/core';
import { GeneralserviceService } from 'src/app/Services/generalservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private configservice: GeneralserviceService) { }

  ngOnInit(): void {
    debugger
    this.gatData();
  }
  apiName: string = '';
  notificationList: any;

  public gatData() {
    this.notificationList = [];
    this.apiName = "User/GetAllNotification?id_token=" + localStorage.getItem("token");
    this.configservice.getRecordservice(this.apiName)
      .subscribe(
        data => {
          var jsonData = JSON.parse(JSON.stringify(data.data));
          if (jsonData.success) {
            this.notificationList = JSON.stringify(jsonData.output)
          }
        });
  }

}
