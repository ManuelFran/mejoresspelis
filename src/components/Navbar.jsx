import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Results from "../screens/Results"

function Navbar(){  
  const [input, setInput] = useState('');
  const navigate = useNavigate();

 const handleKeyUp = ((e) => {
    if (e.key === 'Enter') {
        navigate(`/results/${input}`);
    }
});
    return (<div className="navbar bg-base-100">
    <div className="flex-1 px-0">
      <span className="btn btn-ghost normal-case text-xl"><Link to="/">Mejores Pelis</Link></span>
    </div>
    <ul className="flex gap-5 px-8">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/35">Comedia</Link></li>
        <li><Link to="/category/16">Animación</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
    </ul>
    <div className="flex-none gap-1">
      <div className="form-control">
        <input type="text" onChange={(e) => setInput(e.currentTarget.value)} onKeyUp={(e) => handleKeyUp(e)} placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
    </div>
  </div>)
}

export default Navbar