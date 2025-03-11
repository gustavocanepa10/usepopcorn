import { MovieList } from "./MovieList"



export function ListBox({setIsOpen1,setIsOpen2,isOpen2,isOpen1, movies, avgImdbRating}) {
    return <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen1((open) => !open)}
    >
      {isOpen1 ? "–" : "+"}
    </button>
    {isOpen1 && (

    <MovieList movies = {movies} key={avgImdbRating}  />
      
    )}
  </div>
}