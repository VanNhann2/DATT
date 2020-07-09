import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PitchService {

  constructor(private http: HttpClient) { }

  private url = environment.apiURL + "/pitch/"
  private urlOwner = environment.apiURL + "/manager/pitch/"

  findPitch(request: any) {
    return this.http.get<any>(this.url+"list", {
      params: request
    });
  }
  getPitchUser(id) {
    return this.http.get<any>(this.url + 'list/'+ id);
  }
  
  //owner
  listPitch(request) {
    return this.http.get<any>(this.urlOwner + 'list',{
      params:request
    });
  }
  getPitch(id) {
    return this.http.get<any>(this.urlOwner + 'list/'+ id);
  }
  create(form) {
    return this.http.post<any>(this.urlOwner +'create', form);
  }
  update(id, form) {
    return this.http.put<any>(this.urlOwner + 'update/'+ id, form);
  }
}
