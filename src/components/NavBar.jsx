import React from "react"
import { Input } from "./Input"
import { Logo } from "./Logo"


export function NavBar({query, setQuery, movies}) {
    return (
        <div>
            <nav className="nav-bar">
                <Logo/>
       
        <Input query = {query} setQuery = {setQuery}  />
        
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
        </nav>
        </div>

    )
}