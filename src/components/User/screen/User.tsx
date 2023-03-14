import BillingComponent from "../components/Billing";
import FavoritesComponent from "../components/Favorites";
import UserInfoComponent from "../components/UserInfo";
import EditUserComponent from "../components/EditUser";
import styles from "../../../styles/layout.module.scss";

export default function UserComponent() {
  return (
    <div className={styles["user-area"]} style={{ color: "red" }}>
      <section
        style={{
          borderRightWidth: 1,
          borderRightColor: "red",
          borderRightStyle: "dashed",
          padding: "1rem",
        }}
      >
        <UserInfoComponent />
      </section>
      <section
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <FavoritesComponent />
        <EditUserComponent />
        <BillingComponent />
        <section></section>
      </section>
    </div>
  );
}
