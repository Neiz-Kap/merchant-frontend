import React from 'react';

import './BalanceCard.css';

export default class BalanceCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="balance-card">
                <div className="balance-card-header">
                    <p className="balance-card-header-text">Доступные средства</p>
                    <div className="balance-card-header-more">
                        <i className="las la-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        );
    }

}