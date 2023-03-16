import { useCallback, useEffect, useState } from "react";
import styles from "../../../styles/layout.module.scss";
import CreditCardComponent from "../components/CreditCard";
import { IPaymentMethod } from "../../../types/payment";
import PaymentMethodButton from "../components/PaymentMethodButton";
import GiftCardComponent from "../components/GiftCard";
import { plans } from "../../../data/plans";
import currency from "currency.js";

export default function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] =
    useState<IPaymentMethod>("credit-card");
  const [currentPlanID, setCurrentPlanID] = useState<string>("1");

  return (
    <div
      className={styles["user-area"]}
      style={{
        color: "#4c4a4a",
        backgroundColor: "#0a0909",
        opacity: 0.9,
        marginBottom: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Alterar Método de Pagamento e Plano</h1>
      <div style={{ display: "flex" }}>
        <select
          name=""
          id=""
          onChange={(e) => setPaymentMethod(e.target.value as IPaymentMethod)}
        >
          <option value="credit-card">Cartão de Crédito</option>
          <option value="gift-card">Cartão Presente</option>
        </select>
        <select
          name=""
          id=""
          onChange={(e) => setCurrentPlanID(e.target.value)}
        >
          {plans?.map((plan) => (
            <option value={`${plan.id}`}>{plan.name}</option>
          ))}
        </select>
      </div>
      {paymentMethod && currentPlanID !== "" && (
        <div className={styles["plans-container"]}>
          <span>PLANO {plans[Number(currentPlanID) - 1].name}</span>
          <span style={{ fontSize: "3rem" }}>{`R$ ${currency(
            plans[Number(currentPlanID) - 1].price
          )}`}</span>
        </div>
      )}
      {paymentMethod === "credit-card" && (
        <CreditCardComponent selectedPlan={currentPlanID} />
      )}
      {paymentMethod === "gift-card" && (
        <GiftCardComponent selectedPlan={currentPlanID} />
      )}
    </div>
  );
}
