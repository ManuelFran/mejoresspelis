import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';

function Results (){
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { query } = useParams();

    useEffect(() =>{          
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGYyYTYyZDFhNjRmZmI1ODliMzhlMWRmZjhhZGYzNCIsInN1YiI6IjY1Mzc5ZTAyYWUzNjY4MDBlYTljNGFkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfy6iZZoRv-xLXx0J3o4kPSotyZJ0vi0Z5GeaxW3Co8'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=es-AR&page=1`, options)
            .then(response => response.json())
            .then(response => setMovies(response.results.filter((x) => x.backdrop_path !== null )))
            .catch(err => console.error(err));

    },[query]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);



    return <section>
            <h1 className="text-left my-6 text-green-500">Resultados para: <b>{query}</b></h1>
            <ul className="flex justify-center items-center flex-wrap gap-6">
                {movies.length > 0 ? (
                    movies
                        .map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                        ))
                ) : (
                    <p>Cargando...</p>
                )}
            </ul>
        </section>
}

export default Results