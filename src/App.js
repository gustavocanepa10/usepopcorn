import { useState } from "react";
import { NavBar } from "./components/Navigation/NavBar";
import { Main } from "./components/Navigation/Main";
import { Logo } from "./components/UI/Logo";
import { Input } from "./components/UI/Input"
import { NumResults } from "./components/Stats/NumResult"
import { ListBox } from "./components/Box/ListBox";
import { ListWatched } from "./components/Box/ListWatched"
import { MovieList } from "./components/Movie/MovieList"
import { Summary } from "./components/Stats/Summary";
import { MovieListWatched } from "./components/Movie/MovieListWatched";


const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.length ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0;

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  
 

  return (



  
    <>
       <NavBar> 
       <Logo/>
       
       <Input query = {query} setQuery = {setQuery}  />
       
       <NumResults  movies = {movies}/>
        
       </NavBar>
      <Main 
      
      
      >

        <ListBox isOpen1 = {isOpen1} setIsOpen1 = {setIsOpen1}>
          <MovieList movies={movies}/>
        </ListBox>
        <ListWatched isOpen2 = {isOpen2} setIsOpen2 = {setIsOpen2}>

          <Summary watched = {watched} avgImdbRating = {avgImdbRating} avgRuntime = {avgRuntime} avgUserRating = {avgUserRating}   />
          <MovieListWatched watched = {watched}  avgImdbRating = {avgImdbRating} />

        </ListWatched>

      </Main>

      
    </>
  )
}
