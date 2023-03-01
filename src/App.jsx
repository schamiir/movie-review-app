import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import Header from './components/header/Header'
import Reviews from './components/reviews/Reviews'
import NotFound from './components/notFound/NotFound'
import Login from './components/login/login.jsx'
import Register from './components/register/Register'
import UserPage from './components/userpage/UserPage'
import ResultsPage from './components/results/ResultsPage'
import UserReviews from './components/allUserReviews/UserReviews'
import ExploreReviews from './components/exploreReviews/ExploreReviews'



function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState();

  const url = `/movie/popular?api_key=a9bd84c15f8fa17808fb7e767b72bc08`;

  const getMovies = async () => {

    try
    {

      const response = await api.get(url)

      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
     

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
      const response = await api.get(`https://api.themoviedb.org/3/find/${movieId}?api_key=191d216958140cd776e116dfbb3d3a15&language=en-US&external_source=imdb_id`)
      
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
      {/* <Header/> */}
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<HomeScreen movies={movies} />} ></Route>
            <Route path="/login" element={<Login/>}></Route>
          
           <Route path="/register" element={<Register />} />
            <Route path="/Reviews/:movieId" 
              element ={
              <Reviews getMovieData = {getMovieData} 
              movie={movie} 
              reviews ={reviews}
              setReviews = {setReviews} />}>
            </Route>
            {/* Need to add user id in the route below! :) */}
            <Route path="/allUserReviews" element={<UserReviews/>}/>
            <Route path="/exploreReviews" element={<ExploreReviews/>}/>
            <Route path='/results' element={<ResultsPage/>}/>
            <Route path="/logedIn" element={<UserPage movies={movies}/>}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  )
}


export default App
