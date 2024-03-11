'use client'
import Image from "next/image";
import styles from "./ContentDetails.module.scss";
import { movieDetail } from "@/utils/types";
import { getFixedRuntime } from "@/utils/getFixedRuntime";

export default function ContentDetails({ movieData }: { movieData: movieDetail }) {
  function getYear(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  const genreNames = movieData.genres?.map(genre => genre.name).join(", ");

  return (
    <main className={styles.movie} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`
    }}>
      <article>
        <figure>
          <Image
            alt={`${movieData.title} poster`}
            width={240}
            height={360}
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} />
        </figure>
        <section>
          <h1>{movieData.title}</h1>
          <h2>{movieData.tagline}</h2>
          <p>{genreNames}</p>
          <p>{`${getYear(movieData.release_date)} | ${getFixedRuntime(movieData.runtime)}`}</p>
          <hr />
          <p>{movieData.overview}</p>
        </section>
      </article>
    </main>
  );
}
