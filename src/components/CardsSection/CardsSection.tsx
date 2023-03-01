import { movies } from "../../data/movies";
import { ICardsSection, IMovieCard } from "../../types/types";
import MovieCard from "../Card/MovieCard";

export default function CardsSection(props: ICardsSection) {
  const filteredMovies: IMovieCard[] | undefined = movies.filter(
    (movie) => movie.id === props.id
  );

  return (
    <div className="section">
      <span className="section-title">{props.title}</span>
      <div className="horizontal-navigation">
        {filteredMovies?.map(
          (item: IMovieCard) =>
            filteredMovies && (
              <MovieCard
                title={item.title}
                cover={item.cover}
                synopsis={
                  item.synopsis.length > 142
                    ? item.synopsis.substring(0, 142) + "..."
                    : item.synopsis
                }
                id={0}
              />
            )
        )}
      </div>
    </div>
  );
}
