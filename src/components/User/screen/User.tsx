import BillingComponent from "../components/Billing";
import FavoritesComponent from "../components/Favorites";
import UserInfoComponent from "../components/UserInfo";
import EditUserComponent from "../components/EditUser";
import styles from "../../../styles/layout.module.scss";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function UserComponent() {
  return (
    <div
      className={styles["user-area"]}
      style={{
        color: "red",
        backgroundColor: "black",
        opacity: 0.9,
        marginBottom: 16,
      }}
    >
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "flex-start",
        }}
      >
        <UserInfoComponent />
        <hr color="red" style={{ width: "100%" }} />
        <FavoritesComponent />
        <EditUserComponent />
        <BillingComponent />
        <section></section>
      </div>
    </div>
  );
}
