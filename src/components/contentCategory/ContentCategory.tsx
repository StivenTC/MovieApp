import styles from "./ContentCategory.module.scss";
import { MovieType } from "@/utils/types";
import MovieCard from "../movieCard/MovieCard";

export default function ContentCategory({ moviesList }: { moviesList: MovieType[] }) {

  return (
    <section className={styles.contentCategory}>
      {moviesList.map((movie) =>
        <MovieCard movie={movie} key={movie.id} />
      )}
    </section>
  );
}
