import Movie from "./Movie";

export default function MovieList({ movies }: any) {
  return (
    <ul className="list">
      {movies?.map((movie: any) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
