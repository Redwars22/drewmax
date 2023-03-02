export interface IMovieCard {
  title: string;
  cover: string;
  synopsis: string;
  id: number;
}

export interface ICardsSection {
  title: string;
  id: number;
}

export interface ICategories {
  title: string;
  id: number;
}

export interface IHeroImage {
  title: string;
  image: string;
  synopsis: string;
}

export interface IHeroDescription {
  title: string;
  synopsis: string;
}

export interface IHeroButton {
  title: string;
  action?: () => void;
  icon: string;
}

export type Rating = "like" | "dislike";
