import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }
  private url = environment.apiURL + "/user/"

  register(form) {
    return this.http.post<any>(this.url +'register', form);
  }

  login(form) {
    return this.http.post<any>(this.url +'login', form);
  }

  logout() {
    return this.http.get<any>(this.url +'logout', );
  }

  getUser() {
    return this.http.get<any>(this.url +'getUser',{
      observe: 'body',
      params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
  getProfileUser(id) {
    return this.http.get<any>(this.url + id);
  }

  updateUser(id, form) {
    return this.http.post<any>(this.url +'update/'+id, form);
  }
}
