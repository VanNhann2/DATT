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
  private editUser = environment.apiURL + "/pitch/edit/:id"

  findPitch(): Observable<any> {
    return this.http.get<any>(this.editUser).pipe(
      tap(received => received),
      catchError(error => of([]))
    )
  }
}
