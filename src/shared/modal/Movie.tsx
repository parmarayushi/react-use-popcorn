export class MovieData {
  public imdbID: string;
  public Title: string;
  public Year: string;
  public Poster: string;

  constructor(imdbID: string, Title: string, Year: string, Poster: string) {
    this.imdbID = imdbID;
    this.Title = Title;
    this.Year = Year;
    this.Poster = Poster;
  }
}

export class WatchedMovieData {
  public imdbID: string;
  public Title: string;
  public Year: string;
  public Poster: string;
  public runtime: number;
  public imdbRating: number;
  public userRating: number;

  constructor(
    imdbID: string,
    Title: string,
    Year: string,
    Poster: string,
    runtime: number,
    imdbRating: number,
    userRating: number
  ) {
    this.imdbID = imdbID;
    this.Title = Title;
    this.Year = Year;
    this.Poster = Poster;
    this.runtime = runtime;
    this.imdbRating = imdbRating;
    this.userRating = userRating;
  }
}
