import {React, useState, useEffect} from 'react'
import UserHeader from '../userpage/UserHeader'
import "./ExploreReviews.scss"


function ExploreReviews() {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reviews/all-users")
    .then(resp => resp.json())
    .then(data => setAllReviews(data.reverse()))
  }, [])

  function capitalize (str) {
    return str[0].toUpperCase + str.slice(1)
  }
  
  
  return (
    <>
      <UserHeader />
      {allReviews.map((movie) => (
        <div className="projcard-container mt-5" key={movie.id}>
          <div className="projcard projcard-blue">
            <div className="projcard-innerbox">
              <img className="projcard-img" src={`https://image.tmdb.org/t/p/original${movie.moviePoster}`} alt={movie.movieTitle} />
              <div className="projcard-textbox">
                <div className="projcard-title display-6">{movie.movieTitle}</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">
                  <span className='fw-bolder' style={{fontSize:"1.25rem"}}>Reviewed by: <a href={`/user/${movie.userId}`} id="username-text" className="text-dark">{movie.username}</a></span>
                  <p style={{fontSize:"1rem", color:"black"}}>{movie.review.charAt(0).toUpperCase() + movie.review.slice(1)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>))}
    </>
  )
}

export default ExploreReviews