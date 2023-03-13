import { IFavorite } from "./types";

export type UserData = {
  name: string;
  avatar: string;
  payment: {
    currentPlanID: "1" | "2" | "3";
    billingDay: number;
    isActive: boolean;
  };
  isLogged: boolean;
};

export type UserDataStore = {
  name: string;
  avatar: string;
  payment: {
    currentPlanID: "1" | "2" | "3";
    billingDay: number;
    isActive: boolean;
  };
  isLogged: boolean;
  favorites?: IFavorite[];
  updateUserInfo: (key: string, value: string) => void;
};
