import React from "react";

import PortfolioSidebar from "./components/PortfolioSidebar";
import SpendingsCard from "./components/SpendingsCard";
import AssetsCard from "./components/AssetsCard";
import "./PortfolioRoot.css";
import TransactionsList from "./components/TransactionsList";
import PortfolioNavbar from "./components/PortfolioNavbar";

import { Row, Col } from "react-bootstrap";
import BalanceCard from "./components/BalanceCard";
import Profile from "./components/Profile";
import Accounts from "./components/Accounts";
import Payments from "./components/Payments";
import {
    Router,
    Link,
} from "@reach/router";

import { connect } from 'react-redux';

const PortfolioHome = () => {
    return (
        <div className="container-fluid content">
            <TransactionsList />
            <div className="cards">
                <SpendingsCard />
                <AssetsCard />
            </div>
            <div className="funds">
                <BalanceCard />
            </div>
        </div>
    );
};

class PortfolioRoot extends React.Component {
    render() {
        const { user, loggedIn } = this.props;

        const fullName = `${user.user.firstName} ${user.user.lastName}`;

        return (
            <div className="d-flex" id="wrapper">
                <PortfolioSidebar />

                <div id="page-content-wrapper">
                    <PortfolioNavbar username={fullName} />

                    <Router style={{ height: '100%' }}>
                        <PortfolioHome path='/' />
                        <Profile path='settings' />
                        <Accounts path='accounts' />
                        <Payments path='payments' />
                    </Router>

                    <footer className="container-fluid footer">
                        <p className="secondary">
                            © 2020 “Название компании” - Все права защищены.
                        </p>
                        <p className="secondary">О компании “Название компании”</p>
                    </footer>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { loggedIn, user } = state.authReducer;

    return {
        loggedIn,
        user
    };
}

const connectedPortfolioRoot = connect(mapStateToProps)(PortfolioRoot);
export default connectedPortfolioRoot;