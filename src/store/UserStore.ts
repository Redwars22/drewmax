import { create } from "zustand";
import { UserData, UserDataStore } from "../types/user";
import { persist } from "zustand/middleware";

export const useUserStore = create<UserDataStore>()(
  persist(
    (set, get) => ({
      name: "Andrew Lockswolff",
      avatar: "https://avatarfiles.alphacoders.com/865/86518.png",
      payment: {
        currentPlanID: "1",
        billingDay: 0,
        isActive: false,
      },
      updateUserInfo: (key: string, value: any) =>
        set((s: any) => ({ ...s, [key as any]: value })),
    }),
    {
      name: "user-data",
      getStorage: () => localStorage,
    }
  )
);
