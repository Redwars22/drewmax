import { useHistory } from "react-router-dom";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";

export default function LoginError() {
  const history = useHistory();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <i
        className="bi bi-bug-fill"
        style={{ color: "#4c4a4a", fontSize: 200 }}
      ></i>
      <h1 style={{ color: "#4c4a4a" }}>Epa, ocorreu um erro!</h1>
      <h3 style={{ color: "#4c4a4a", textAlign: "center" }}>
        Por algum motivo não foi possível fazer o seu login.
        <br />
        Verifique suas credenciais e tente novamente. Qualquer coisa, entre em
        contato conosco.
      </h3>
      <HeroButtonComponent
        title={"Tentar novamente"}
        icon={"arrow-90deg-left"}
        action={() => history.push("/")}
      />
    </div>
  );
}
