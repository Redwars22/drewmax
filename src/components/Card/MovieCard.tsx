import { url } from "inspector";
import { IMovieCard } from "../../types/types";

export default function MovieCard(props: IMovieCard) {
  return (
    <div className="card">
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
