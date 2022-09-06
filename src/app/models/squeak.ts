import {Squeaker} from "./squeaker";

export interface Squeak {
  id: number;
  content: string;
  squeaker: Squeaker
  postedAt: number;
}
