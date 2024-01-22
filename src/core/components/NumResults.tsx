import { MovieData } from "../../shared/modal/Movie";

export default function NumResults({ movies }: { movies: MovieData[] }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
