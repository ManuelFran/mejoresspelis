import { useState } from "react"
import { Link } from "react-router-dom"

function MovieCard(props){
    const [favorite, setFavorite] = useState(false)

    return (<div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={"https://image.tmdb.org/t/p/w500/" + props.movie.backdrop_path} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">{props.movie.title}</h2>
      <p>{"Fecha de Estreno en USA: " + props.movie.release_date}</p>
      <p>Valoración de la audiencia: </p><div className="radial-progress text-primary" style={{"--value":props.movie.vote_average*10}}>{props.movie.vote_average*10 + "%"}</div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link to={`/detail/${props.movie.id}`}>Sinopsis</Link></button>
        <button className="btn btn-primary" onClick={() => setFavorite(!favorite)}>{favorite ? '❤️':'🤍'}</button>
      </div>
    </div>
  </div>)
}

export default MovieCard