import Image from "next/image";
import styles from "./ContentCategory.module.scss";
import { MovieType } from "@/utils/types";
import MovieCard from "../movieCard/MovieCard";

export default function ContentCategory({ moviesList }: { moviesList: MovieType[] }) {

  return (
    <section className={styles.header}>
      {moviesList.map((movie) =>
        <MovieCard movie={movie} key={movie.id} />
      )}
    </section>
  );
}
