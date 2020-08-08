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
                    <div className="card-block">
                        <svg width="448" height="320" viewBox="0 0 448 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                            <rect x="60" y="28" width="327.586" height="200" rx="10" fill="#4D7CFE"/>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="0" y="0" width="447.586" height="320" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="32"/>
                            <feGaussianBlur stdDeviation="30"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.486275 0 0 0 0 0.996078 0 0 0 0.158486 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
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