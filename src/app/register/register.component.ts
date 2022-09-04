import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SqueakerDTO} from "../models/squeakerDTO";
import {SqueakerService} from "../services/squeaker.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';

  constructor(private squeakerService: SqueakerService) {
  }

  ngOnInit(): void {
  }

  saveSqueaker(sendForm: NgForm): void {
    const squeakerDTO = new SqueakerDTO(sendForm.value.username, sendForm.value.password)
    this.squeakerService.save(squeakerDTO).subscribe();
    sendForm.control.reset()
  }

}
