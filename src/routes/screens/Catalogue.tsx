import HeroComponent from "../../components/Hero/Hero";
import { hero } from "../../data/hero";
import { MoviesCatalogue } from "../../modules/renderMovies";

export default function CatalogueComponent() {
  return (
    <>
      <HeroComponent
        title={hero.title}
        synopsis={hero.synopsis}
        image={hero.image}
      />
      {MoviesCatalogue()}
    </>
  );
}
