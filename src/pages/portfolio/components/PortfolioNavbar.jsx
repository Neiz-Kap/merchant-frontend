import React from "react";

import "./PortfolioNavbar.css";

import { connect } from 'react-redux';

import avatar from "./../../../img/avatar.png";

class PortfolioNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { data } = this.props;

        return (
            <nav className="navbar navbar-expand-lg">
                <div className="navbar-left">
                    <a href="#" id="menu-toggle">
                        <i className="las la-bars"></i>
                    </a>
    
                    <p>Панель приборов</p>
                </div>
    
                <div className="navbar-right">
                    <a href="#">
                        <i className="las la-search"></i>
                    </a>
                    <a href="#">
                        <i className="las la-envelope"></i>
                    </a>
                    <a href="#">
                        <i className="las la-bell"></i>
                    </a>
                    <div className="navbar-avatar">
                        <a href="#">
                            <div className="avatar">
                                <img src={avatar} alt="" />
                            </div>
                        </a>
                        { data ?
                            <a href="#">{data.firstName} {data.lastName}</a>
                            : <a href="#">Загрузка...</a>
                        }
                    </div>
                </div>
            </nav>
        );
    }

};

function mapStateToProps(state) {
    const { data } = state.profile;

    return {
        data,
    };
}

const connectedPortfolioNavbar = connect(mapStateToProps)(PortfolioNavbar);
export default connectedPortfolioNavbar;