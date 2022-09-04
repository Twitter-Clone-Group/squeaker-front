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
  id = 0;

  constructor(private squeakerService: SqueakerService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.currentSqueakerId.subscribe(
      id => this.id = id
    )
  }

  saveSqueaker(sendForm: NgForm): void {
    const squeakerDTO = new SqueakerDTO(sendForm.value.username, sendForm.value.password)
    this.squeakerService.save(squeakerDTO).subscribe();
    sendForm.control.reset()
  }

  //Need to be able to log in a user and keep track of them
  //Logged in user should be tied to any tweets created and the profile displayed when that button is clicked

  login() {
    this.squeakerService.findSqueakerByUserName(this.username, this.password)
    .subscribe(
      (data: Squeaker) => {
        this.dataService.changeCurrentSqueakerId(data.id)
      }
    );
  }

}
