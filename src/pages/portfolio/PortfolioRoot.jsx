import React from "react";

import PortfolioSidebar from "./components/PortfolioSidebar";
import SpendingsCard from "./components/SpendingsCard";
import AssetsCard from "./components/AssetsCard";
import "./PortfolioRoot.css";
import TransactionsList from "./components/TransactionsList";
import PortfolioNavbar from "./components/PortfolioNavbar";

import BalanceCard from "./components/BalanceCard";
import Profile from "./components/Profile";
import Accounts from "./components/Accounts";
import Payments from "./components/Payments";
import {
    Router,
} from "@reach/router";

import { connect } from 'react-redux';
import { fetchProfileAction } from "../../store/actions/profile";

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
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(fetchProfileAction());
    }

    render() {
        const { user, loggedIn, data } = this.props;
        console.log(data)

        return (
            <div className="d-flex" id="wrapper">
                <PortfolioSidebar />

                <div id="page-content-wrapper">
                    <PortfolioNavbar />

                    <Router style={{ height: '100%' }}>
                        <PortfolioHome path='/' />
                        <Profile path='settings/*' />
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
    const { loggedIn, user } = state.authReducer;
    const { data } = state.profile;

    return {
        loggedIn,
        user,
        data,
    };
}

const connectedPortfolioRoot = connect(mapStateToProps)(PortfolioRoot);
export default connectedPortfolioRoot;