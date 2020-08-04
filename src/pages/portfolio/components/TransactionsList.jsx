import React from 'react';

import Transaction from './Transaction';

import './TransactionsList.css';

const TransactionListSearchHeader = () => (
    <div className="transactions-list-header">
        <div className="transactions-list-header-search">
            <i className="las la-search"></i>
            <input type="text" placeholder="НАЙТИ ТРАНЗАКЦИЮ"></input>
            <p className="transactions-list-header-search-text">тип для поиска</p>
        </div>
    </div>
);

const TransactionListHeader = () => (
    <div className="list-header">
        <p className="list-header-text">Последние транзакции</p>
        <div className="list-header-icons">
            <i className="las la-sync"></i>
        </div>
    </div>
);

export default class TransactionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.search || false,
            transactions: [
                {
                    name: "Транспорт",
                    company: "Метро",
                    type: "TRANSPORT",
                    amount: 1500,
                    date: "30.07.2020"
                },
                {
                    name: "Транспорт",
                    company: "Метро",
                    type: "TRANSPORT",
                    amount: -1500,
                    date: "30.07.2020"
                }
            ]
        };
    }

    render() {
        const transactions = [];

        let header;
        if (this.state.search)
            header = <TransactionListSearchHeader/>;
        else header = <TransactionListHeader/>;

        this.state.transactions.forEach(element => {
            transactions.push(<Transaction name={element.name} company={element.company} type={element.type} amount={element.amount} date={element.date}  />);
        });

        return (
            <div className="transactions">
                { header }
                { transactions }
            </div>
        );
    }
}