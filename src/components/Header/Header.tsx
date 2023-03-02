import SearchComponent from "../Search/Search";
import "../../styles/header.css";
import "../../styles/card.css";

export default function HeaderComponent() {
  return (
    <header>
      <span className="app-title">DREWMAX</span>
      <SearchComponent />
    </header>
  );
}
