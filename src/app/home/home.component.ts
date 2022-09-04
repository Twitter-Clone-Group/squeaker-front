import { Component, OnInit } from '@angular/core';
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ts-ignore
  currentSqueaker: Squeaker;
  id = 0;

  constructor(private squeakerService: SqueakerService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.currentSqueakerId.subscribe(
      id => this.id = id
    )

    this.squeakerService.findSqueakerById(this.id).subscribe(
      (data: Squeaker) => {
        this.currentSqueaker = data
      }
    )
  }

}
