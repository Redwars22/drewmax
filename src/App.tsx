import React from "react";
import logo from "./logo.svg";
import CardsSection from "./components/CardsSection/CardsSection";
import { categories } from "./data/categories";
import HeaderComponent from "./components/Header/Header";
import HeroComponent from "./components/Hero/Hero";
import { hero } from "./data/hero";
import "./styles/layout.css";
import "./styles/elements.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PlayerComponent from "./components/Player/Player";
import { IPlayerContext } from "./types/player";
import { PlayerContextProvider } from "./modules/PlayerContext";
import SearchComponent from "./components/Search/SearchComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AndrewFade from "./andrewnimate/Fade";
import Page404 from "./components/Error/404";
import { MoviesCatalogue } from "./modules/renderMovies";

function App() {
  return (
    <div className="App">
      <PlayerContextProvider value={null}>
        <ToastContainer
          theme={"dark"}
          position={"bottom-right"}
          style={{ zIndex: 10000000 }}
        />
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
      </PlayerContextProvider>
    </div>
  );
}

export default App;
