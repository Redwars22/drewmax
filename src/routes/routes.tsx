import { BrowserRouter, Switch, Route } from "react-router-dom";
import AndrewFade from "../andrewnimate/Fade";
import Page404 from "../components/Error/404";
import DefaultError from "../components/Error/DefaultError";
import HeaderComponent from "../components/Header/Header";
import PlayerComponent from "../components/Player/Player";
import SearchComponent from "../components/Search/SearchComponent";
import UserComponent from "../components/User/screen/User";
import LoginComponent from "../components/User/screen/Login";
import LoginError from "../components/Error/LoginError";
import CatalogueComponent from "./screens/Catalogue";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function NavigationComponent() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route exact path="/">
          <CatalogueComponent />
        </Route>
        <Route path="/login">
          <LoginComponent />
        </Route>
        <Route path="/watch">
          <PlayerComponent />
        </Route>
        <Route path="/search">
          <SearchComponent />
        </Route>
        <Route path="/error">
          <DefaultError />
        </Route>
        <Route path="/user">
          <UserComponent />
        </Route>
        <Route path="/login-error">
          <LoginError />
        </Route>
        <Route path="*">
          <Page404 />
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

/**
 * 
 *       <AndrewFade
        props={{
          increment: 0.1,
          initialOpacity: 0,
          targetOpacity: 1,
          interval: 50,
          type: "fadein",
        }}
      >
 */
