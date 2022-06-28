import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-messagereuest',
  templateUrl: './messagereuest.component.html',
  styleUrls: ['./messagereuest.component.css']
})

export class MessagereuestComponent implements OnInit {
  private _hubConnection: HubConnection | undefined;
  public async: any;
  message = '';
  messages: string[] = [];
  constructor() { }
  public sendMessage(): void {
    const data = `Sent: ${this.message}`;

    if (this._hubConnection) {
      this._hubConnection.invoke('Send', data);
     
    }
    console.log(data)
    this.messages.push(data);
  }
   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  ngOnInit(): void {
    
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://api.anyhelp.in.net/notification-hub')
      //.configureLogging(signalR.LogLevel.Information)
      .build();

    this._hubConnection.start().catch(err => console.error(err.toString()));

    this._hubConnection.on('OnNotification', (data: any) => {
      
      if(data != null || data != '') 
      {
        console.log(data)
      }
     
      //const received = `Received: ${data}`;
      //this.messages.push(received);
    });
  }

}
