import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetailCard from "../components/MovieDetailCard"

function Detail(){
    const [movie,setMovie] = useState('')
    const { movie_id } = useParams()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGYyYTYyZDFhNjRmZmI1ODliMzhlMWRmZjhhZGYzNCIsInN1YiI6IjY1Mzc5ZTAyYWUzNjY4MDBlYTljNGFkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfy6iZZoRv-xLXx0J3o4kPSotyZJ0vi0Z5GeaxW3Co8'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=es-AR`, options)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err));
    }, [movie_id])

    return <section>
    {movie !== '' ? (
        <MovieDetailCard key={movie.id} movie={movie}  />
    ) : (<p>Cargando...</p>)
    }
</section>
}

export default Detail