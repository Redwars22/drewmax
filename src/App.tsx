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
import DefaultError from "./components/Error/DefaultError";
import UserComponent from "./components/User/User";
import NavigationComponent from "./routes/routes";

function App() {
  return (
    <div className="App">
      <PlayerContextProvider value={null}>
        <ToastContainer
          theme={"dark"}
          position={"bottom-right"}
          style={{ zIndex: 10000000 }}
        />
        <NavigationComponent />
      </PlayerContextProvider>
    </div>
  );
}

export default App;
