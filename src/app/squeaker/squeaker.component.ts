import { Component, OnInit } from '@angular/core';
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";
import {NgForm} from "@angular/forms";
import {SqueakerDTO} from "../models/squeakerDTO";
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-squeaker',
  templateUrl: './squeaker.component.html',
  styleUrls: ['./squeaker.component.css']
})
export class SqueakerComponent implements OnInit {
  squeakers: Squeaker[] = [];
  // @ts-ignore
  currentSqueaker: Squeaker;

  constructor(private squeakerService: SqueakerService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.currentSqueakerId.subscribe(
      id => this.squeakerService.findSqueakerById(id)
        .subscribe(
          (data: Squeaker) => {
            this.currentSqueaker = data;
          }
        )
    )
  }

  findAllSqueakers(): void {
    this.squeakerService.findAll().subscribe(
      (data: Squeaker[]) => {
        this.squeakers = data;
      }
    )
  }

  saveSqueaker(sendForm: NgForm): void {
    const squeakerDTO = new SqueakerDTO(sendForm.value.username, sendForm.value.password, sendForm.value.firstName, sendForm.value.lastName, sendForm.value.email, sendForm.value.profilePic)
    this.squeakerService.save(squeakerDTO).subscribe();
    sendForm.control.reset()
  }

}
