import React from 'react';

import './Transaction.css';

export default class Transaction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            company: this.props.company,
            type: this.props.type,
            amount: this.props.amount,
            date: this.props.date,
        };
    }

    appendSign(amount) {
        if (amount > 0)
            return (<p style={{ color: '#6DD230' }}>+{ this.state.amount }&#8381;</p>);
        else return (<p>{this.state.amount}&#8381;</p>);
    }

    render() {
        return (
            <div className="transaction">
                <div className="category">
                    <div className="icon-circle-orange"><i class="las la-train"></i></div>
                    <div className="category-text">
                    <p>{ this.state.name }</p>
                        <span>{ this.state.company }</span>
                    </div>
                </div>
                <div className="info">
                    <div className="info-text">
                        { this.appendSign(this.state.amount) }
                        <span>{ this.state.date }</span>
                    </div>
                    <div className="more">
                        <i class="las la-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        );
    }
}