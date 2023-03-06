import { toast } from "react-toastify";
import HeroButtonComponent from "./HeroButton";
import { useCallback, useContext, useState } from "react";
import { PlayerContext } from "../../../modules/PlayerContext";
import { hero } from "../../../data/hero";
import { handleRating } from "../../../modules/handleRating";
import { useHistory } from "react-router-dom";

export default function HeroButtonsComponent() {
  const [movieAddedToList, setMovieAddedToList] = useState<boolean>(false);
  const player = useContext(PlayerContext);
  const history = useHistory();

  const AddMovieToList = useCallback(
    () => (
      <>
        {!movieAddedToList && (
          <HeroButtonComponent
            title={"Adicionar à Lista"}
            icon={"plus-circle"}
            action={() => {
              setMovieAddedToList(true);
              toast("Adicionado à lista com sucesso!");
            }}
          />
        )}
        {movieAddedToList && (
          <HeroButtonComponent
            title={"Remover da Lista"}
            icon={"dash-circle"}
            action={() => {
              setMovieAddedToList(false);
              toast("Removido da lista com sucesso!");
            }}
          />
        )}
      </>
    ),
    [movieAddedToList]
  );

  return (
    <>
      <div className="hero-buttons">
        <AddMovieToList />
        <HeroButtonComponent
          title={"Assistir Agora"}
          icon={"play-circle"}
          action={() => {
            player?.setPlayerProps({
              isPlaying: true,
              movie: {
                title: hero.title,
                uuid: "0",
              },
            });
            history.push("/watch");
          }}
        />
        <HeroButtonComponent
          title={"Não Gostei"}
          icon={"hand-thumbs-down"}
          action={() => handleRating("dislike")}
        />
        <HeroButtonComponent
          title={"Gostei"}
          icon={"hand-thumbs-up"}
          action={() => handleRating("like")}
        />
      </div>
    </>
  );
}
