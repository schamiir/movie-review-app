import React from 'react'
import UserHeader from '../userpage/UserHeader'
import "./UserReviews.scss"
import { faComment, faComments, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'

function UserReviews() {
//Need the api call to get all the reviews for the user and display their data

  return (
    <>
    <UserHeader/>
    <div className="projcard-container"  
    // key={movie.imdb_id}
    >
      <div className="projcard projcard-blue" 
    //   key=>{movie.imdb_id}
      >
        <div className="projcard-innerbox">  
            {/* <img className="projcard-img"src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} /> */}
          <div className="projcard-textbox">
            <div className="projcard-title"> Movie Title
                {/* {movie.title} */}
                </div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">
                {/* Username */} <span className='fw-bolder'>Hello User</span>
                <div>{/* Review */} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit hic. Consequatur necessitatibus ea perferendis voluptates. Accusantium, dolores ullam ducimus illo in natus? Ab doloremque pariatur obcaecati adipisci, repellendus asperiores.</div>
            </div>
            <div>
            <button
            // onClick={() => navigate(`/reviews/${movie.id}`)}
            className="btn btn-outline-danger bi-heart"
            >Delete  
             <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserReviews