import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  
  constructor(private http: HttpClient) { }
  private url = environment.apiURL + "/user/"

  register(form) {
    return this.http.post<any>(this.url +'register', form);
  }

  login(form) {
    return this.http.post<any>(this.url +'login', form);
  }

  getProfileUser(username) {
    return this.http.get<any>(this.url +'register/'+ username);
  }

  logout() {
    return this.http.get<any>(this.url +'logout', );
  }

  //owner
  getUser(id) {
    return this.http.get<any>(this.url + id);
  }

  updateUser(id, form) {
    return this.http.post<any>(this.url +'update/'+id, form);
  }
}
