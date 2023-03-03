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
import SearchComponent from "./components/Search/Search";
import SearchOverlay from "./components/Search/SearchOverlay";

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme={"dark"}
        position={"bottom-right"}
        style={{ zIndex: 10000000 }}
      />
      <PlayerContextProvider value={null}>
        <HeaderComponent />
        <HeroComponent
          title={hero.title}
          synopsis={hero.synopsis}
          image={hero.image}
        />
        <PlayerComponent />
        <SearchOverlay />
        <div className="vertical-navigation">
          {categories.map((category) => (
            <CardsSection title={category.title} id={category.id} />
          ))}
        </div>
      </PlayerContextProvider>
    </div>
  );
}

export default App;
