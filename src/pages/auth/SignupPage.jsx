import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AuthForm.css';

function SignupPage() {
  return (
    <div className="auth-form-container">
      <Row>
        <Col className="white-bg">
          <div className="formBlock">
            <img className='logo' src={logo} alt="" />
            <div className="title">
              <h1>Создать аккаунт</h1>
              <h5 className="secondary light pseudo-black-text">Пожалуйста, войдите в свой личный кабинет, если желаете использовать все наши премиальные продукты</h5>
            </div>
            <Form className="auth-form">
              <Form.Group className="textInput padding-vert-18" controlId="formLastName">
                <Form.Label className="lig">Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Александров" />
              </Form.Group>
              <Form.Group className="textInput" controlId="formFirstName">
                <Form.Label className="lig">Имя</Form.Label>
                <Form.Control type="text" placeholder="Александр" />
              </Form.Group>
              <Form.Group className="emailInput padding-vert-18" controlId="formEmail">
                <Form.Label>Ваша почта</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
              </Form.Group>

              <Form.Group className="passwordInput" controlId="formPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="checkBoxInput padding-vert-30" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Я согласен с правилами и условиями" />
              </Form.Group>
              <Button className="auth-form-button" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="center secondary">Уже есть аккаунт? <a href="">Авторизоваться</a></p>
          </div>
        </Col>
        <Col className="transparent"></Col>
      </Row>
    </div>
  );
}

export default SignupPage;
