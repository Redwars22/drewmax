import { useEffect, useState } from "react";
import { UserData } from "../../types/user";
import {
  fetchFavorites,
  handleAddToFavorites,
  handleRemoveAllFavorites,
} from "../../modules/handleFavorites";
import MovieCard from "../Card/MovieCard";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { useUserStore } from "../../store/UserStore";
import { plans } from "../../data/plans";
import currency from "currency.js";

export default function UserComponent() {
  const [favorites, setFavorites] = useState([]);
  const [userDataEdit, setUserDataEdit] = useState("");

  const store = useUserStore((s: any) => s.userData);

  const user: UserData = {
    name: "Andrew Lockswolff",
  };

  useEffect(() => {
    const favs = fetchFavorites();

    if (favs) setFavorites(favs);
  }, []);

  console.log(favorites);

  //!Transformar em componentes menores

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
        <img
          src={store.avatar}
          alt="avatar do usuário"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "2px dashed red",
          }}
        />
        <h1>{store.name}</h1>
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
              useUserStore.setState((s: any) => ({
                ...s,
                userData: {
                  name: userDataEdit,
                },
              }));
            }}
          />
        </section>
        <section>
          <h1>Sua assinatura</h1>
          Plano: Data de cobrança: Status: Alterar forma de pagamento: Trocar de
          plano
          <div style={{ display: "flex", flexDirection: "row" }}>
            {plans.map((plan) => (
              <div
                style={{
                  color: "red",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{`R$ ${currency(
                  plan.price
                )}`}</span>
                <span>{plan.name}</span>
                <ol>
                  {plan.description.map((item) => (
                    <li>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <HeroButtonComponent
              title={"Alterar Forma de Pagamento"}
              icon={"credit-card"}
              action={() => {
                user.name = userDataEdit;
              }}
            />
            <HeroButtonComponent
              title={"Trocar de Plano"}
              icon={"toggles"}
              action={() => {
                user.name = userDataEdit;
              }}
            />
          </div>
        </section>

        <section></section>
      </section>
    </div>
  );
}
