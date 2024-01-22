import { WatchedMovieData } from "../modal/Movie";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched, onDeleteWatched }: any) {
  return (
    <ul className="list">
      {watched.map((movie: WatchedMovieData) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
