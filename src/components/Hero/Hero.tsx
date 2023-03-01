import { IHeroImage } from "../../types/types";
import "../../styles/hero.css";

export default function HeroComponent(props: IHeroImage) {
  return (
    <div>
      <img className="hero-image" src={props.image} alt="" />
    </div>
  );
}
