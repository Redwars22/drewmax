import { url } from "inspector";
import { IMovieCard } from "../../types/types";
import { useContext } from "react";
import { PlayerContext } from "../../modules/PlayerContext";
import { useHistory } from "react-router-dom";

export default function MovieCard(props: IMovieCard) {
  const player = useContext(PlayerContext);
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() => {
        player?.setPlayerProps({
          isPlaying: true,
          movie: {
            title: props.title,
            uuid: "0",
          },
        });
        history.push("/watch");
      }}
    >
      <img
        src={props.cover}
        className="movie-card-cover"
        alt={`capa do filme ${props.title}`}
      ></img>
      <div className="movie-info-container">
        <span className="movie-title">{props.title}</span>
        <p className="movie-synopsis">
          {props.synopsis !== "" || props.synopsis !== undefined
            ? props?.synopsis?.length! > 100
              ? props.synopsis!.substring(0, 100) + "..."
              : props.synopsis
            : "Sentimos muito, mas não foi fornecida uma sinopse para este filme."}
        </p>
      </div>
    </div>
  );
}
