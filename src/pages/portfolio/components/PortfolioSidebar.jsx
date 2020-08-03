import React, { Component } from 'react';

import logo from './../../../img/logo.png';

import './PortfolioSidebar.css';

import { Link, useRouteMatch } from 'react-router-dom';

const PortfolioSidebar = () => {
    let { url } = useRouteMatch();
    console.log(url)

    return (
        <nav className="sidebar" id="sidebar-wrapper">
            <div className="sidebar-heading center">
                <img src={logo} alt="" />
            </div>
            <div className="list-group list-group-flush">
                <Link to={`${url}/home`} className="list-group-item active">
                    <i className="las la-tachometer-alt"></i>
                    <span>Портфолио</span>
                </Link>
                <a href='#' className="list-group-item">
                    <i className="las la-share"></i>
                Быстрые действия
            </a>
                <a href="#" className="list-group-item">
                    <i className="las la-briefcase"></i>
                Продукты
            </a>
                <a href="#" className="list-group-item">
                    <i className="lar la-credit-card"></i>
                События
            </a>
                <a href="/settings" className="list-group-item">
                    <i class="las la-cog"></i>
                Настройки
            </a>
            </div>

            <div className="cards-list-header">
                <span className="cards-list-text">Счета</span>
                <a href="#" className="cards-list-add">
                    <i className="las la-plus-circle"></i>Добавить
            </a>
            </div>

            <div className="card-list-group list-group list-group-flush">
                <a href='#' className="list-group-item list-group-card visa active">
                    <i className="lab la-cc-visa"></i>
                    <span>Card xxxx-8004</span>
                </a>
                <a href='#' className="list-group-item list-group-card mastercard">
                    <i className="lab la-cc-mastercard"></i>
                    <span>Card xxxx-1902</span>
                </a>
                <a href='#' className="list-group-item list-group-card cash">
                    <i className="las la-money-bill"></i>
                    <span>Card xxxx-1804</span>
                </a>
            </div>
        </nav>
    );
};

export default PortfolioSidebar;