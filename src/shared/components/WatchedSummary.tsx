const average = (arr: any) =>
  arr.reduce(
    (acc: any, cur: any, i: any, arr: any) => acc + cur / arr.length,
    0
  );

export default function WatchedSummary({ watched }: any) {
  const avgImdbRating = average(watched.map((movie: any) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie: any) => movie.userRating));
  const avgRuntime = average(watched.map((movie: any) => movie.runtime));
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
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
