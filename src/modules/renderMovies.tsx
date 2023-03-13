import { useEffect, useState } from "react";
import MovieCard from "../components/Card/MovieCard";
import { getPopularMovies } from "./api";
import styles from "../styles/elements.module.scss";
import { config } from "./config";
import { shuffle } from "../utils/shuffle";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

export const MoviesCatalogue = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  async function fetchMovies() {
    const res = await getPopularMovies();
    setMovies(res);
  }

  const { data, status } = useQuery("movies", fetchMovies);

  // if (status === "loading") {
  //   return <h1 style={{ color: "red" }}>Carregando...</h1>;
  // }

  if (status === "error") {
    history.push("/error");
  }

  return (
    <div className={styles["movie-catalog"]}>
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
