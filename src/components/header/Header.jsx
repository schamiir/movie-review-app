import Button from 'react-bootstrap/Button'
import Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { logedOut } from "../../store/loggedIn";
import { Helmet } from "react-helmet"



const Header = () => {

  const logedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Helmet><script src="https://kit.fontawesome.com/89d95f45ee.js" crossorigin="anonymous"></script></Helmet>
      <Container>
        <Navbar.Brand href='/' style={{color: 'red'}}>
          <i className="fa-solid fa-clapperboard"></i> CineMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
                <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    {/* <NavLink className='nav-link' to='/allreviews'>My Profile</NavLink> */}
                </Nav>
                  <>
            <Button 
            // variant="outline-light" 
            className='me-2 btn btn-light'
            type="button"
            onClick={()=>{
              navigate("/login");
            }}>Login</Button>
            <Button 
            // variant='outline-light'
            className="btn btn-danger"
            type="button"
            onClick={()=>{
              navigate("/register");
            }}
            >Register</Button>
            </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

export default Header