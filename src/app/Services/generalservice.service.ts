import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of, Observable, throwError, Subject, } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ENV_CONFIG, EnvironmentConfig } from '../environment-config';
//Config

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  public apiUrl: string;
  public sendotpapi: string;
  public mapLocation: string;
  //@Inject(APP_CONFIG) private config: AppConfig
  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig,
    private _http: HttpClient) {
    this.apiUrl = `${config.environment.baseUrl}`;
    this.sendotpapi = `${config.environment.sendOTPURL}`;
    this.mapLocation = `${config.environment.mapurlAddress}`;
  }
  // Public Properties


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }

  options_: any = {
    //body: content_,
    //observe: "response",
    //responseType: "blob",
    headers: new HttpHeaders({
      "Content-Type": "multipart/form-data",
      "Accept": "application/json"
    })
  };

  public getRecordservice(apiName: any): Observable<any> {
    //options

    return this._http.get<any>(`${this.apiUrl}` + apiName)
      .pipe(map(response => {
        return {
          data: response,
        };
      }, catchError(this.handleError) //error => console.log(this.handleError)
      ));
  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {      
      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {          
          resolve({ lng: '', lat: '' });
          reject(err);
        });
    });
  }
  /** POST: add a new method */
  public postSaveservice(CommonMst: any, apiName: any): Observable<any> {

    return this._http.post<any>(`${this.apiUrl}` + apiName, CommonMst, { headers: this.options_ })
      .pipe(map(user => {
        return {
          data: user,
        };
      }, catchError(this.handleError)));
  }
  //send Otp
  public getotpcodeapi(apiName: any) {
    return this._http.get(`${this.sendotpapi}` + apiName, { responseType: 'text' })
      .pipe(map(user => {
        return {
          data: user,
        };
      }, catchError(this.handleError)));
  }
  //map address
  public getmaplocation(apiName: any) {
    return this._http.get(`${this.mapLocation}` + apiName, { responseType: 'json' })
      .pipe(map(user => {
        return {
          data: user,
        };
      }, catchError(this.handleError)));
  }
  public updateRecordservice(apiName: any) {
    //return this._http.put(`${this.apiurl}/customers/${customer.id}`, customer);

    let promise = new Promise((resolve, reject) => {
      this._http.get(`${this.apiUrl}` + apiName)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }, catchError(this.handleError));
    })
    return promise;

  }

  public deleteRecordservice(apiName: any, id: string) {
    return this._http.delete(`${this.apiUrl}/` + apiName + `/${id}`);
  }
  //Upload File


  postFile(fileToUpload: File, apiName: any): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this._http.post<any>(`${this.apiUrl}` + apiName, formData)
      .pipe(map(user => {
        return {
          data: user,
        };
      }, catchError(this.handleError)));

  }
  //this.http.post('http://localhost:52027/Api/ServicesCategoryAPI/UploadFile', formData, { reportProgress: true, observe: 'events' })
  //.subscribe(event => {
  //  alert(JSON.stringify(event))
  //  //if (event.type === HttpEventType.UploadProgress)
  //  //  this.progress = Math.round(100 * event.loaded / event.total);
  //  //else if (event.type === HttpEventType.Response) {
  //  //  this.message = 'Upload success.';
  //  //  this.onUploadFinished.emit(event.body);
  //  //}
  //});
  //DownloadFile
  // downloadPDF(url): Observable<any> {
  //   return this._http.get(`${this.apiUrl}` + url, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/pdf',  //text/csv
  //     }), responseType: 'blob'
  //   }).pipe(
  //     map(
  //       (res) => {
  //         //return { res: res }
  //         return new Blob([res], { type: 'application/pdf' })
  //       })
  //   );
  // }

  //Error Hendler
  handleError(error: any) {
    debugger
    //this.logger.log(error);
    //this.logger.log(error.json().error);
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
