import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import avatar2 from "./../../../img/avatar2.png";
import "./Profile.css";
import { connect } from "react-redux";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && nextProps.data) {
            this.setState({ firstName: nextProps.data.firstName, lastName: nextProps.data.lastName, email: nextProps.data.email });
        }
    }

    render() {
        const user = this.props.data;
        const loading = this.props.loading;

        return (
            <div className="profile">
                {!loading && user &&
                    <div className="profile-block profile-loading">
                        <div className="profile-wrapper">
                            <h5>Главная информация</h5>
                            <div className="profile-avatar-block">
                                <div className="profile-avatar-box">
                                    <img className="profile-avatar" src={avatar2} alt="avatar" />
                                    <h4>{user.firstName} {user.lastName}</h4>
                                </div>
                            </div>
                            <div className="profile-settings">
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Имя</Form.Label>
                                                <Form.Control value={this.state.firstName} onChange={this.onInputChange} placeholder="Ваше имя" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Фамилия</Form.Label>
                                                <Form.Control value={this.state.lastName} onChange={this.onInputChange} placeholder="Ваша фамилия" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control value={this.state.email} onChange={this.onInputChange} placeholder="Ваш Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Телефон</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Ваш номер телефона"
                                                    disabled
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>Язык</Form.Label>
                                            <Form.Control disabled as="select">
                                                <option>Русский</option>
                                                <option>English</option>
                                                <option>Українська</option>
                                                <option>Deutschland</option>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>Валюта</Form.Label>
                                            <Form.Control disabled as="select">
                                                <option>RUS</option>
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>UAH</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form>
                                <Form>
                                    <Button variant="primary" type="submit" className="orange-btn">
                                        ОБНОВИТЬ НАСТРОЙКИ
                                                </Button>
                                    <Button variant="primary" type="submit" className="back">
                                        НАЗАД
                                                </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                }
                <div className="profile-sidebar">
                    <div className="profile-sidebar-item">
                        <p><a href="#">Главная информация</a></p>
                        <p><a href="#">Безопасность</a></p>
                        <p><a href="#">Уведомления</a></p>
                    </div>
                    <div className="profile-sidebar-help">
                        <p><a href="#">Центр помощи</a></p>
                        <p><a href="#">Связаться с нами</a></p>
                        <p><a href="#">Закрыть аккаунт</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { data, loading } = state.profile;

    return {
        data,
        loading
    };
}

const connectedProfile = connect(mapStateToProps)(Profile);
export default connectedProfile;