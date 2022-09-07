import {Squeaker} from "./squeaker";

export interface Squeak {
  id: number;
  content: string;
  squeaker: Squeaker;
  postedAtDate: number;
  postedAtTime: number;
  image: string;
}
