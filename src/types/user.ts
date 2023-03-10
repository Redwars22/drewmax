export type UserData = {
  name: string;
  avatar: string;
  payment: {
    currentPlanID: "1" | "2" | "3";
    billingDay: number;
    isActive: boolean;
  };
};

export type UserDataStore = {
  name: string;
  avatar: string;
  payment: {
    currentPlanID: "1" | "2" | "3";
    billingDay: number;
    isActive: boolean;
  };
  updateUserInfo: (key: string, value: string) => void;
};
