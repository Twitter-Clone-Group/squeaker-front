import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Squeaker} from "../models/squeaker";

@Injectable({
  providedIn: 'root'
})
export class SqueakerService {
  private squeakerUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.squeakerUrl = 'http://localhost:8080/squeaker';
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

    public findAll(): Observable<Squeaker[]> {
    return this.http.get<Squeaker[]>(this.squeakerUrl + `/all`);
  }
}
