import { Component, OnInit } from '@angular/core';
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";


@Component({
  selector: 'app-squeaker',
  templateUrl: './squeaker.component.html',
  styleUrls: ['./squeaker.component.css']
})
export class SqueakerComponent implements OnInit {
  squeakers: Squeaker[] = [];

  constructor(private squeakerService: SqueakerService) {
    this.squeakerService.findAll().subscribe(
      (data: Squeaker[]) => {
        this.squeakers = data;
      }
    )
  }

  ngOnInit(): void {
  }

}
