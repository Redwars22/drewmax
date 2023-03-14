import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../modules/UserContext";
import { useUserStore } from "../../../store/UserStore";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";

export default function UserInfoComponent() {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img
        src={useUserStore.getState().avatar}
        alt="avatar do usuário"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "2px dashed red",
        }}
      />
      <h1>Olá, {useUserStore.getState().name}</h1>
      <div>
        <HeroButtonComponent
          title={"Sair"}
          icon={"box-arrow-left"}
          action={() => {
            userCtx.logout();
            history.push("/login");
          }}
        />
      </div>
    </div>
  );
}
