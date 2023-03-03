import { setTextRange } from "typescript";
import CardsSection from "../CardsSection/CardsSection";
import { useCallback, useEffect, useState } from "react";
import { movies } from "../../data/movies";
import MovieCard from "../Card/MovieCard";
import { IMovieCard } from "../../types/types";

export default function SearchOverlay() {
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
      <input
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
      />
      {results?.map((result) => (
        <MovieCard
          title={result.title}
          cover={result.cover}
          synopsis={result.synopsis}
          id={result.id}
        />
      ))}
    </div>
  );
}
