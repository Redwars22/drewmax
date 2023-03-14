import { BrowserRouter, Switch, Route } from "react-router-dom";
import AndrewFade from "../andrewnimate/Fade";
import Page404 from "../components/Error/404";
import DefaultError from "../components/Error/DefaultError";
import HeaderComponent from "../components/Header/Header";
import HeroComponent from "../components/Hero/Hero";
import PlayerComponent from "../components/Player/Player";
import SearchComponent from "../components/Search/SearchComponent";
import UserComponent from "../components/User/screen/User";
import { hero } from "../data/hero";
import { MoviesCatalogue } from "../modules/renderMovies";
import LoginComponent from "../components/User/screen/Login";
import LoginError from "../components/Error/LoginError";
import HeroButtonComponent from "../components/Hero/HeroButtons/HeroButton";

export default function NavigationComponent() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route exact path="/">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <div>
              <HeroComponent
                title={hero.title}
                synopsis={hero.synopsis}
                image={hero.image}
              />
              {MoviesCatalogue()}
            </div>
          </AndrewFade>
        </Route>
        <Route path="/login">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <LoginComponent />
          </AndrewFade>
        </Route>
        <Route path="/watch">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <PlayerComponent />
          </AndrewFade>
        </Route>
        <Route path="/search">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <SearchComponent />
          </AndrewFade>
        </Route>
        <Route path="/error">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <DefaultError />
          </AndrewFade>
        </Route>
        <Route path="/user">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <UserComponent />
          </AndrewFade>
        </Route>
        <Route path="/login-error">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <LoginError />
          </AndrewFade>
        </Route>
        <Route path="*">
          <AndrewFade
            props={{
              increment: 0.1,
              initialOpacity: 0,
              targetOpacity: 1,
              interval: 50,
              type: "fadein",
            }}
          >
            <Page404 />
          </AndrewFade>
        </Route>
      </Switch>
      {/* <FooterComponent
        backgroundColor={"red"}
        foregroundColor={"white"}
        appName={"DREWMAX"}
        links={footerLinks}
        description={
          "Um serviço de streaming projetado para te oferecer uma boa experiência, um catálogo bem abrangente e um preço acessível para que você possa curtir suas séries e filmes favoritos com a sua família e amigos."
        }
      /> */}
    </BrowserRouter>
  );
}
