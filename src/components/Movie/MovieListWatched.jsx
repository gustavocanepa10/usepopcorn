
import { MovieWatched } from "./MovieWatched"


export function MovieListWatched({watched,  avgImdbRating}) {
    return <ul className="list">
    {watched.map((movie) => (
      <MovieWatched  movie = {movie} key={avgImdbRating}  />
    ))}
  </ul>
}