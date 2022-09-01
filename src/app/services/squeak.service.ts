import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Squeak} from "../models/squeak";
import {SqueakDTO} from "../models/squeakDTO";


@Injectable({
  providedIn: 'root'
})
export class SqueakService {
  private squeakUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.squeakUrl = 'http://localhost:8080/squeak';
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

  public findAll(): Observable<Squeak[]> {
    return this.http.get<Squeak[]>(this.squeakUrl + `/all`);
  }

  public save(squeakDTO: SqueakDTO): Observable<Squeak> {
    return this.http.post<Squeak>(this.squeakUrl, squeakDTO);
  }
}
