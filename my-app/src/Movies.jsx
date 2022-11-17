import React from "react";
const Movies=({allMovies})=>{

    return(
        <div className="movie">
        <div>
            <p>{allMovies.Year}</p>
        </div>
        <div>
            <img src= {allMovies.Poster!=='N/A'?allMovies.Poster:'https://via.placeholder.com/400'}alt={allMovies.Title}/>
        </div>
        <div>
            <span>{allMovies.Type}</span>
            <h3>{allMovies.Title}</h3>
        </div>

    </div>
    )
}
export default Movies;