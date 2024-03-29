import React from 'react';

import './BalanceCard.css';

export default class BalanceCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="balance-card">
                <div className="list-header">
                    <p className="list-header-text">Доступные средства</p>
                    <div className="list-header-icons">
                        <i className="las la-ellipsis-h"></i>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-category">
                        <div className="card-icon">
                            <i className="lab la-cc-visa"></i>
                        </div>
                        <div className="card-number">
                            <p>3210 **** **** 4008</p>
                            <span>Номер карты</span>
                        </div>
                    </div>
                    <div className="card-info-text">
                        <p>$88.200 <i className="las la-arrow-up"></i></p>
                        <span>Баланс</span>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-category">
                        <div className="card-icon">
                            <i className="lab la-cc-mastercard"></i>
                        </div>
                        <div className="card-number">
                            <p>4008 **** **** 9464</p>
                            <span>Номер карты</span>
                        </div>
                    </div>
                    <div className="card-info-text">
                        <p>$66.400 <i className="las la-arrow-down"></i></p>
                        <span>Баланс</span>
                    </div>
                </div>
            </div>
        );
    }

}