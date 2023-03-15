import { useEffect, useState } from "react";
import {
  fetchFavorites,
  handleRemoveAllFavorites,
} from "../../../modules/handleFavorites";
import { IFavorite } from "../../../types/types";
import MovieCard from "../../Card/MovieCard";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";

export {};
export default function FavoritesComponent() {
  const [favorites, setFavorites] = useState<IFavorite[] | []>([]);

  useEffect(() => {
    const favs = fetchFavorites();

    if (favs) setFavorites(favs);
  }, []);

  console.log(favorites);

  return (
    <section>
      <h1>Lista de Favoritos</h1>
      <div
        className="search-results"
        style={{ marginBottom: 30, maxWidth: "100%" }}
      >
        {favorites?.[0] ? (
          favorites?.map((movie: IFavorite) => (
            <MovieCard
              title={movie?.title!}
              cover={movie?.cover!}
              synopsis={movie?.synopsis}
              id={0}
            />
          ))
        ) : (
          <span>
            Nenhum filme ou série foi favoritado. Você pode adicionar quantas e
            quaisquer séries ou filmes desejar aqui.
          </span>
        )}
      </div>
      {fetchFavorites()?.[0] && (
        <HeroButtonComponent
          title={"Remover Todos os Favoritos"}
          icon={"trash-fill"}
          action={() => {
            handleRemoveAllFavorites();
            window.location.reload();
          }}
        />
      )}
    </section>
  );
}
