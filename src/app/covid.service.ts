import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CovidDataService {

  constructor(private _http: HttpClient) { }

  getPositive() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx/Positive")
      .pipe(map(result => result));
  }

  getNegative() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx/Negative")
      .pipe(map(result => result));
  }

  getInvalid() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx/Invalid")
      .pipe(map(result => result));
  }

  getTotal() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx/Total")
      .pipe(map(result => result));
  }

  getMulti() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx-all")
      .pipe(map(result => result));
  }

  getInfectionStatus() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx-infections")
      .pipe(map(result => result));
  }

  getTime() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx-time")
      .pipe(map(result => result));
  }

  getPositiveCumulative() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/ngx-pos-cum")
      .pipe(map(result => result));
  }



}
