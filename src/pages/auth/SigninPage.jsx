import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AuthForm.css';

export default function SigninPage() {
  return (
    <div className="auth-form-container">
      <Row>
        <Col className="white-bg">
        <div className="formBlock">
          <img className='logo' src={logo} alt="" />
          <div className="title">
            <h1>Войти в аккаунт</h1>
          </div>
          <Form className="auth-form">
            <Form.Group className="emailInput padding-vert-18" controlId="formEmail">
              <Form.Label>Ваша почта</Form.Label>
              <Form.Control type="email" placeholder="Ваша почта" />
            </Form.Group>

            <Form.Group className="passwordInput" controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Пароль" />
            </Form.Group>
            <Form.Group className="checkBoxInput flex-space-btw padding-vert-30" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Сохранить пароль" />
              <p className="center secondary"><a href="">Возобновить пароль</a></p>
            </Form.Group>
            <Button className="auth-form-button" variant="primary" type="submit">
              Войти
            </Button>
          </Form>
          <p className="center secondary">Нет аккаунта? <a href="">Создать</a></p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}