import { useHistory } from "react-router-dom";
import style from "../../../styles/elements.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { validatePaymentData } from "../../../modules/validateData";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";
import { useUserStore } from "../../../store/UserStore";

export default function CreditCardFormComponent(props: {
  selectedPlan: string;
}) {
  const history = useHistory();
  const [paymentData, setPaymentData] = useState<{
    creditCardNumber: string | null | undefined;
    userCPF: string | null | undefined;
    validity: string | null | undefined;
    name: string | null | undefined;
  }>({
    userCPF: "",
    creditCardNumber: "",
    name: "",
    validity: "",
  });

  return (
    <>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Número do Cartão de Crédito (sem espaços):</label>
        <input
          type="text"
          maxLength={16}
          className={style["default-input"]}
          style={{ maxWidth: "100%" }}
          onChange={(e) =>
            setPaymentData((s) => ({
              ...s,
              creditCardNumber: e.target.value,
            }))
          }
        />
        <label htmlFor="">Nome do Titular do Cartão:</label>
        <input
          type="text"
          style={{ maxWidth: "100%" }}
          className={style["default-input"]}
          onChange={(e) =>
            setPaymentData((s) => ({
              ...s,
              name: e.target.value,
            }))
          }
        />
        <label htmlFor="">Data de Vencimento:</label>
        <input
          type="date"
          style={{ maxWidth: "100%" }}
          className={style["default-input"]}
          onChange={(e) =>
            setPaymentData((s) => ({
              ...s,
              validity: e.target.value,
            }))
          }
        />
        <label htmlFor="">CPF do Titular do Cartão: </label>
        <input
          type="text"
          style={{ maxWidth: "100%" }}
          maxLength={14}
          className={style["default-input"]}
          onChange={(e) =>
            setPaymentData((s) => ({
              ...s,
              userCPF: e.target.value,
            }))
          }
        />
      </form>
      <HeroButtonComponent
        title={"Validar e Concluir"}
        icon={"check2-circle"}
        action={() => {
          if (
            validatePaymentData(
              paymentData?.creditCardNumber!,
              paymentData.name!,
              paymentData.validity!,
              paymentData.userCPF!
            )
          ) {
            history.push("/");
            toast(
              "Suas informações de pagamento foram atualizadas e aprovadas com sucesso. Aproveite a Drewmax!"
            );
            useUserStore.setState((s) => ({
              ...s,
              payment: {
                billingDay: new Date().getUTCDate(),
                currentPlanID: props.selectedPlan as "1" | "2" | "3",
                isActive: true,
              },
            }));
          }
        }}
      />
    </>
  );
}
