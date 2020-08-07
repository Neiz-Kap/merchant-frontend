import React from "react";
import logo from './../../img/logo.png';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './AuthForm.css';
import { navigate } from "@reach/router";

export default class RecoverConfirm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            password2: '',
        }
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { token } = this.props;
        if (!token) {
            console.log('no token');
            return;
        }

        fetch(`http://13.74.170.114:3001/api/v1/auth/password-reset/${token}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: this.state.password, password2: this.state.password2 })})
            .then((data) => {
                console.log(data);
                navigate('/portfolio');
            });
    }

    render() {
        return (
            <div className="auth-form-container">
                <Row>
                    <Col className="white-bg">
                        <div className="formBlock">
                            <img className='logo' src={logo} alt="" />
                            <div className="title">
                                <h1>Смена пароля</h1>
                                <h5 className="secondary light pseudo-black-text">Пожалуйста, введите вашу адрес электронной почты, чтобы восстановить доступ к&nbsp;аккаунту.</h5>
                            </div>
                            <Form onSubmit={this.onSubmit} className="auth-form">
                                <Form.Group className="passwordInput" controlId="formPassword">
                                    <Form.Label>Новый пароль</Form.Label>
                                    <Form.Control name="password" onChange={this.onInputChange} type="password" placeholder="Новый пароль" />
                                </Form.Group>
                                <Form.Group className="padding-vert-30 passwordInput" controlId="formPassword">
                                    <Form.Label>Подтверждение пароля</Form.Label>
                                    <Form.Control name="password2" onChange={this.onInputChange} type="password" placeholder="Подтвердите пароль" />
                                </Form.Group>
                                <Button className="auth-form-button" variant="primary" type="submit">
                                    Сменить пароль
                                </Button>
                            </Form>
                            <p className="center secondary">Есть аккаунт? <a href="">Авторизоваться</a></p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}