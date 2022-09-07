import {Squeaker} from "./squeaker";

export class SqueakDTO {
  content: string;
  squeaker: Squeaker;
  image: string

  constructor(content: string, squeaker: Squeaker, image: string) {
    this.content = content;
    this.squeaker = squeaker;
    this.image = image;
  }
}
