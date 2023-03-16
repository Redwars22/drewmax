import { useUserStore } from "../../../store/UserStore";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";
import { plans } from "../../../data/plans";
import currency from "currency.js";
import styles from "../../../styles/layout.module.scss";
import { useHistory } from "react-router-dom";

export default function BillingComponent() {
  const history = useHistory();

  const getPlanByID = (plan: string) => {
    switch (plan) {
      case "1":
        return "básico";
      case "2":
        return "família";
      case "3":
        return "premium";
      default:
        return "inválido";
    }
  };

  return (
    <section>
      <h1>Sua assinatura</h1>
      <ul>
        <li>
          <strong>Plano Atual: </strong>{" "}
          {getPlanByID(useUserStore.getState().payment.currentPlanID)}
        </li>
        <li>
          <strong>Data de Cobrança: </strong>{" "}
          {useUserStore.getState().payment.billingDay}{" "}
        </li>
        <li>
          <strong>Status: </strong>{" "}
          {useUserStore.getState().payment.isActive ? "ativo" : "pendente"}
        </li>
      </ul>
      <div
        className={styles["plans-grid"]}
        // style={{ display: "flex", flexDirection: "row" }}
      >
        {plans.map((plan) => (
          <div
            style={{
              color: "#4c4a4a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{`R$ ${currency(
              plan.price
            )}`}</span>
            <span>{plan.name}</span>
            <ol>
              {plan.description.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      {/**Selected Plan Component */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <HeroButtonComponent
          title={"Alterar Forma de Pagamento e plano"}
          icon={"credit-card"}
          action={() => history.push("/payment")}
        />
      </div>
    </section>
  );
}
