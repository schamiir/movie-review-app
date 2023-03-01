import { useState, useEffect, useRef} from "react";
import api from '../../api/axiosConfig';
import {useLocation, useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from "../reviewForm/ReviewForm";
import React from 'react'
import axios from "axios";
import UserHeader from "../userpage/UserHeader";

const Reviews = ({getMovieData}) => {

  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState(null);
  const [movieImg, setMovieImg] = useState(null);
//   const state = useLocation();
// const movies = state.state.allMovies;

  const revText = useRef();
//   let params = useParams();
  const {movieId} = useParams();    
 

  useEffect(() => {
    let searchUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a9bd84c15f8fa17808fb7e767b72bc08&&language=en-US`;

    fetch(searchUrl, {
        method: 'GET',
    })
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        setMovie(data)})
        .catch((error) => console.log(error));
        





    // const getMovies = async () => {

    //     try
    //     {
    
    //       const response = await axios.get(searchUrl)
    
    //       .then((response) => {
    //         setMovie(response.data);
    //         console.log(response.data);
    //       })
         
    
    //       // promise made from axiosConfig
    //     }
    //     catch(err)
    //     {
    //       console.log(err)
    //     }
       
    //   }
      
    //   getMovies();
      
  }, [movieId]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try
    {
        const response = await api.post('/',{reviewBody:rev.value,imdb_id:movieId});

        const updatedReviews = [...reviews,{body:rev.value}];

        rev.value = '';

        setReviews(updatedReviews);
    }
    catch(err)
    {
        console.log(err);
    }


  }

  return (
    <>
    <UserHeader/>
    {movie ? (
   <Container>
     <Row>
       <Col><h3>Reviews</h3></Col>
     </Row>
     <Row>{movie.title}</Row>
     <Row className='mt-2'>
        <Col>
             <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="img-fluid" alt="movie backdrop" />
        </Col>
        <Col>
        {
            <>
            <Row>
                <Col>
                    <ReviewForm handleSubmit={addReview} revText={revText} labelText='Write a Review?' />
                </Col>
            </Row>

            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            </>
        }

        {
            reviews?.map((r) => {
                return (
                    <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row><h5>Release Date: {movie.release_date}</h5></Row>
        <Row><h5><a href={movie.homepage}>Watch Here: {movie.homepage}</a></h5></Row>
        <Row>{movie.overview}</Row>

        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>): (<p>Sorry I dont have data</p>)}
    </>
  )
}

export default Reviews

