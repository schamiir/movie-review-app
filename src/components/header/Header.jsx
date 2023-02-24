import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClapperboard } from "@fortawesome/free-solid-svg-icons"
import Button from 'react-bootstrap/Button'
import Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href='/' style={{color: 'red'}}>
            <FontAwesomeIcon icon={faClapperboard}/> CineMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
                <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                   
                </Nav>
            <Button variant='outline-light' className='me-2'>Login</Button>
            <Button variant='outline-danger'>Register</Button>
        </Navbar.Collapse>
      </Container>
       
    </Navbar>
   
  )
}

export default Header