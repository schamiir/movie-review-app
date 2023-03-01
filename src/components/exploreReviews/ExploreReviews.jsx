
import {React, useState, useEffect} from 'react'
import UserHeader from '../userpage/UserHeader'
import "./ExploreReviews.scss"
import { faComment, faComments, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
function ExploreReviews() {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reviews/all-users")
    .then(resp => resp.json())
    .then(data => setAllReviews(data))
  }, [])
  
  
  return (
    <>
      <UserHeader />
      {allReviews.map((movie) => (
        <div className="projcard-container mt-5"
          key={movie.id}
        >
          <div className="projcard projcard-blue"
          //   key=>{userReviews.id}
          >
            <div className="projcard-innerbox">
              <img className="projcard-img" src={`https://image.tmdb.org/t/p/original${movie.moviePoster}`} alt={movie.movieTitle} />
              <div className="projcard-textbox">
                <div className="projcard-title">{movie.movieTitle}</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">
                  <span className='fw-bolder'>{movie.username}</span>
                  <div>{movie.review}</div>
                </div>
                <div>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="btn btn-outline-danger bi-heart"
                    id={movie.id}
                  >Delete
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>))}
    </>
  )
}

export default ExploreReviews