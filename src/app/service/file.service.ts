import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url = environment.apiURL
  constructor(private http: HttpClient) { }

  saveFile(formData) {
    console.log(formData)
    return this.http.post<any>(this.url+'/file',formData)
  }
}
