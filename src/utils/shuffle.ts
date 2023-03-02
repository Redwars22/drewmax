import { IMovieCard } from "../types/types";

export function shuffle(array: any): IMovieCard[] {
  return array.sort(() => Math.random() - 0.5);
}
