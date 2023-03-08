import { create } from "zustand";
import { UserData } from "../types/user";

const useUserStore = create((set) => ({
  userData: {} as UserData,
  updateUserInfo: (key: string, value: any) =>
    set((s: any) => ({ ...s, [key as any]: value })),
}));
