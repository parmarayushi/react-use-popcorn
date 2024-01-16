import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched }: any) {
  return (
    <ul className="list">
      {watched.map((movie: any) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
