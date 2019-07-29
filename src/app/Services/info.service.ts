import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public EndPoint = "http://localhost:3000"
  
  constructor(private http:HttpClient) { }

  getInformation(): Observable<any> {
    console.log(this.EndPoint+"/get-all-info")
    return this.http.get("http://localhost:3000/get-all-info");
  }
}
