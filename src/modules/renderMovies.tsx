import { useEffect, useState } from "react";
import MovieCard from "../components/Card/MovieCard";
import { getPopularMovies } from "./api";
import styles from "../styles/elements.module.scss";
import { config } from "./config";
import { shuffle } from "../utils/shuffle";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import HeroButtonComponent from "../components/Hero/HeroButtons/HeroButton";

export const MoviesCatalogue = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  let page = 1;

  async function fetchMovies() {
    const res = await getPopularMovies(page);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}
    >
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
      <HeroButtonComponent
        title={"Mais recomendações de filmes"}
        action={() => {
          page++;
          fetchMovies();
        }}
        icon={"dice-5-fill"}
      />
    </div>
  );
};
