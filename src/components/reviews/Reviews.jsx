import { useEffect, useRef, React } from "react";
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from "../reviewForm/ReviewForm";


const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;
 

  useEffect(() => {
      getMovieData(movieId);
  }, [])

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try
    {
        const response = await api.post('/reviews/create',{reviewBody:rev.value,imdb_id:movieId});

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
   <Container>
     <Row>
       <Col><h3>Reviews</h3></Col>
     </Row>
     <Row className='mt-2'>
        <Col>
        <Row>
            {movie?.title && (
                <span>{movie?.original_title}</span>
             )}
             <span>Place holder Title</span>
        </Row>
        <Row>
        {movie?.poster_path && (
            <img src={movie?.poster_path} className="img-fluid" alt="movie backdrop" />
            )}
                  <span>Place holder Img</span>
        </Row>
        <Row>
            {movie?.overview && (
                <p>{movie?.overview}</p>
            )}
                  <span>Place holder Desc</span>
        </Row>
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
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews

