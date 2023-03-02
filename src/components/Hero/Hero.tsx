import { IHeroImage } from "../../types/types";
import "../../styles/hero.css";
import HeroDescriptionComponent from "./HeroDescription/HeroDescription";

export default function HeroComponent(props: IHeroImage) {
  return (
    <div>
      <img className="hero-image" src={props.image} alt="" />
      <HeroDescriptionComponent title={props.title} synopsis={props.synopsis} />
    </div>
  );
}
