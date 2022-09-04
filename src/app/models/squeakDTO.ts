import {Squeaker} from "./squeaker";

export class SqueakDTO {
  content: string;
  squeaker: Squeaker;

  constructor(content: string, squeaker: Squeaker) {
    this.content = content;
    this.squeaker = squeaker;
  }
}
