import SearchComponent from "../Search/Search";
import "../../styles/header.scss";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import SearchButton from "../Search/Search";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../modules/UserContext";

export default function HeaderComponent() {
  const history = useHistory();
  const user = useContext(UserContext);

  return (
    <header>
      <Link to={"/"} className="app-title">
        DREWMAX
      </Link>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {user.isLogged && (
          <HeroButtonComponent
            title={""}
            icon={"person-circle"}
            action={() => {
              history.push("user");
            }}
            hint="Meu perfil"
          />
        )}
        <SearchButton />
      </div>
    </header>
  );
}
