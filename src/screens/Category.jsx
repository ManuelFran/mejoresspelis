import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import Filter from "../components/Filter";

function Category (){
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [category, setCategory] = useState('');
    const [inputValue, setInputValue] = useState('');
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

        setInputValue('');
    }, [with_genres]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGYyYTYyZDFhNjRmZmI1ODliMzhlMWRmZjhhZGYzNCIsInN1YiI6IjY1Mzc5ZTAyYWUzNjY4MDBlYTljNGFkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfy6iZZoRv-xLXx0J3o4kPSotyZJ0vi0Z5GeaxW3Co8'
            }
          };
          
          fetch('https://api.themoviedb.org/3/genre/movie/list?language=es-AR', options)
            .then(response => response.json())
            .then(response => setCategory(response.genres.filter(x => x.id == with_genres)[0].name))
            .catch(err => console.error(err));
    });

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(inputValue.toLowerCase()))

    return <section>
        <h1 className="text-center text-primary">{category}</h1>
    <Filter inputValue={inputValue} setInputValue={setInputValue} />
    <ul className="flex justify-center items-center flex-wrap gap-6">
    {filteredMovies.length > 0 ? (
        filteredMovies.map(movie=><MovieCard key={movie.id} movie={movie} favorites={favorites} setFavorites={setFavorites} />)
    ) : (<p>Cargando...</p>)
    }
    </ul>
    </section>
}

export default Category