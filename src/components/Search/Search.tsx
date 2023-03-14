import { useHistory } from "react-router-dom";
import "../../styles/search.scss";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";

export default function SearchButton() {
  const history = useHistory();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <HeroButtonComponent
        title={""}
        action={() => {
          history.push("/search");
        }}
        icon={"search"}
        hint="Pesquisar filmes e séries"
      />
    </div>
  );
}
