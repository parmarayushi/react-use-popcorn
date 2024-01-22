import { MovieData } from "../modal/Movie";
import Movie from "./Movie";

export default function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: MovieData[];
  onSelectMovie: any;
}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie: MovieData) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
