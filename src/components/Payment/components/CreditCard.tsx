import style from "../../../styles/elements.module.scss";

export default function CreditCardComponent() {
  return (
    <div>
      <img
        src="https://freesvg.org/img/basicCreditCard.png"
        alt=""
        width={"50%"}
      />
      <form action="">
        <label htmlFor="">Número do Cartão de Crédito:</label>
        <input
          type="number"
          maxLength={19}
          className={style["default-input"]}
        />
        <br />
        <label htmlFor="">Nome do Titular do Cartão:</label>
        <input type="text" className={style["default-input"]} />
        <br />
        <label htmlFor="">Data de Vencimento:</label>
        <input type="date" className={style["default-input"]} />
        <br />
        <label htmlFor="">CPF do Titular do Cartão: </label>
        <input
          type="number"
          maxLength={11}
          className={style["default-input"]}
        />
      </form>
    </div>
  );
}
