export interface MovieData {
  imdbID?: string;
  Title?: string;
  Year?: string;
  Poster?: string;
}

export interface WatchedMovieData {
  imdbID?: string;
  title?: string;
  Year?: string;
  poster?: string;
  runtime?: number;
  imdbRating?: string;
  userRating?: string;
}

export interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  messages?: [string];
  defaultRating?: number;
  onSetRating?: any;
}
