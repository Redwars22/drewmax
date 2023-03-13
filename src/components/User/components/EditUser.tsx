import { useState } from "react";
import { useUserStore } from "../../../store/UserStore";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";
import styles from "../../../styles/elements.module.scss";

export default function EditUserComponent() {
  const [userDataEdit, setUserDataEdit] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  return (
    <section>
      <h1>Editar usuário</h1>
      <div>
        <label htmlFor="">Nome: </label>
        <input
          type="text"
          className={styles["default-input"]}
          onChange={(e) =>
            setUserDataEdit((s) => ({
              ...s,
              name: e.target.value === "" ? s.name : e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">E-mail: </label>
        <input
          type="text"
          className={styles["default-input"]}
          onChange={(e) =>
            setUserDataEdit((s) => ({
              ...s,
              email: e.target.value === "" ? s.email : e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Avatar: </label>
        <input
          type="text"
          className={styles["default-input"]}
          onChange={(e) => {
            setUserDataEdit((s) => ({
              ...s,
              avatar: e.target.value === "" ? s.avatar : e.target.value,
            }));
          }}
        />
      </div>
      <HeroButtonComponent
        title={"Salvar alterações"}
        icon={"save"}
        action={() => {
          useUserStore.setState((s: any) => ({
            ...s,
            name: userDataEdit.name !== "" ? userDataEdit.name : s.name,
            avatar: userDataEdit.avatar !== "" ? userDataEdit.avatar : s.avatar,
            email: userDataEdit.email !== "" ? userDataEdit.email : s.email,
          }));
          window.location.reload();
        }}
      />
    </section>
  );
}
