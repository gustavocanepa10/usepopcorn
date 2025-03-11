import { Summary } from "./Summary"
import { MovieListWatched } from "./MovieListWatched"



export function ListWatched({isOpen2,setIsOpen2, watched, avgImdbRating, avgRuntime, avgUserRating, movies}) {
    return <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen2((open) => !open)}
    >
      {isOpen2 ? "–" : "+"}
    </button>
    {isOpen2 && (
      <>

    <Summary watched = {watched} avgImdbRating = {avgImdbRating} avgRuntime =  {avgRuntime}  avgUserRating = {avgUserRating} movies = {movies}  />
        
    <MovieListWatched watched = {watched} movies={movies}  key = {avgImdbRating}   />
        
      </>
    )}
  </div>
}