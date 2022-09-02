import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Squeak} from "../models/squeak";
import {SqueakService} from "../services/squeak.service";
import {SqueakDTO} from "../models/squeakDTO";


@Component({
  selector: 'app-squeak',
  templateUrl: './squeak.component.html',
  styleUrls: ['./squeak.component.css']
})
export class SqueakComponent implements OnInit {
  squeaks: Squeak[] = [];

  constructor(private squeakService: SqueakService) {
  }

  ngOnInit(): void {
  }

  findAllSqueaks(): void {
    this.squeakService.findAll().subscribe(
      (data: Squeak[]) => {
        this.squeaks = data;
      }
    )
  }

  saveSqueak(sendForm: NgForm): void {
    const squeakDTO = new SqueakDTO(sendForm.value.content)
    this.squeakService.save(squeakDTO).subscribe();
    sendForm.control.reset()
  }

}
