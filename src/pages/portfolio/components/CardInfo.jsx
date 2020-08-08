import React from 'react';

import './CardInfo.css';

export default class CardInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // name: this.props.name,
            // accountNum: this.props.accountNum,
            // cardNum: this.props.cardNum,
            // holder: this.props.amount,
            // valid: this.props.valid,
            // amount: this.props.amount,
            // security: this.props.security,
            name: "Visa Classic Paywave",
            accountNum: "UK64CT00000000000010034567",
            cardNum: "3400 **** **** 3002",
            holder: "Barry Armstrong",
            valid: "20.06.2022",
            amount: "142.800",
            security: "Enable",
        };
    }

    render() {
        return (
            <div className="card-info">
                <div className="list-header">
                    <div className="card-info-header-text">
                        <div className="card-icon banks"><i class="lab la-cc-visa"></i></div>
                        <h5>{ this.state.cardNum }</h5>
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <span className="secondary">${ this.state.amount }</span>
                        </div>
                        <div className="list-header-icons">
                            <i class="las la-angle-down"></i>
                        </div>
                    </div>
                </div>
                <div className="card-info-content">
                    {/* Ванек, ты сможешь! */}
                    <div className="card-info-block">
                        <div className="card-info-bg">
                            <div className="card-icon banks"><i class="lab la-cc-visa"></i></div>
                            <div className="card-info-num">
                                <p>{ this.state.cardNum }</p>
                                <span>Card number</span>
                            </div>
                            <div className="card-info-holder">
                                <div className="card-info-name">
                                    <p>{ this.state.holder }</p>
                                    <span>Cardholder</span>
                                </div>
                                <div className="card-info-valid">
                                    <p>{ this.state.valid }</p>
                                    <span>Valid</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category">
                        <p className="secondary">Название карты</p>
                        <p>{ this.state.name }</p>
                    </div>
                    <div className="category">
                        <p className="secondary">Номер счета</p>
                        <p>{ this.state.accountNum }</p>
                    </div>
                    <div className="category">
                        <p className="secondary">Номер карты</p>
                        <p>{ this.state.cardNum }</p>
                    </div>
                    <div className="category">
                        <p className="secondary">Владелец карты</p>
                        <p>{ this.state.holder }</p>
                    </div>
                    <div className="category">
                        <p className="secondary">Дата окончания</p>
                        <p>{ this.state.valid }</p>
                    </div>
                    <div className="category">
                        <p className="secondary">Баланс</p>
                        <p>{ this.state.amount }</p>
                    </div>
                    <div className="category">
                        <p className="secondary">Безопасность</p>
                        <p>{ this.state.security }</p>
                    </div>
                    <div className="card-info-actions">
                        <i className="las la-ellipsis-h"></i>
                        <p>Действия карты</p>
                    </div>
                </div>
            </div>
        );
    }
}