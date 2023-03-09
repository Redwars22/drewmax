export type UserData = {
  name: string;
  avatar: string;
  payment: {
    currentPlanID: "1" | "2" | "3";
    billingDay: number;
    isActive: boolean;
  };
};
