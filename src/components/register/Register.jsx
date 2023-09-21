import './Register.css'
import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import { Card } from 'react-bootstrap';


export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch("http://localhost:8080/login/new-user", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data == "CREATED"){
        navigate("/login")
      }
      else{
        setError("Unable to Register. Error: " + data)
      }
    })
  }


  return (
    <>
    <Header />
    <>
      <div className="register-container d-flex justify-content-center pt-3">
        <Card bg="dark" border="danger" className='register-card'>
          <Form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button
              variant="outline-light"
              className="btn btn-danger submit-button"
              role="button"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Card>
        {error.length > 0 && <p className='alert alert-danger text-center mt-2 justify-content-center' role="alert">{error}</p>}
      </div>
    </>
    </>
  )
}


