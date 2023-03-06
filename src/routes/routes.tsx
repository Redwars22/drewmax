import { BrowserRouter, Switch, Route } from "react-router-dom";
import AndrewFade from "../andrewnimate/Fade";
import Page404 from "../components/Error/404";
import DefaultError from "../components/Error/DefaultError";
import HeaderComponent from "../components/Header/Header";
import HeroComponent from "../components/Hero/Hero";
import PlayerComponent from "../components/Player/Player";
import SearchComponent from "../components/Search/SearchComponent";
import UserComponent from "../components/User/User";
import { hero } from "../data/hero";
import { MoviesCatalogue } from "../modules/renderMovies";

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
            <>
              <HeroComponent
                title={hero.title}
                synopsis={hero.synopsis}
                image={hero.image}
              />

              {MoviesCatalogue()}
            </>
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
    </BrowserRouter>
  );
}
