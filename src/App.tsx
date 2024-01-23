import { useEffect, useState } from "react";
import Header from "./core/components/Header";
import Loader from "./core/components/Loader";
import NumResults from "./core/components/NumResults";
import Search from "./core/components/Search";
import Box from "./shared/common-ui/Box";
import Main from "./shared/components/Main";
import MovieDetails from "./shared/components/MovieDetails";
import MovieList from "./shared/components/MovieList";
import WatchedMovieList from "./shared/components/WatchedMovieList";
import WatchedSummary from "./shared/components/WatchedSummary";
import { MovieData, WatchedMovieData } from "./shared/modal/Movie";

const KEY = "817be41";
export default function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [watched, setWatched] = useState<WatchedMovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`
      );

      if (!res.ok) throw new Error("Something went wrong with fetching movies");

      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  const handleSelectedMovie = (id: any) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie: WatchedMovieData) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id: string) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  return (
    <>
      <Header>
        <Search />
        <NumResults movies={movies} />
      </Header>

      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <MovieList movies={movies} onSelectMovie={handleSelectedMovie} />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
