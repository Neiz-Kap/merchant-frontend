import React from 'react';

import './SpendingsCard.css';

export default class SpendingsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="spendings-card">
                <div className="spendings-card-header">
                    <p className="spendings-card-header-text">Расходы</p>
                    <div className="spendings-card-header-more">
                        <i class="las la-ellipsis-h"></i>
                    </div>
                </div>
                <div className="spendings-card-content">
                    <p>Посмотреть полный отчет</p>
                    <i class="las la-download"></i>
                </div>
            </div>
        );
    }
}
