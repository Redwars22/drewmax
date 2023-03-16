import CreditCardFormComponent from "./CreditCardForm";

export default function CreditCardComponent(props: { selectedPlan: string }) {
  return (
    <div style={{ width: "95%" }}>
      {/* <img
        src="https://freesvg.org/img/basicCreditCard.png"
        alt=""
        width={"50%"}
      /> */}
      <CreditCardFormComponent selectedPlan={props.selectedPlan} />
    </div>
  );
}
