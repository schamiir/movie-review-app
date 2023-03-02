import { useState, useEffect, useRef} from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from 'react'
import UserHeader from "../userpage/UserHeader";

const Reviews = ({getMovieData}) => {
    const navigate = useNavigate()
  const [movie, setMovie] = useState(null);
  const[review, setReview] = useState("")
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
  }, [movieId]);

const handleSubmit = async (e) => {
    e.preventDefault()
    fetch(`${SPRING_API}/reviews/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            movieTitle: movie.title,
            movieOverview: movie.overview,
            moviePoster: movie.backdrop_path,
            review: review,
            userId: sessionStorage.getItem("uid"),
            username: sessionStorage.getItem("user")
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data == "CREATED") {
                navigate(`/user/${sessionStorage.getItem("uid")}`)
            }
            else {
                setError("Unable to Register. Error: " + data)
            }
        })
}

  return (
    <>
    <UserHeader/>
    {movie ? (
              <Container style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize:"cover" }}>
     <Row>
       <Col><h3>Reviews</h3></Col>
     </Row>
     <Row className='mt-2'>
        <Col className="d-flex flex-column justify-content-center align-items-center mr-3 ml-3">
                <Row><h2>{movie.title}</h2></Row>
             <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="img-fluid w-50" alt="movie backdrop" />
                          <Row><h5>Release Date: {movie.release_date}</h5></Row>
                          {movie.homepage && <Row><h5>Where to Watch: <a href={movie.homepage}>{movie.homepage}</a></h5></Row>}
                          <Row>{movie.overview}</Row>
        </Col>
        <Col>
            <Row>
                <Col>
                                  <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className='mb-3'style={{height:"200px"}} controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Write your Review!</Form.Label>
                            <Form.Control type="text" as="textarea" value={review} onChange={e => setReview(e.target.value)} rows={5}/>
                        </Form.Group>
                        <Button role="button" type="submit" className="btn btn-light" variant='outline-primary'>Submit</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            </Col>
        </Row>
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

