
import { useEffect,useState } from "react";
import './App.css'
import'./Movies'
import Movies from "./Movies";
import search from './search.svg'
const API_URL='https://www.omdbapi.com?apikey=efb1f785';

const App=()=>{
    const [movie,setmovie]=useState([])
    const [searchTrm,setsearchTrm]=useState('')
    const searchMovie= async (title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();
        setmovie(data.Search);
        
    }
    useEffect(() => {
   searchMovie('Movies')
    },[]);
    return(
        <div className="app">
        <h1>Movies world</h1>
        <div className="search">
            <input placeholder="search your Movie" value={searchTrm}
             onChange={(e)=>setsearchTrm(e.target.value)} />
            <img src={search} alt="search" onClick={()=>searchMovie(searchTrm)} /> 

        </div>
        {
            movie.length>0?(
                <div className="container">
                {movie.map((allMovies)=>(
                <Movies allMovies={allMovies} /> )) }
    
            </div>
            ):(
                <div className="container">
                    <h2>No movies found!</h2>
                    </div>
            )
        }
       
        </div>
    );
}
export default App;