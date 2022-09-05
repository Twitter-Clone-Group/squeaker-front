export class SqueakerDTO {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;

  constructor(username: string, password: string, firstName: string, lastName:string, email: string, profilePic: string) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.profilePic = profilePic;
  }
}


