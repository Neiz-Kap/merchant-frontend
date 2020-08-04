import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import graph_1 from "../../../img/graph-1.svg";
import graph_2 from "../../../img/graph-2.svg";
import graph_3 from "../../../img/graph-3.svg";
import "./Accounts.css";

export default class Accounts extends React.Component {
    render() {
        return (
            <div className="accounts">
                <div className="accounts-change">
                    <Row>
                        <Col>
                            <div className="change-text">
                                <p>$124.800 <i class="las la-long-arrow-alt-up"></i></p>
                                <span>Cards balance</span>
                            </div>
                            <div className="change-graph">
                                <img src={graph_1} alt="graph-1" />
                            </div>
                        </Col>
                        <Col>
                            <div className="change-text">
                                <p>$56.400 <i class="las la-long-arrow-alt-up"></i><i class="las la-long-arrow-alt-down"></i></p>
                                <span>Deposit (3% Rate)</span>
                            </div>
                            <div className="change-graph">
                                <img src={graph_2} alt="graph-2" />
                            </div>
                        </Col>
                        <Col>
                            <div className="change-text">
                                <p>$24.800 <i class="las la-long-arrow-alt-down"></i></p>
                                <span>Pending credit</span>
                            </div>
                            <div className="change-graph">
                                <img src={graph_3} alt="graph-3" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="accounts-cards">
                    <div className="account-title">
                        <h5>Ваши карты</h5>
                        <p className="account-new"><i class="las la-plus-circle"></i>Добавить</p>
                    </div>
                    <Row className="accounts-card">
                        <Col sm="3">
                            <div class="card-category">
                                <div class="card-icon banks"><i class="lab la-cc-visa"></i></div>
                                <div class="card-number">
                                    <p>3210 **** **** 4008</p>
                                    <span>Номер карты</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <p>$88.200</p>
                            <span>Баланс</span>
                        </Col>
                        <Col>
                            <p>$1.840</p>
                            <span>Заблокированно</span>
                        </Col>
                        <Col>
                            <p>06/22</p>
                            <span>Действительный</span>
                        </Col>
                        <Col>
                            <p></p>
                            <span>Статус</span>
                        </Col>
                        <div class="more"><i class="las la-ellipsis-h"></i></div>
                    </Row>
                    <Row className="accounts-card">
                        <Col sm="3">
                            <div class="card-category">
                                <div class="card-icon banks"><i class="lab la-cc-mastercard"></i></div>
                                <div class="card-number">
                                    <p>3210 **** **** 4008</p>
                                    <span>Номер карты</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <p>$88.200</p>
                            <span>Баланс</span>
                        </Col>
                        <Col>
                            <p>$1.840</p>
                            <span>Заблокированно</span>
                        </Col>
                        <Col>
                            <p>06/22</p>
                            <span>Действительный</span>
                        </Col>
                        <Col>
                            <p></p>
                            <span>Статус</span>
                        </Col>
                        <div class="more"><i class="las la-ellipsis-h"></i></div>
                    </Row>

                </div>
                {/* DEPOSIT */}
                <div className="accounts-cards">
                    <div className="account-title">
                        <h5>Открытый депозит</h5>
                    </div>
                    <Row className="accounts-card">
                        <Col sm="3">
                            <div class="card-category">
                                <div class="card-icon lock"><i class="las la-lock"></i></div>
                                <div class="card-number">
                                    <p>Накопительный депозит</p>
                                    <span>Название</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <p>$56.400</p>
                            <span>Баланс</span>
                        </Col>
                        <Col>
                            <p>$640</p>
                            <span>Начислений</span>
                        </Col>
                        <Col>
                            <p>3%</p>
                            <span>Ставка</span>
                        </Col>
                        <Col>
                            <p>Сентябрь 2020</p>
                            <span>Дата окончания</span>
                        </Col>
                        <div class="more"><i class="las la-ellipsis-h"></i></div>
                    </Row>
                </div>
                {/* CREDIT */}
                <div className="accounts-cards">
                    <div className="account-title">
                        <h5>Ваши кредиты</h5>
                    </div>
                    <Row className="accounts-card">
                        <Col sm="3">
                            <div class="card-category">
                                <div class="card-icon building"><i class="las la-building"></i></div>
                                <div class="card-number">
                                    <p>Ипотечный заем</p>
                                    <span>Название</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <p>$88.200</p>
                            <span>Сумма</span>
                        </Col>
                        <Col>
                            <p>$24.800</p>
                            <span>Оплаченная сумма</span>
                        </Col>
                        <Col>
                            <p>14%</p>
                            <span>Ставка</span>
                        </Col>
                        <Col>
                            <p>Активный</p>
                            <span>Статус</span>
                        </Col>
                        <div class="more"><i class="las la-ellipsis-h"></i></div>
                    </Row>
                    <Row className="accounts-card">
                        <Col sm="3">
                            <div class="card-category">
                                <div class="card-icon laptop"><i class="las la-laptop"></i></div>
                                <div class="card-number">
                                    <p>Потребительский кредит</p>
                                    <span>Название</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <p>$66.400</p>
                            <span>Сумма</span>
                        </Col>
                        <Col>
                            <p>$650</p>
                            <span>Оплаченная сумма</span>
                        </Col>
                        <Col>
                            <p>18%</p>
                            <span>Ставка</span>
                        </Col>
                        <Col>
                            <p>Активный</p>
                            <span>Статус</span>
                        </Col>
                        <div class="more"><i class="las la-ellipsis-h"></i></div>
                    </Row>
                </div>
            </div>
        );
    }
}
