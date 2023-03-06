import { setTextRange } from "typescript";
import CardsSection from "../CardsSection/CardsSection";
import { useCallback, useEffect, useState } from "react";
import { movies } from "../../data/movies";
import MovieCard from "../Card/MovieCard";
import { IMovieCard } from "../../types/types";
import NotFound from "../Error/NotFound";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as IMovieCard[] | null | undefined);

  useEffect(() => {
    let results: IMovieCard[] | null | undefined;

    setResults(
      query !== ""
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
          )
        : null
    );
  }, [query]);

  return (
    <div className="search-overlay">
      <div className="search-top">
        <h1 style={{ color: "red" }}>
          Pesquisar no catálogo de filmes de séries
        </h1>
        <input
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {results ? (
          <div className="search-results">
            {results?.map((result) => (
              <MovieCard
                title={result.title}
                cover={result.cover}
                synopsis={result.synopsis}
                id={result.id}
              />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
