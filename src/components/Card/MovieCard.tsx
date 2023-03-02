import { url } from "inspector";
import { IMovieCard } from "../../types/types";
import { useContext } from "react";
import { PlayerContext } from "../../modules/PlayerContext";
import { handleShowPlayer } from "../../modules/showPlayer";

export default function MovieCard(props: IMovieCard) {
  const player = useContext(PlayerContext);

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
        if (player?.getState().isPlaying) handleShowPlayer();
      }}
    >
      <img
        src={props.cover}
        className="movie-card-cover"
        alt={`capa do filme ${props.title}`}
      ></img>
      <div className="movie-info-container">
        <span className="movie-title">{props.title}</span>
        <p className="movie-synopsis">{props.synopsis}</p>
      </div>
    </div>
  );
}
