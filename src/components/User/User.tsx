import { useEffect, useState } from "react";
import { UserData } from "../../types/user";
import {
  fetchFavorites,
  handleAddToFavorites,
  handleRemoveAllFavorites,
} from "../../modules/handleFavorites";
import MovieCard from "../Card/MovieCard";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";

export default function UserComponent() {
  const [favorites, setFavorites] = useState([]);
  const [userDataEdit, setUserDataEdit] = useState("");

  const user: UserData = {
    name: "Andrew Lockswolff",
  };

  useEffect(() => {
    const favs = fetchFavorites();

    if (favs) setFavorites(favs);
  }, []);

  console.log(favorites);

  return (
    <div className="user-area" style={{ color: "red" }}>
      <section
        style={{
          borderRightWidth: 1,
          borderRightColor: "red",
          borderRightStyle: "dashed",
          padding: "1rem",
        }}
      >
        <h1>{user.name}</h1>
      </section>
      <section
        style={{
          padding: "1rem",
        }}
      >
        <section>
          <h1>Lista de Favoritos</h1>
          <div className="movies-favorite-list">
            {favorites.length > 0 ? (
              favorites?.map(
                (movie: { title: string; cover: string; synopsis: string }) => (
                  <MovieCard
                    title={movie?.title}
                    cover={movie?.cover}
                    synopsis={movie?.synopsis}
                    id={0}
                  />
                )
              )
            ) : (
              <span>
                Nenhum filme ou série foi favoritado. Você pode adicionar
                quantas e quaisquer séries ou filmes desejar aqui.
              </span>
            )}
          </div>
          {fetchFavorites().length > 0 && (
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
        <section>
          <h1>Editar usuário</h1>
          <label htmlFor="">Nome: </label>
          <input
            type="text"
            className="dm-input"
            onChange={(e) => setUserDataEdit(e.target.value)}
          />
          <HeroButtonComponent
            title={"Salvar alterações"}
            icon={"save"}
            action={() => {
              user.name = userDataEdit;
            }}
          />
        </section>
        <section>
          <h1>Sua assinatura</h1>
        </section>

        <section></section>
      </section>
    </div>
  );
}
