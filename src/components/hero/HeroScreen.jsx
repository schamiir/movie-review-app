import './HeroScreen.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Header from '../header/Header'



const HeroScreen = ({movies}) => {

const navigate = useNavigate();

  function reviews(movieId)
  {
    navigate(`/Reviews/${movieId}`);
  }
    if(!movies){
      return null
    }
  return (
    <>
    
    <div className='movie-carousel-container'>
      <Carousel>
        {
            movies.results.map((movie) => {
              return (
                <Paper key={movie.id}>
                  <div className='movie-card-container' >
                    <div className='movie-card' style={{"--img": `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
                            <div className='movie-detail'>
                                <div className='movie-poster'>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                                </div>
                                <div className='movie-title'>
                                    <h4>{movie.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
                
            )
         
        })

        }
      </Carousel>
    </div>
    </>
  )
}

export default HeroScreen
