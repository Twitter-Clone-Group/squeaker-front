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
  squeaksUser: Squeak[] = [];

  id = 0

  constructor(private squeakService: SqueakService, private dataService: DataService, private squeakerService: SqueakerService) {
  }

  // ngOnInit(): void {
  //   this.dataService.currentSqueakerId.subscribe(
  //     id => this.squeakerService.findSqueakerById(id)
  //       .subscribe(
  //         (data: Squeaker) => {
  //           this.currentSqueaker = data;
  //         }
  //       )
  //   )
  //   // this.findAllSqueaks();
  //   this.findUsernameSqueaks();
  // }

  ngOnInit(): void {
      this.dataService.currentSqueakerId.subscribe(id => {
        this.squeakerService.findSqueakerById(id).subscribe((data: Squeaker)=>{
        this.currentSqueaker=data;
        this.findUsernameSqueaks();
        })
      })
  }

  findUsernameSqueaks(): void {
    this.squeakService.findByUsername(this.currentSqueaker.username).subscribe(
      (data: Squeak[]) => {
        this.squeaksUser = data;
      }
    )
  }


  // findAllSqueaks(): void {
  //   this.squeakService.findAll().subscribe(
  //     (data: Squeak[]) => {
  //       this.squeaks = data;
  //     }
  //   )
  // }





}

