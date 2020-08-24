import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CovidDataService {

  constructor(private _http: HttpClient) { }

  historicalData() {
    return this._http.get("https://bu-covid19-api.herokuapp.com/historical")
      .pipe(map(result => result));
  }

}
