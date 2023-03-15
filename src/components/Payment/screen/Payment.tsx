import { useCallback, useEffect, useState } from "react";
import styles from "../../../styles/layout.module.scss";
import CreditCardComponent from "../components/CreditCard";
import { IPaymentMethod } from "../../../types/payment";
import PaymentMethodButton from "../components/PaymentMethodButton";
import GiftCardComponent from "../components/GiftCard";

export default function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] =
    useState<IPaymentMethod>("credit-card");

  return (
    <div
      className={styles["user-area"]}
      style={{
        color: "red",
        backgroundColor: "#0a0909",
        opacity: 0.9,
        marginBottom: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Alterar Método de Pagamento e Plano</h1>
      <div>
        {/* <PaymentMethodButton
          title={"Cartão de Crédito"}
          selected={isCreditCard()}
          icon={"credit-card"}
          action={() => setPaymentMethod("credit-card")}
        />
        <PaymentMethodButton
          title={"Cartão Presente"}
          selected={isGiftCard()}
          icon={"gift"}
          action={() => setPaymentMethod("gift-card")}
        /> */}
        <select
          name=""
          id=""
          onChange={(e) => setPaymentMethod(e.target.value as IPaymentMethod)}
        >
          <option value="credit-card">Cartão de Crédito</option>
          <option value="gift-card">Cartão Presente</option>
        </select>
      </div>
      {paymentMethod === "credit-card" && <CreditCardComponent />}
      {paymentMethod === "gift-card" && <GiftCardComponent />}
    </div>
  );
}
