import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.scss";

function Login() {
  return (
    <>
      <div className="login-container d-flex justify-content-center pt-3">
        <Card bg="dark" border="danger">
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
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Login;
