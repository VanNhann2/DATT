import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SubpitchService{

  constructor(private http: HttpClient) { }
  private url = environment.apiURL + "/manager/subpitch/"

  getSubPitch(id) {
    return this.http.get<any>(this.url + 'list/'+ id);
  }
  //owner
  create(form) {
    return this.http.post<any>(this.url +'create', form);
  }
  update(id, form) {
    return this.http.put<any>(this.url + 'update/'+ id , form);
  }
  delete(id) {
    return this.http.delete<any>(this.url + 'delete/'+ id);
  }
}
