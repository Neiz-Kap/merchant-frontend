import React from 'react';
import logo from './img/logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col className="formBlock">
          <img className='logo' src={logo} alt="" />
          <div className="title">
            <h1>Create an account</h1>
            <h5 className="light">Please sign up to your personal account if you want to use all our premium products</h5>
          </div>
          <Form className="registerForm">
            <Form.Group className="nameInput" controlId="formFullName">
              <Form.Label className="lig">Full name</Form.Label>
              <Form.Control type="text" placeholder="Your full name" />
            </Form.Group>

            <Form.Group className="emailInput" controlId="formEmail">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group className="passwordInput" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="checkBoxInput" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree with terms & conditions" />
            </Form.Group>
            <Button className="signUpButton" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p className="center secondary">Already have an account? <a href="">Sign in here</a></p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
