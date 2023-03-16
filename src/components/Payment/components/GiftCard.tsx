import { useState } from "react";
import style from "../../../styles/elements.module.scss";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";
import { giftCardRule } from "../../../utils/regex";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserStore } from "../../../store/UserStore";

export default function GiftCardComponent(props: { selectedPlan: string }) {
  const [giftCard, setGiftCard] = useState("");
  const history = useHistory();

  const checkGiftCardValidity = () => {
    if (giftCard.match(giftCardRule)) {
      history.push("/");
      toast(
        "Você resgatou seu cartão-presente com sucesso! Agora você pode assistir à Drewmax!"
      );
      useUserStore.setState((s) => ({
        ...s,
        payment: {
          billingDay: new Date().getUTCDate(),
          currentPlanID: props.selectedPlan as "1" | "2" | "3",
          isActive: true,
        },
      }));
      return;
    }

    toast(
      "Cartão-presente com formato inválido. Verifique-o e tente novamente!"
    );
  };

  return (
    <>
      <label htmlFor="">Código para Resgate:</label>
      <input
        type="text"
        maxLength={19}
        className={style["default-input"]}
        onChange={(e) => setGiftCard(e.target.value)}
      />
      <HeroButtonComponent
        title={"Resgatar Cartão Presente"}
        icon={"gift-fill"}
        action={() => checkGiftCardValidity()}
      />
    </>
  );
}
