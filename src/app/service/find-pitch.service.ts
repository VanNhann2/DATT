import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FindPitchService {

  constructor(private http: HttpClient) { }

  private findPicth = environment.apiURL + "/pitch/find"

  findPitch(pitch: string, date: number, time: number, district: string): Observable<any> {
    return this.http.get<any>(this.findPicth + "?pitch=" + pitch + "&date=" + date + "&time=" + time + "&district=" + district).pipe(
      tap(received => received),
      catchError(error => of([]))
    )
  }


}
