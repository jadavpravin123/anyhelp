import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http: HttpClient) { }

  send(data: Object): Observable<any> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    };

    return this.http.post(
      'https://your-app-backend-hostname.your-domain.com/your-app-backend-path', 
      data, options);
  }
}
