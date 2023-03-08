import { url } from "inspector";
import { IMovieCard } from "../../types/types";
import { useContext } from "react";
import { PlayerContext } from "../../modules/PlayerContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../modules/UserContext";
import { toast } from "react-toastify";

export default function MovieCard(props: IMovieCard) {
  const player = useContext(PlayerContext);
  const user = useContext(UserContext);
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() => {
        if (user.isActive) {
          player?.setPlayerProps({
            isPlaying: true,
            movie: {
              title: props.title,
              uuid: "0",
              data: {
                synopsis: props.synopsis,
                cover: props.cover,
              },
            },
          });
          history.push("/watch");
        } else {
          toast(
            "Você precisa ser um assinante para assistir a algum título. Junte-se ao Drewflix, o preço é acessível!"
          );
        }
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
