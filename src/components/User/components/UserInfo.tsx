import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../modules/UserContext";
import { useUserStore } from "../../../store/UserStore";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";

export default function UserInfoComponent() {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  return (
    <>
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
      <h1>{useUserStore.getState().name}</h1>
      <HeroButtonComponent
        title={"Sair"}
        icon={"box-arrow-left"}
        action={() => {
          userCtx.logout();
          history.push("/login");
        }}
      />
    </>
  );
}
