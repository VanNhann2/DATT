import { Injectable } from '@angular/core';
import { Observable, observable, of, Timestamp } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from "../../environments/environment"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  private url = environment.apiURL + "/"

  getCity() {
    return this.http.get<any>(this.url +'city/')
  }

  // getDbOrgById(orgId: String): Observable<DbOrganization> {
  //   return this.http.get<DbOrganization>(this.getOrgURL + "/" + orgId).pipe(
  //     tap(received => {
  //     }),
  //     catchError(err => of(null))
  //   )
  // }
  getDistrict(request) {
    return this.http.get<any>(this.url + 'district',{
      params: request
    });
  }
}
