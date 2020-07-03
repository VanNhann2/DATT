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
  private url = environment.apiURL + "/pitch/"

  bookPitch(form) {
    return this.http.post<any>(this.url +'bookPitch', form);
  }
  historyBook(id) {
    return this.http.get<any>(this.url +'bookPitch/' + id);
  }
}
