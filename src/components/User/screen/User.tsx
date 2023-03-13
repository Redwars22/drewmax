import { useContext, useEffect, useState } from "react";
import { UserData } from "../../../types/user";
import {
  fetchFavorites,
  handleAddToFavorites,
  handleRemoveAllFavorites,
} from "../../../modules/handleFavorites";
import MovieCard from "../../Card/MovieCard";
import HeroButtonComponent from "../../Hero/HeroButtons/HeroButton";
import { useUserStore } from "../../../store/UserStore";
import { plans } from "../../../data/plans";
import currency from "currency.js";
import { UserContext } from "../../../modules/UserContext";
import { useHistory } from "react-router-dom";
import { IFavorite } from "../../../types/types";

export default function UserComponent() {
  const [favorites, setFavorites] = useState<IFavorite[] | []>([]);
  const [userDataEdit, setUserDataEdit] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const userCtx = useContext(UserContext);
  const history = useHistory();

  const store = useUserStore((s: any) => s.userData);

  const user: UserData = {
    name: "Andrew Lockswolff",
    avatar: "",
    payment: {
      currentPlanID: "1",
      billingDay: 0,
      isActive: false,
    },
    isLogged: true,
  };

  useEffect(() => {
    const favs = fetchFavorites();

    if (favs) setFavorites(favs);
  }, []);

  console.log(favorites);

  const getPlanByID = (plan: string) => {
    switch (plan) {
      case "1":
        return "básico";
      case "2":
        return "família";
      case "3":
        return "premium";
      default:
        return "inválido";
    }
  };

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
          src={useUserStore.getState().avatar}
          alt="avatar do usuário"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "2px dashed red",
          }}
        />
        <h1>{useUserStore.getState().name}</h1>
        <HeroButtonComponent
          title={"Sair"}
          icon={"box-arrow-left"}
          action={() => {
            userCtx.logout();
            history.push("/login");
          }}
        />
      </section>
      <section
        style={{
          padding: "1rem",
        }}
      >
        <section>
          <h1>Lista de Favoritos</h1>
          <div className="movies-favorite-list">
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
                Nenhum filme ou série foi favoritado. Você pode adicionar
                quantas e quaisquer séries ou filmes desejar aqui.
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
        <section>
          <h1>Editar usuário</h1>
          <div>
            <label htmlFor="">Nome: </label>
            <input
              type="text"
              className="default-input"
              onChange={(e) =>
                setUserDataEdit((s) => ({
                  ...s,
                  name: e.target.value === "" ? s.name : e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="">E-mail: </label>
            <input
              type="text"
              className="default-input"
              onChange={(e) =>
                setUserDataEdit((s) => ({
                  ...s,
                  email: e.target.value === "" ? s.email : e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="">Avatar: </label>
            <input
              type="text"
              className="default-input"
              onChange={(e) => {
                setUserDataEdit((s) => ({
                  ...s,
                  avatar: e.target.value === "" ? s.avatar : e.target.value,
                }));
              }}
            />
          </div>
          <HeroButtonComponent
            title={"Salvar alterações"}
            icon={"save"}
            action={() => {
              useUserStore.setState((s: any) => ({
                ...s,
                name: userDataEdit.name !== "" ? userDataEdit.name : s.name,
                avatar:
                  userDataEdit.avatar !== "" ? userDataEdit.avatar : s.avatar,
                email: userDataEdit.email !== "" ? userDataEdit.email : s.email,
              }));
              window.location.reload();
            }}
          />
        </section>
        <section>
          <h1>Sua assinatura</h1>
          <ul>
            <li>
              <strong>Plano Atual: </strong>{" "}
              {getPlanByID(store?.payment.currentPlanID)}
            </li>
            <li>
              <strong>Data de Cobrança: </strong> {store?.payment.billingDay}{" "}
            </li>
            <li>
              <strong>Status: </strong>{" "}
              {store?.payment.isActive ? "ativo" : "pendente"}
            </li>
          </ul>
          <div
            className="plans-grid"
            // style={{ display: "flex", flexDirection: "row" }}
          >
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
              action={() => {}}
            />
            <HeroButtonComponent
              title={"Trocar de Plano"}
              icon={"toggles"}
              action={() => {}}
            />
          </div>
        </section>

        <section></section>
      </section>
    </div>
  );
}
