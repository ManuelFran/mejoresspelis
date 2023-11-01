import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetailCard from "../components/MovieDetailCard"

function Detail(){
    const [movie,setMovie] = useState('');
    const { movie_id } = useParams();
    const [myFavorites, setMyFavorites] = useState([]);

    useEffect(() => {
          
          fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=58f2a62d1a64ffb589b38e1dff8adf34&language=es-AR`)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err));
  }, [movie_id])

    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      storedFavorites && setMyFavorites(storedFavorites);
    }, []);

    return <section>
    {movie !== '' ? (
        <MovieDetailCard key={movie.id} movie={movie}  myFavorites={myFavorites} setMyFavorites={setMyFavorites}/>
    ) : (<p>Cargando...</p>)
    }
</section>
}

export default Detail