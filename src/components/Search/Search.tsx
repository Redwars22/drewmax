import "../../styles/search.css";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";

export default function SearchComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input className="search-input" />
      <HeroButtonComponent title={""} action={() => {}} icon={"search"} />
    </div>
  );
}
