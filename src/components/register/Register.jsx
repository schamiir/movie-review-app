import './Register.css'
import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


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
    <div>
      <div className='box1'>
        <div className='row'>   
            <div className='col-3'></div>
            <div className='col-6'>    
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group> */}
      {/* <Button variant='outline-info' className='me-2' type="submit">
        Submit
      </Button> */}
        <Button variant="outline-danger" className='me-2' type="button" onClick={(e) => handleSubmit(e)} >Submit</Button>
      </Form>
    <div className='col-3'></div>
    </div>
    </div>
    {error.length > 0 && <p className='alert alert-danger text-center mt-2 justify-content-center' role="alert">{error}</p>}
    </div>
    </div>
  )
}


