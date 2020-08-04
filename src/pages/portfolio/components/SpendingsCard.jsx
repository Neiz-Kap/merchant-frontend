import React from 'react';

import './SpendingsCard.css';

export default class SpendingsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="spendings-card">
                <div className="list-header">
                    <p className="list-header-text">Расходы</p>
                    <div className="list-header-icons">
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
