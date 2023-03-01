import React, {useState} from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.scss";
import {useSelector, useDispatch} from "react-redux";
import { logedIn } from "../../store/loggedIn";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

function Login() {
  useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
    <Header />
    <>
      <div className="login-container d-flex justify-content-center pt-3">
        <Card bg="dark" border="danger" className="login-card">
          <Form className="form-container">
            <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
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
  );
}

export default Login;
