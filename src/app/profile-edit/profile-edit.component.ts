import { Component, OnInit } from '@angular/core';
import {SqueakerService} from "../services/squeaker.service";
import {NgForm} from "@angular/forms";
import {SqueakerDTO} from "../models/squeakerDTO";
import {Squeaker} from "../models/squeaker";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  // @ts-ignore
  currentSqueaker: Squeaker;
  id=0;



  constructor(private squeakerService: SqueakerService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentSqueakerId.subscribe(id => {
      this.squeakerService.findSqueakerById(id).subscribe((data: Squeaker)=>{
        this.currentSqueaker=data;
      })
    })
  }


  updateSqueaker(sendForm: NgForm): void {
    const squeakerDTO = new SqueakerDTO(sendForm.value.username, sendForm.value.password, sendForm.value.firstName, sendForm.value.lastName, sendForm.value.email, sendForm.value.profilePic)
    this.squeakerService.update(this.currentSqueaker.id, squeakerDTO).subscribe();
    sendForm.control.reset()
  }

}
