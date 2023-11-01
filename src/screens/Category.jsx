import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

function Category (){
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { with_genres } = useParams();

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGYyYTYyZDFhNjRmZmI1ODliMzhlMWRmZjhhZGYzNCIsInN1YiI6IjY1Mzc5ZTAyYWUzNjY4MDBlYTljNGFkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfy6iZZoRv-xLXx0J3o4kPSotyZJ0vi0Z5GeaxW3Co8'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-MX&page=1&sort_by=popularity.desc&with_genres=${with_genres}`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, [with_genres]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);

    return <section>
    <ul className="flex justify-center items-center flex-wrap gap-6">
    {movies.length > 0 ? (
        movies.slice(0,9).map(movie=><MovieCard key={movie.id} movie={movie} favorites={favorites} setFavorites={setFavorites} />)
    ) : (<p>Cargando...</p>)
    }
    </ul>
    </section>
}

export default Category