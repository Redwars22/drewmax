import { IHeroDescription } from "../../../types/types";
import HeroButtonsComponent from "../HeroButtons/HeroButtons";

export default function HeroDescriptionComponent(props: IHeroDescription) {
  return (
    <>
      <div className="hero-description">
        <span className="hero-title">{props.title}</span>
        <p className="hero-synopsis">{props.synopsis}</p>
        <HeroButtonsComponent />
      </div>
    </>
  );
}
