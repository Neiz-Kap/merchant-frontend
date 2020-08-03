import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import avatar2 from "./../../../img/avatar2.png";
import "./Profile.css";

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-block">
          <div className="profile-wrapper">
            <h5>Главная информация</h5>
            <div className="profile-avatar-block">
              <div className="profile-avatar-box">
                <img className="profile-avatar" src={avatar2} alt="avatar" />
                <h4>Barry Armstrong</h4>
              </div>
            </div>
            <div className="profile-settings">
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Имя</Form.Label>
                      <Form.Control placeholder="Ваше имя" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Фамилия</Form.Label>
                      <Form.Control placeholder="Ваша фамилия" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control placeholder="Ваш Email" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Телефон</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ваш номер телефона"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Язык</Form.Label>
                    <Form.Control as="select">
                      <option>Русский</option>
                      <option>English</option>
                      <option>Українська</option>
                      <option>Deutschland</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Label>Валюта</Form.Label>
                    <Form.Control as="select">
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
