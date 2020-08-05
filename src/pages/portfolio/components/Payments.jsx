import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import './Payments.css';

export default class Payments extends React.Component {
    render() {
        return (
            <div className="payments">
                <div className="payments-providers">
                    <div className="list-header">
                        <h5 className="list-header-text">Платежные системы</h5>
                        <div className="list-header-icons">
                            <i class="las la-search"></i>
                            <input type="text" placeholder="Найти поставщика"></input>
                        </div>
                    </div>
                    <div className="providers-item">
                        <div className="providers-category">
                            <div className="icon-circle-orange"><i class="las la-train"></i></div>
                            <div className="providers-category-text">
                                <h5>Транспорт</h5>
                                <span>Uber</span>
                            </div>
                        </div>
                        <div className="more">
                            <p>1-2%</p>
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="providers-item">
                        <div className="providers-category">
                            <div className="icon-circle-orange"><i class="las la-mobile"></i></div>
                            <div className="providers-category-text">
                                <h5>Мобильные сервисы</h5>
                                <span>Vodafone</span>
                            </div>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>

                {/* PAYMENT */}
                <div className="transfer-block">
                    <div className="list-header">
                        <h5 className="list-header-text">Добавить новый платёж</h5>
                        <i className="las la-ellipsis-h list-header-icons"></i>
                    </div>

                    <Form>
                        <Form.Group>
                            <Form.Label>Выберите карту</Form.Label>
                            <Form.Control as="select">
                                <option value="" className="input-card">
                                    <div className="input-account-info">
                                        <i className="lab la-cc-visa"></i>
                                        <p className="input-account">3333 **** **** 4444</p>
                                    </div>
                                    <p className="input-account-balance">$142.800.00</p>
                                </option>
                                <option value="" className="input-card">
                                    <div className="input-account-info">
                                        <i className="lab la-cc-visa"></i>
                                        <p className="input-account">3210 **** **** 4008</p>
                                    </div>
                                    <p className="input-account-balance">$142.800.00</p>
                                </option>
                                <option value="" className="input-card">
                                    <div className="input-account-info">
                                        <i className="lab la-cc-visa"></i>
                                        <p className="input-account">3210 **** **** 4008</p>
                                    </div>
                                    <p className="input-account-balance">$142.800.00</p>
                                </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Наименование карты</Form.Label>
                            <Form.Control type="text" placeholder="Введите номер счёта" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Label>Сумма</Form.Label>
                                <Form.Control type="number" min="10" placeholder="Введите сумму"/>
                            </Col>
                            <Col>
                                <Form.Label>Способ передачи</Form.Label>
                                <Form.Control as="select">
                                    <option>Личный перевод</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                    <option>UAH</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="vertical-center">
                                <Button variant="primary" type="submit" className="">
                                    Оплатить
                                </Button>
                            </Col>
                            <Col className="vertical-center horiz-center">
                                <p className="secondary center">Банковская комиссия 2%</p> 
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}
