import React from "react"
import { Input } from "./Input"
import { Logo } from "./Logo"
import { NumResults } from "./NumResult"


export function NavBar({query, setQuery, movies}) {
    return <nav className="nav-bar">
                <Logo/>
       
        <Input query = {query} setQuery = {setQuery}  />
        
        <NumResults  movies = {movies}/>
        
        </nav>
        

    
}