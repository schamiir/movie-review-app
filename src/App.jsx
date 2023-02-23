import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import Header from './components/header/Header'
import Trailer from './components/trailer/Trailer'
import NotFound from './components/notFound/NotFound'


function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {

    try
    {

      const response = await api.get('/api/v1/movies')
      
      setMovies(response.data)

      // promise made from axiosConfig
    }
    catch(err)
    {
      console.log(err)
    }
   
  }

  const getMovieData = async (movieId) => {

    try
    {
      const response = await api.get(`/api/v1/movies/${movieId}`)
      
      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);
    
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  )
}


export default App
