import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqueakerComponent } from './squeaker/squeaker.component';
import { SqueakerService } from "./services/squeaker.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SqueakComponent } from "./squeak/squeak.component";
import { SqueakService } from "./services/squeak.service";
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    SqueakerComponent,
    SqueakComponent,
    CommentComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [SqueakerService, SqueakService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
