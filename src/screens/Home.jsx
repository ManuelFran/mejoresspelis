import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

function Home (){
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGYyYTYyZDFhNjRmZmI1ODliMzhlMWRmZjhhZGYzNCIsInN1YiI6IjY1Mzc5ZTAyYWUzNjY4MDBlYTljNGFkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfy6iZZoRv-xLXx0J3o4kPSotyZJ0vi0Z5GeaxW3Co8'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-AR&page=1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, [])

    return <section>
        <ul className="flex flex-wrap gap-6">
        {movies.length > 0 ? (
            movies.map(movie=> <li id={movie.id}><MovieCard key={movie.id} movie={movie}/></li>)
        ) : (<li><p>Cargando...</p></li>)
        }
        </ul>
    </section>
}

export default Home