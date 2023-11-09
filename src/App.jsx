import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/App.css'
import Home from '/screens/Home'
import Category from '/screens/Category'
import Favorites from '/screens/Favorites'
import Results from '/screens/Results'
import NotFound404 from '/screens/NotFound404'
import Navbar from '/components/NavBar'
import Footer from '/components/Footer'
import Detail from '/screens/Detail'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:with_genres' element={<Category/>}/>
        <Route path='/detail/:movie_id' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/results/:query' element={<Results/>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
