import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private squeakerId = new BehaviorSubject<number>(1);
  currentSqueakerId = this.squeakerId.asObservable();

  constructor() { }

  changeCurrentSqueakerId(id: number) {
    this.squeakerId.next(id);
  }
}
