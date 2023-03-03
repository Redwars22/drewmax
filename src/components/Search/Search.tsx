import "../../styles/search.css";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";

export default function SearchComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <HeroButtonComponent
        title={""}
        action={() => {
          (
            document.querySelector(".search-overlay") as HTMLDivElement
          ).style.display = "flex";
        }}
        icon={"search"}
      />
    </div>
  );
}
