import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './TestPage.css';

function TestPage() {
    return (
        <Container id="testPage">
            <div className="transactions">
                <div className="find-transaction">
                    <i className="las la-search"></i>
                    <input type="text" placeholder="НАЙТИ ТРАНЗАКЦИЮ"></input>
                    <p>тип для поиска</p>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="category">
                        <div className="icon"><i class="las la-train"></i></div>
                        <div className="category-text">
                            <p>Транспорт</p>
                            <span>Электричка</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>+1500&#8381;</p>
                            <span>25 Июля 2020</span>
                        </div>
                        <div className="more">
                            <i class="las la-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default TestPage;
