import SearchComponent from "../Search/Search";
import "../../styles/header.css";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import SearchButton from "../Search/Search";

export default function HeaderComponent() {
  return (
    <header>
      <Link to={"/"} className="app-title">
        DREWMAX
      </Link>
      <SearchButton />
    </header>
  );
}
