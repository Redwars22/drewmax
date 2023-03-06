import { useEffect, useState } from "react";
import MovieCard from "../components/Card/MovieCard";
import { getPopularMovies } from "./api";
import "../styles/elements.css";
import { config } from "./config";
import { shuffle } from "../utils/shuffle";

export const MoviesCatalogue = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await getPopularMovies();

      setMovies(res);
    };
    getMovies();
  }, []);

  return (
    <div className="movie-catalog">
      {movies?.map(
        (movie: {
          title: string;
          poster_path: string;
          id: number;
          overview: string;
        }) => (
          <MovieCard
            title={movie.title}
            cover={`${config.image_base_url + movie.poster_path}`}
            id={movie.id}
            synopsis={movie.overview}
            key={0}
          />
        )
      )}
    </div>
  );
};
