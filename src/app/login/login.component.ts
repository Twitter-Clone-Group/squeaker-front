import { Component, OnInit } from '@angular/core';
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";
import {NgForm} from "@angular/forms";
import {SqueakerDTO} from "../models/squeakerDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private squeakerService: SqueakerService) {
  }

  ngOnInit(): void {
  }

  saveSqueaker(sendForm: NgForm): void {
    const squeakerDTO = new SqueakerDTO(sendForm.value.username, sendForm.value.password)
    this.squeakerService.save(squeakerDTO).subscribe();
    sendForm.control.reset()
  }

  //Need to be able to log in a user and keep track of them
  //Logged in user should be tied to any tweets created and the profile displayed when that button is clicked

  login() {
    return true;
  }

}
