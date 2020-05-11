import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HistoryPitchService {

  constructor(private http: HttpClient) { }
  private historyPitch = environment.apiURL + "/pitch/history/:id"

  findPitch(): Observable<any> {
    return this.http.get<any>(this.historyPitch).pipe(
      tap(received => received),
      catchError(error => of([]))
    )
  }
}
