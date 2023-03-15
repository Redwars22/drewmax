import { IHeroImage } from "../../types/types";
import "../../styles/hero.scss";
import HeroDescriptionComponent from "./HeroDescription/HeroDescription";
import { useContext } from "react";
import { UserContext } from "../../modules/UserContext";
import { useHistory } from "react-router-dom";

export default function HeroComponent(props: IHeroImage) {
  const user = useContext(UserContext);
  const history = useHistory();

  if (!user.isLogged) {
    history?.push("/login");
  }

  return (
    <div>
      <img className="hero-image" src={props.image} alt="" />
      <HeroDescriptionComponent title={props.title} synopsis={props.synopsis} />
    </div>
  );
}
