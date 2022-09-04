import { Component, OnInit } from '@angular/core';
import {Squeak} from "../models/squeak";
import {NgForm} from "@angular/forms";
import {SqueakDTO} from "../models/squeakDTO";
import {SqueakService} from "../services/squeak.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  squeaks: Squeak[] = [];


  constructor(private squeakService: SqueakService) {
  }

  ngOnInit(): void {
  }


  // findUsernameSqueaks(): void {
  //   this.squeakService.findByUsername().subscribe(
  //     (data: Squeak[]) => {
  //       this.squeaks = data;
  //     }
  //   )
  // }

  saveSqueak(sendForm: NgForm): void {
    const squeakDTO = new SqueakDTO(sendForm.value.content)
    this.squeakService.save(squeakDTO).subscribe();
    sendForm.control.reset()
  }



}

