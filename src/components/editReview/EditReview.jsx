import { useState, useEffect, useRef } from "react";
import {  useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from 'react'
import UserHeader from "../userpage/UserHeader";

const Reviews = ({ getMovieData }) => {
    const navigate = useNavigate()
    const [review, setReview] = useState([])
    const { reviewId } = useParams();


    useEffect(() => {
        fetch(`http://cinemate-env.eba-xuvrv233.us-east-1.elasticbeanstalk.com/reviews/edit/reviewId?reviewId=${reviewId}`, {
            method: 'GET',
        })
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                setReview(...data)
            })
            .catch((error) => console.log(error));
    }, [reviewId]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        fetch(`http://cinemate-env.eba-xuvrv233.us-east-1.elasticbeanstalk.com/reviews/edit/reviewId?reviewId=${e.target.id}`, {
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
            <UserHeader />
            {review ? (
                <Container style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${review.backdrop_path})`, backgroundSize: "cover" }}>
                    <Row>
                        <Col><h3>Edit Your Review</h3></Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col className="d-flex flex-column justify-content-center align-items-center mr-3 ml-3">
                            <Row><h2>{review.title}</h2></Row>
                            <img src={`https://image.tmdb.org/t/p/original${review.poster_path}`} className="img-fluid w-50" alt="movie backdrop" />
                            <Row>{review.overview}</Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Form onSubmit={(e) => handleSubmit(e)}>
                                        <Form.Group className='mb-3' style={{ height: "200px" }} controlId='exampleForm.ControlTextarea1'>
                                            <Form.Label>Write your Review!</Form.Label>
                                            <Form.Control type="text" as="textarea" value={review.review} onChange={e => setReview({...review, review[0]["review"]: e.target.value})} rows={5} />
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
                </Container>) : (<p>Sorry I dont have data</p>)}
        </>
    )
}

export default Reviews

