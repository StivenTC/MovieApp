import Image from "next/image";
import styles from "./MovieCard.module.scss";
import { MovieType } from "@/utils/types";
import { useRouter } from "next/navigation";

export default function MovieCard({ movie }: { movie: MovieType }) {
  const router = useRouter();

  const handleClicOnMovie = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  }

  return (
    <button onClick={() => handleClicOnMovie(movie.id)} className={styles.movieCard} key={movie.id}>
      <Image
        alt={`${movie.title} poster`}
        layout='fill'
        objectFit='contain'
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    </button>

  );
}
