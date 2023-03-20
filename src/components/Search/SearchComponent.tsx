import { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import { IMovieCard } from "../../types/types";
import NotFound from "../Error/NotFound";
import { getMoviesFromQuery } from "../../modules/api";
import { config } from "../../modules/config";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as IMovieCard[] | null | undefined);

  useEffect(() => {
    let data = [];
    async function getResults() {
      data = await getMoviesFromQuery(query);
      setResults(data);
    }
    getResults();
  }, [query]);

  return (
    <div className="search-overlay">
      <div className="search-top">
        <h1 style={{ color: "#4c4a4a" }}>
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
                cover={`${config.image_base_url + result.poster_path}`}
                synopsis={result.overview}
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
