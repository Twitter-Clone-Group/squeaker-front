import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Squeak} from "../models/squeak";
import {SqueakService} from "../services/squeak.service";
import {SqueakDTO} from "../models/squeakDTO";
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-squeak',
  templateUrl: './squeak.component.html',
  styleUrls: ['./squeak.component.css']
})
export class SqueakComponent implements OnInit {
  // @ts-ignore
  currentSqueaker: Squeaker;
  squeaks: Squeak[] = [];
  id = 0

  constructor(private squeakService: SqueakService, private dataService: DataService, private squeakerService: SqueakerService) {
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

  findAllSqueaks(): void {
    this.squeakService.findAll().subscribe(
      (data: Squeak[]) => {
        this.squeaks = data;
      }
    )
  }

  saveSqueak(sendForm: NgForm): void {
    const squeakDTO = new SqueakDTO(sendForm.value.content, this.currentSqueaker)
    this.squeakService.save(squeakDTO).subscribe();
    sendForm.control.reset()
  }

}
