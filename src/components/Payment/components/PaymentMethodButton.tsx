import { IPaymentMethodButton } from "../../../types/payment";
import styles from "../../../styles/elements.module.scss";
import { useCallback } from "react";

export default function PaymentMethodButton(props: IPaymentMethodButton) {
  const getColorFromCurrentState = useCallback(
    () => (props.selected ? "#760000" : "black"),
    [props.selected]
  );

  return (
    <button
      title={props.title}
      className={styles["payment-method-button"]}
      style={{
        backgroundColor: getColorFromCurrentState(),
      }}
    >
      <i className={`bi bi-${props.icon}`}></i>
      {props.title}
    </button>
  );
}
