import { MovieData } from "../modal/Movie";
import Movie from "./Movie";

export default function MovieList({ movies }: any) {
  return (
    <ul className="list">
      {movies?.map((movie: MovieData) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
