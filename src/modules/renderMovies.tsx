import { useEffect, useState } from "react";
import MovieCard from "../components/Card/MovieCard";
import { getPopularMovies } from "./api";
import styles from "../styles/elements.module.scss";
import { config } from "./config";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import HeroButtonComponent from "../components/Hero/HeroButtons/HeroButton";
import HeroComponent from "../components/Hero/Hero";
import { hero } from "../data/hero";
import Lottie from "react-lottie";
import * as animationData from "../data/loading.json";

export const MoviesCatalogue = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const [page, setPage] = useState(Math.floor(Math.random() * 99));
  const { data, status } = useQuery("movies", fetchMovies);

  async function fetchMovies() {
    const res = await getPopularMovies(page);
    setMovies(res);
  }

  useEffect(() => {
    async function getMovies() {
      await fetchMovies();
    }

    getMovies();
  }, [page]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (status === "loading") {
    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
        <h1 style={{ color: "red", textAlign: "center" }}>CARREGANDO...</h1>
      </div>
    );
  }

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
      <HeroComponent
        title={hero.title}
        synopsis={hero.synopsis}
        image={hero.image}
      />
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
        action={() => setPage(page + 1)}
        icon={"dice-5-fill"}
      />
    </div>
  );
};
