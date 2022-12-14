import { Component, OnInit } from '@angular/core';
import {Squeaker} from "../models/squeaker";
import {SqueakerService} from "../services/squeaker.service";
import {NgForm} from "@angular/forms";
import {SqueakerDTO} from "../models/squeakerDTO";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private squeakerService: SqueakerService, private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  saveSqueaker(sendForm: NgForm): void {
    const squeakerDTO = new SqueakerDTO(sendForm.value.username, sendForm.value.password, sendForm.value.firstName, sendForm.value.lastName, sendForm.value.email, sendForm.value.profilePic)
    this.squeakerService.save(squeakerDTO).subscribe();
    sendForm.control.reset()
  }

  //Need to be able to log in a user and keep track of them
  //Logged-in user should be tied to any tweets created and the profile displayed when that button is clicked

  login() {
    this.squeakerService.findSqueakerByUserName(this.username, this.password)
    .subscribe(
      (data: Squeaker) => {
        this.dataService.changeCurrentSqueakerId(data.id)
      }
    );
  }

}
