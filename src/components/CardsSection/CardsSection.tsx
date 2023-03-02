import { movies } from "../../data/movies";
import { ICardsSection, IMovieCard } from "../../types/types";
import { shuffle } from "../../utils/shuffle";
import MovieCard from "../Card/MovieCard";

export default function CardsSection(props: ICardsSection) {
  let filteredMovies: IMovieCard[] | undefined = movies.filter(
    (movie) => movie.id === props.id
  );

  if (props.title === "Continue de onde parou") {
    filteredMovies = shuffle(filteredMovies);
  }

  return (
    <div className="section">
      <span className="section-title">{props.title}</span>
      <div className="horizontal-navigation">
        {filteredMovies?.map(
          (item: IMovieCard) =>
            filteredMovies && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
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
                {props.title === "Continue de onde parou" && (
                  <progress
                    value={Math.floor(Math.random() * 101)}
                    max={100}
                    style={{
                      marginTop: "-1rem",
                      zIndex: "1",
                      accentColor: "red",
                    }}
                  ></progress>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
