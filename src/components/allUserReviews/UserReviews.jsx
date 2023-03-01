import {React, useState, useEffect} from 'react'
import UserHeader from '../userpage/UserHeader'
import "./UserReviews.scss"
import { faComment, faComments, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'

function UserReviews() {
const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem("uid")
    fetch(`http://localhost:8080/reviews/userId?userId=${user}`)
      .then(res => res.json())
      .then(data => setUserReviews(data)),
  []})

  const handleSubmit = async (e) =>{
    e.preventDefault()
    fetch(`http://localhost:8080/reviews/delete/reviewId?reviewId=${e.target.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }



  return (
    <>
    <UserHeader/>
    {userReviews.map((movie) =>(
    <div className="projcard-container mt-5" key={movie.id}>
      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">  
            <img className="projcard-img"src={`https://image.tmdb.org/t/p/original${movie.moviePoster}`} alt={movie.movieTitle} />
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
            >Delete <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>))}
    </>
  )
}

export default UserReviews