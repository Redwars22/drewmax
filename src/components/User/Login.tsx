import { useContext, useState } from "react";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { UserContext } from "../../modules/UserContext";
import { useHistory } from "react-router-dom";

export default function LoginComponent() {
  const user = useContext(UserContext);
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUpdateData = (key: string, data: string) => {
    setLoginData((s) => ({
      ...s,
      [key]: data,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
        color: "red",
        alignItems: "center",
      }}
    >
      <i className="bi bi-film" style={{ fontSize: "5rem" }}></i>
      <h1>Bem-vindo de volta ao Drewmax</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">E-mail:</label>
        <input
          type="email"
          className="default-input"
          onChange={(e) => handleUpdateData("email", e.target.value)}
        />
        <label htmlFor="">Senha:</label>
        <input
          type="password"
          className="default-input"
          onChange={(e) => handleUpdateData("password", e.target.value)}
        />
      </div>
      <HeroButtonComponent
        title={"Entrar"}
        icon={"key"}
        action={() => {
          if (
            user.validateLogin(loginData.email, loginData.password) ===
            "success"
          ) {
            history.push("/");
            return;
          }

          history.push("/login-error");
        }}
      />
    </div>
  );
}
