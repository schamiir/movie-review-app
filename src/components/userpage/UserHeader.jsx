import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Helmet } from "react-helmet"

const UserHeader = ( { navigation }) => {
  let navigate = useNavigate();

  const [movie, setMovie] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=a9bd84c15f8fa17808fb7e767b72bc08&query=${movie}`;
    fetch(searchUrl)
      .then(res => res.json())
      .then(data =>{
          if(data.results.length == 0){
                  setError("No movies found")
          }
          else {
            navigate("/results", {state:{movieData: data}})            
          }})

  }

  const handleLogout = () =>{
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Helmet><script src="https://kit.fontawesome.com/89d95f45ee.js" crossorigin="anonymous"></script></Helmet>
      <Container>
        <Navbar.Brand href={sessionStorage.getItem("uid") ? "/loggedIn" : "/"} style={{ color: "red" }}>
          <i className="fa-solid fa-clapperboard"></i> CineMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav
            className="me-5 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to={`/user/${sessionStorage.getItem("uid")}`}>
              My Reviews
            </NavLink>
            <NavLink className="nav-link" to="/exploreReviews">
              Explore
            </NavLink>
          </Nav>
          <>
            <Form className="d-flex w-50" onSubmit={e => handleSubmit(e)}>
              <Form.Control
                type="search"
                placeholder={error ? "Invalid Response" : "Search here for movies!"}
                className={error ? 'me-2 outline-red form-control' : 'me-2 form-control'}
                aria-label="Search"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
              />
              <Button type="submit" className="mr-2" variant="outline-success" >
                Search
              </Button>
            </Form>
          </>
          <Button
            className="ms-auto"
            variant="outline-danger"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserHeader;
