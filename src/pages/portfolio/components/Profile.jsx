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

    global = (user) => (
        <>
            <div>
                <h5>Главная информация</h5>
                <div className="profile-avatar-block">
                    <div className="profile-avatar-box">
                        <img className="profile-avatar" src={avatar2} alt="avatar" />
                        <h4>{user.firstName} {user.lastName}</h4>
                    </div>
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
            </div>
        </>
    );

    security = (user) => (
        <>
            <h5>Безопасность</h5>
            <div className="profile-settings">
                <Form>
                    <p className="secondary">Поменять пароль</p>
                    <hr className="profile-setting-hr"/>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Текущий пароль</Form.Label>
                                <Form.Control type="password" onChange={this.onInputChange} placeholder="Введите ваш пароль" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Новый пароль</Form.Label>
                                <Form.Control type="password" onChange={this.onInputChange} placeholder="Введите новый пароль" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <p className="padding-top-30 secondary">Секретный вопрос</p>
                    <hr className="profile-setting-hr"/>
                    <Row className="padding-vert-30">
                        <Col>
                            <Form.Group>
                                <Form.Label>Вопрос №1</Form.Label>
                                <Form.Control as="select">
                                    <option>Имя вашего друга</option>
                                    <option>Любимый фильм</option>
                                    <option>Вопрос</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Ответ</Form.Label>
                                <Form.Control placeholder="Джон" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Вопрос №2</Form.Label>
                                <Form.Control as="select">
                                    <option>Выберите вопрос</option>
                                    <option>Имя вашего друга</option>
                                    <option>Любимый фильм</option>
                                    <option>Вопрос</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Ответ</Form.Label>
                                <Form.Control placeholder="Введите ответ" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );

    notify = (user) => (
        <>
            <h5>Уведомления</h5>
            <div className="profile-settings">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <p>Product updates</p>
                                <p className="secondary">Stair Lifts Feel The Freedom Of Your Home</p>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Form.Group>
                                <p>Offer updates</p>
                                <p className="secondary">A Right Media Mix Can Make The Difference</p>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Form.Group>
                                <p>Comments</p>
                                <p className="secondary">Advertising Relationships Vs Business Decisions</p>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Form.Group>
                                <p>Notifications</p>
                                <p className="secondary">Creating Remarkable Poster Prints Through 4 Color Poster Printing</p>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );

    render() {
        const user = this.props.data;
        const loading = this.props.loading;

        return (
        <div className="profile-wrapper">
            <div className="profile">
                    {!loading && user &&
                        <div className="profile-block profile-loading">
                            {this.notify(user)}
                            <Form>
                                <Button variant="primary" type="submit" className="orange-btn">
                                    ОБНОВИТЬ НАСТРОЙКИ
                                </Button>
                                <Button variant="primary" type="submit" className="back">
                                    НАЗАД
                                </Button>
                            </Form>
                        </div>
                    }
                    <div className="profile-sidebar">
                        <div className="profile-sidebar-item">
                            <a href="#">Главная информация</a>
                            <a href="#">Безопасность</a>    
                            <a href="#">Уведомления</a>
                        </div>                    
                        <div className="profile-sidebar-help">
                            <a href="#">Центр помощи</a>
                            <a href="#">Связаться с нами</a>
                            <a href="#">Закрыть аккаунт</a>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { data, loading} = state.profile;

    return {
          data,
          loading
        };
}

const connectedProfile = connect(mapStateToProps)(Profile);
export default connectedProfile;