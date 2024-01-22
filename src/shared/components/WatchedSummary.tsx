import { WatchedMovieData } from "../modal/Movie";

const average = (arr: any) =>
  arr.reduce(
    (acc: number, i: number, cur: number, arr: any) => acc + cur / arr.length,
    0
  );

export default function WatchedSummary({
  watched,
}: {
  watched: WatchedMovieData[];
}) {
  const avgImdbRating = average(
    watched.map((movie: WatchedMovieData) => movie.imdbRating)
  );
  const avgUserRating = average(
    watched.map((movie: WatchedMovieData) => movie.userRating)
  );
  const avgRuntime = average(
    watched.map((movie: WatchedMovieData) => movie.runtime)
  );
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
