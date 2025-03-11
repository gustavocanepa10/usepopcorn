import React from "react"
import { Input } from "./UI/Input"
import { Logo } from "./UI/Logo"
import { NumResults } from "./NumResult"


export function NavBar({query, setQuery, movies}) {
    return <nav className="nav-bar">
                <Logo/>
       
        <Input query = {query} setQuery = {setQuery}  />
        
        <NumResults  movies = {movies}/>
        
        </nav>
        

    
}