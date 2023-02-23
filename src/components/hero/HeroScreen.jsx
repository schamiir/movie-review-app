import './HeroScreen.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const HeroScreen = ({movies}) => {

  const navigate = useNavigate();

  function reviews(movieId)
  {
    navigate('/Reviews/${movie.id}');
  }

  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {
            movies.map(movie => {
              return (
                <Paper key={movie.imdbId}>
                    <div className='movie-card-container'>
                        <div className='movie-card' style={{"--img": `url(${movies.backdrops[0]})` }}>
                            <div className='movie-detail'>
                                <div className='movie-poster'>
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                                <div className='movie-title'>
                                    <h4>{movie.title}</h4>
                                </div>
                  
                                <div className='movie-button-container'>
                                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                        <div className='play-button-icon-container'>
                                          <FontAwesomeIcon className='play-button-icon' 
                                            icon={faCirclePlay}
                                          />
                                        </div>
                                    </Link>
                                    <div className='movie-review-button-container'>
                                      <Button variant='info' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                    </div>
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
  )
}

export default HeroScreen
