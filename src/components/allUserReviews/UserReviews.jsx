import {React, useState, useEffect} from 'react'
import UserHeader from '../userpage/UserHeader'
import "./UserReviews.scss"
import { useParams, useNavigate } from 'react-router-dom'

function UserReviews() {
  const navigate = useNavigate();
  const [userReviews, setUserReviews] = useState([]);
  const {userId} = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/reviews/userId?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserReviews(data.reverse())})}, [userId])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    fetch(`http://localhost:8080/reviews/delete/reviewId?reviewId=${e.target.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  const handleEdit =  (e) => {
    const reviewId = e.target.id.split("-")[1]
    navigate(`/review/edit/${reviewId}`)
  }



  return (
    <>
    <UserHeader/>
    {userReviews.length == 0 && (<h3 style={{textAlign:"center", marginTop:"2rem"}}>No reviews found! Search above to add a review.</h3>)}
    {userReviews.length > 0 && <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Welcome, {sessionStorage.getItem("user")}!</h2>}
    {userReviews.map((movie) =>(
    <div className="projcard-container mt-5" key={movie.id}>
      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">  
            <img className="projcard-img"src={`https://image.tmdb.org/t/p/original${movie.moviePoster}`} alt={movie.movieTitle} />
          <div className="projcard-textbox">
            <div className="projcard-title display-6">{movie.movieTitle}</div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">
                <span className='fw-bolder' style={{ fontSize: "1.25rem" }}>{movie.username}</span>
                <p style={{ fontSize: "1rem", color: "black" }}>{movie.review.charAt(0).toUpperCase() + movie.review.slice(1)}</p>
            </div>
            <div>
            {userId === sessionStorage.getItem("uid") && (<button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-outline-danger bi-heart me-2"
            id={movie.id}
                >Delete <i className="fa-solid fa-trash"></i>
            </button>)}
                {/* {userId === sessionStorage.getItem("uid") && (<button
                  onClick={(e) => handleEdit(e)}
                  className="btn btn-outline-danger bi-heart"
                  id={"edit-"+ movie.id}
                >Edit <FontAwesomeIcon icon={faEdit} />
                </button>)} */}
          </div>
          </div>
        </div>
      </div>
    </div>))}
    </>
  )
}

export default UserReviews