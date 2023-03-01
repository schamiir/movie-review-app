import React from 'react'
import UserHeader from '../userpage/UserHeader'
import "./ResultsPage.scss"
import { useEffect, useState } from "react"
import { Link, Route, useLocation, useNavigate } from "react-router-dom"
import { faComment, faComments, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'


function ResultsPage() {
  const state = useLocation();
  const movies = state.state.movieData;
  const navigate = useNavigate();

  useEffect (() => {
    console.log(movies)
  }, []) 

  return (
    <>
    <UserHeader />
    {
    movies.results.map((movie) => {
    return (
    <div className="projcard-container"  key={movie.imdb_id}>
      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">
            <Link to={`/reviews/${movie.id}`}>
            <img className="projcard-img"src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            </Link>
          <div className="projcard-textbox">
            <div className="projcard-title">{movie.title}</div>
            <div className="projcard-bar"></div>
            <div className="projcard-description">{movie.overview}</div>
            <div>
            <button
            onClick={() => navigate(`/reviews/${movie.id}`)}
            className="btn btn-outline-danger bi-heart"
            >Review <FontAwesomeIcon icon={faComment} /></button>
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