export type IPaymentMethod = "credit-card" | "gift-card" | null;

export type IPaymentMethodButton = {
  title: string;
  selected: boolean;
  icon: string;
  action: () => void;
};
