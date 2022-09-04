import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Squeaker } from "../models/squeaker";
import { SqueakerDTO } from "../models/squeakerDTO";

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

  public guestSqueaker(): Observable<Squeaker> {
    return this.http.get<Squeaker>(this.squeakerUrl + '1');
  }

  public findSqueakerById(id: number): Observable<Squeaker> {
    return this.http.get<Squeaker>(this.squeakerUrl + "/" + id);
  }

  public findSqueakerByUserName(username: string, password: string): Observable<Squeaker> {
    return this.http.get<Squeaker>(this.squeakerUrl +
      "?username=" + username +
      "&password=" + password);
  }

  public findAll(): Observable<Squeaker[]> {
    return this.http.get<Squeaker[]>(this.squeakerUrl + `/all`);
  }

  public save(squeakerDTO: SqueakerDTO): Observable<Squeaker> {
    return this.http.post<Squeaker>(this.squeakerUrl, squeakerDTO);
  }
}
