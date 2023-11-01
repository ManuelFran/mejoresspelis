import { useState } from "react"

function MovieDetailCard(props){
    const [favorite, setFavorite] = useState(false)

    return (<div className="card w-100 bg-base-100 shadow-xl">
    <figure><img src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path} alt="Película"/></figure>
    <div className="card-body">
      <h2 className="card-title">{props.movie.title}</h2>
      <p>{"Fecha de Estreno en USA: " + props.movie.release_date}</p>
      <p>Valoración de la audiencia: </p><div className="radial-progress text-primary" style={{"--value":props.movie.vote_average*10}}>{parseFloat(props.movie.vote_average*10).toFixed(2) + "%"}</div>
      <p>{props.movie.overview}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => setFavorite(!favorite)}>{favorite ? '❤️':'🤍'}</button>
      </div>
    </div>
  </div>)
}

export default MovieDetailCard