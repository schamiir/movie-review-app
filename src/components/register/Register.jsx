import './Register.css'
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import { Card } from 'react-bootstrap';


export default function Register() {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <>
      <div className="register-container d-flex justify-content-center pt-3">
        <Card bg="dark" border="danger" className='register-card'>
          <Form className="form-container">
          <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll never share username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
              <Form.Text className="text-muted">
                We'll never share username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="outline-danger"
              className="submit-button"
              type="submit"
              onClick={() => {
                navigate("/logedIn");
                dispatch(logedIn())}}
              
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
    </>
  )
}


