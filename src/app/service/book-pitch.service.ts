import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookPitchService {

  constructor(private http: HttpClient) { }
  private bookPicth = environment.apiURL + "/pitch/bookPitch"

  findPitch(): Observable<any> {
    return this.http.get<any>(this.bookPicth).pipe(
      tap(received => received),
      catchError(error => of([]))
    )
  }
}
