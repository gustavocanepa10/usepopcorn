import { ListBox } from "./ListBox"
import { ListWatched } from "./ListWatched"


export function Main({setIsOpen1,isOpen1,isOpen2,setIsOpen2, watched, avgImdbRating, avgRuntime, avgUserRating, movies}) {
    return <main className="main">

      <ListBox isOpen1 = {isOpen1}  setIsOpen1 = {setIsOpen1}  movies={movies} avgImdbRating = {avgImdbRating} />

      <ListWatched watched = {watched} setIsOpen2 = {setIsOpen2} isOpen2 = {isOpen2}  avgImdbRating = {avgImdbRating} avgUserRating={avgUserRating} avgRuntime = {avgRuntime} movies = {movies} />

      
    

    
  </main>
}
