import React from 'react'
import UserHeader from '../userpage/UserHeader'
import "./ResultsPage.scss"
import { Link, Route, useLocation, useNavigate } from "react-router-dom"



function ResultsPage() {
  const state = useLocation();
  const movies = state.state.movieData;
  const navigate = useNavigate();

  return (
    <>
    <UserHeader />
    {
    movies.results.map((movie) => {
    return (
    <div className="projcard-container"  key={movie.id}>
      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">
            <Link to={`/reviews/${movie.id}`}>
            <img className="projcard-img"src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            </Link>
          <div className="projcard-textbox">
            <div className="projcard-title">{movie.title}</div>
            <span>Date of Release: {movie.release_date}</span>
            <div className="projcard-bar"></div>
            <div className="projcard-description">{movie.overview}</div>
            <div>
            <button
            onClick={() => navigate(`/reviews/${movie.id}`)}
            className="btn btn-outline-danger bi-heart"
                >Review <i className="fa-solid fa-comment"></i></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    )})}
    </>
  )
}

export default ResultsPage