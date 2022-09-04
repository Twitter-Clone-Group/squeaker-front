import { Component, OnInit } from '@angular/core';
import {Squeak} from "../models/squeak";
import {NgForm} from "@angular/forms";
import {SqueakDTO} from "../models/squeakDTO";
import {SqueakService} from "../services/squeak.service";
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  currentSqueaker: Squeaker;
  squeaks: Squeak[] = [];

  constructor(private squeakService: SqueakService, private dataService: DataService, private squeakerService: SqueakerService) {
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


  // findUsernameSqueaks(): void {
  //   this.squeakService.findByUsername().subscribe(
  //     (data: Squeak[]) => {
  //       this.squeaks = data;
  //     }
  //   )
  // }

  saveSqueak(sendForm: NgForm): void {
    const squeakDTO = new SqueakDTO(sendForm.value.content, this.currentSqueaker)
    this.squeakService.save(squeakDTO).subscribe();
    sendForm.control.reset()
  }





}

