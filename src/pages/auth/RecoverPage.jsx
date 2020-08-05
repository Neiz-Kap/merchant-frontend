import React from "react";
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AuthForm.css';

export default function RecoverPage() {
    return (
      <div className="auth-form-container">
        <Row>
          <Col className="white-bg">
          <div className="formBlock">
            <img className='logo' src={logo} alt="" />
            <div className="title">
              <h1>Восстановление пароля</h1>
              <h5 className="secondary light pseudo-black-text">Пожалуйста, введите вашу адрес электронной почты, чтобы восстановить доступ к&nbsp;аккаунту.</h5>
            </div>
            <Form className="auth-form">
              <Form.Group className="emailInput padding-vert-18" controlId="formEmail">
                <Form.Label>Ваша почта</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
              </Form.Group>
              <Button className="auth-form-button" variant="primary" type="submit">
                Восстановить пароль
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