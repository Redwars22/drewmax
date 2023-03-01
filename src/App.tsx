import React from "react";
import logo from "./logo.svg";
import CardsSection from "./components/CardsSection/CardsSection";
import { categories } from "./data/categories";
import HeaderComponent from "./components/Header/Header";
import HeroComponent from "./components/Hero/Hero";
import { hero } from "./data/hero";
import "./styles/layout.css";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroComponent title={hero.title} synopsis="" image={hero.image} />
      <div className="vertical-navigation">
        {categories.map((category) => (
          <CardsSection title={category.title} id={category.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
