import SearchComponent from "../Search/Search";
import "../../styles/header.css";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import SearchButton from "../Search/Search";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { useHistory } from "react-router-dom";

export default function HeaderComponent() {
  const history = useHistory();

  return (
    <header>
      <Link to={"/"} className="app-title">
        DREWMAX
      </Link>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <HeroButtonComponent
          title={""}
          icon={"person-circle"}
          action={() => {
            history.push("user");
          }}
        />
        <SearchButton />
      </div>
    </header>
  );
}
