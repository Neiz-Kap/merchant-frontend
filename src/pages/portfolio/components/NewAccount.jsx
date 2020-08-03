import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './NewAccount.css';

export default class NewAccount extends React.Component {
    render() {
        return (
            <div className="account-background">
                <div className="account-block">
                    <h5>Добавить новый платёж</h5>
                    <Form>
                        <Form.Group>
                            <Form.Label>Наименование карты</Form.Label>
                            <Form.Control type="text" placeholder="Мастер кард" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Тип карты</Form.Label>
                            <Form.Control as="select">
                                <option>Выбрать тип</option>
                                <option>Дебетовая</option>
                                <option>Кредитная</option>
                                <option>Стипендиальная</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Ваш банк</Form.Label>
                            <Form.Control as="select" placeholder="Мастер кард">
                                <option>Выбрать ваш банк</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Номер карты</Form.Label>
                            <Form.Control type="number" placeholder="100000000023400128" />
                        </Form.Group>
                        
                        <Row>
                            <Col>
                                <Form.Label>Сумма</Form.Label>
                                <Form.Control type="number" placeholder="Начальная сумма"/>
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

                        <Button variant="primary" type="submit" className="account-btn">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}