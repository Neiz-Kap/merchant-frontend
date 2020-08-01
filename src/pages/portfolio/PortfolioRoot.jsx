import React from 'react';

import PortfolioSidebar from './components/PortfolioSidebar';
import SpendingsCard from './components/SpendingsCard';
import AssetsCard from './components/AssetsCard';
import './PortfolioRoot.css';
import TransactionsList from './components/TransactionsList';
import PortfolioNavbar from './components/PortfolioNavbar';

import { Row, Col } from 'react-bootstrap';
import BalanceCard from './components/BalanceCard';

const PortfolioRoot = () => {
    return (
        <div className="d-flex" id="wrapper">

            <PortfolioSidebar />

            <div id="page-content-wrapper">

                <PortfolioNavbar/>

                <div className="container-fluid content">
                    <TransactionsList/>
                    <div className="cards">
                        <SpendingsCard/>
                        <AssetsCard/>
                    </div>
                    <div className="funds">
                        <BalanceCard/>
                    </div>
                </div>
                <footer className="container-fluid footer">
                    <p className='secondary'>
                        © 2020 “Название компании” - Все права защищены.
              </p>
                    <p className='secondary'>
                        О компании “Название компании”
              </p>
                </footer>
            </div>

        </div>
    );
};

export default PortfolioRoot;