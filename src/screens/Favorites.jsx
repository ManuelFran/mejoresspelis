import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (storedFavorites.length > 0) {
            Promise.all(
                storedFavorites.map((movie_id) =>
                  
                  fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=58f2a62d1a64ffb589b38e1dff8adf34&language=es-AR`)
                  .then(response => response.json())
                  )
                )
                .then((data) => setFavoriteMovies(data.map((movie) => movie)))
                .catch((error) => console.error(error));
                
                
            setFavorites(storedFavorites);
        }
    }, []);

    
    const removeFavorite = (movieId) => {
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== movieId));
    };

    return (
        <div>
            <h2 className="text-center my-6">Pelis Favoritas</h2>
            <ul className="flex justify-center items-center flex-wrap gap-6">
                {favoriteMovies.length > 0 ? (
                    
                    favoriteMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            removeFavorite={removeFavorite}
                        />
                    ))
                ) : (
                    <p>No hay pelis favoritas guardadas.</p>
                )}
            </ul>
        </div>
    );
}

export default Favorites;