import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./PaymentsCard.css";
import { Router, Link } from "@reach/router";

export default class PaymentsCard extends React.Component {
    Banks = () => (
        <div className="bankcards-box">
            <div className="fisrt-bankcard">
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="Имя карты" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>VALID THRU</Form.Label>
                        <Row>
                            <Col><Form.Control placeholder="ММ" /></Col>
                            <Col>/</Col>
                            <Col><Form.Control placeholder="ГГ" /></Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
            <div className="second-bankcard">
                <div className="card-gray-line">
                    <Row>
                        <Col><Form.Control placeholder="ММ" /></Col>
                        <Col><span>?</span></Col>
                    </Row>
                </div>
            </div>
        </div>

    );


    constructor(props) {
        super(props);

        this.state = {
            name: "Пластиковые карты",
            type: "banks",
            info: [
                "–В сумму оплаты включена коммисия UnitPay 18 р.", "–Безопасность работы подтверждена сертификатом  PCI DSS."
            ],
            amount: 350,
        };
    }

    render() {
        return (
            <div className="card-payment-bg">
                <div className="logo-title"><span>io</span><p>finance</p></div>
                <div className="info-list">
                    <div className="list-header">
                        <div className="info">
                            <div className="info-text">
                                <p className="card-payment-title">{ this.state.name }</p>
                            </div>
                            <div className="list-header-icons">
                                <button>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="payment-info-text">
                        <p className="number-donate">Платёж №9213774</p>
                        <a href="">Вернуться в магазин</a>
                    </div>
                    <Router>
                        <this.Banks path="/" />
                        <this.Qiwi path="qiwi" />
                    </Router>
                    <div className="donate-info">
                        {this.state.info.map(item => (
                            <p>{item}</p>
                        ))}
                    </div>
                    <div className="donate-block">
                        <p>{this.state.amount}р.</p>
                        <span>Появились вопросы?</span>
                        <button>Оплатить</button>
                    </div>
                </div>
            </div>
        );
    }
}
