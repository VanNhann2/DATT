import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private urlOwner = environment.apiURL + "/manager/"

  getTotal(request) {
    return this.http.get<any>(this.urlOwner +'total', {
      params : request
    });
  }

  getDataChatByDay(request){
    return this.http.get<any>(this.urlOwner +'datachartbyday', {
      params : request
    });
  }

  getDataChatByHour(request){
    return this.http.get<any>(this.urlOwner +'datachartbyHour', {
      params : request
    });
  }
}
