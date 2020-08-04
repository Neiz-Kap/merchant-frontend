import React from 'react';

import './AssetsCard.css';

export default class AssetsCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="assets-card">
                <div className="list-header">
                    <p className="list-header-text">Счета</p>
                    <div className="list-header-icons">
                        <i class="las la-chevron-circle-left"></i>
                        <i class="las la-chevron-circle-right"></i>
                    </div>
                </div>
                <div className="assets-card-content">
                    <div className="summary-pie">
                        <p>$46k</p>
                        <span>Total profit</span>
                    </div>
                    <p>Visa Card **** 4090</p>
                </div>
                <div className="assets-card-footer">
                    <p>Скачать заявление</p>
                    <i class="las la-download"></i>
                </div>
            </div>
        );
    }


}




