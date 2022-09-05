export class SqueakerDTO {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;

  constructor(username: string, password: string, first_name: string, last_name:string, email: string, profile_pic: string) {
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.profile_pic = profile_pic;
  }
}


