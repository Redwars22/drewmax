import { create } from "zustand";
import { UserData } from "../types/user";

export const useUserStore = create((set) => ({
  userData: {
    name: "Andrew Lockswolff",
    avatar: "https://avatarfiles.alphacoders.com/865/86518.png",
    payment: {
      currentPlanID: "1",
      billingDay: 0,
      isActive: false,
    },
  } as UserData,
  updateUserInfo: (key: string, value: any) =>
    set((s: any) => ({ ...s, [key as any]: value })),
}));
