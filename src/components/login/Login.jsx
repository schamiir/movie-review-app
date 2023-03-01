import React, {useState} from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.scss";
import {useSelector, useDispatch} from "react-redux";
import { logedIn } from "../../store/loggedIn";
import { useNavigate } from "react-router-dom";

function Login() {
  useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch("http://localhost:8080/login/new-login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if(data[0] == 'OK'){
          sessionStorage.setItem("uid", data[1])
          navigate("/logedIn");
          dispatch(logedIn())
        }
        else{
          setError("Username or Password Incorrect")
        }
      })
  }

  
  return (
    <>
      <div className="login-container d-flex justify-content-center pt-3">
        <Card bg="dark" border="danger">
          <Form className="form-container">
            <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button
              variant="outline-danger"
              className="submit-button"
              type="button"
              onClick={(e) => {
                handleSubmit(e)
              }}>
              Submit
            </Button>
          </Form>
          {error.length > 0 && <p className='alert alert-danger text-center mt-2 justify-content-center' role="alert">{error}</p>}
        </Card>
      </div>
    </>
  );
}

export default Login;
