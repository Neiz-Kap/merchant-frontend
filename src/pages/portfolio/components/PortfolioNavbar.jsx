import React from "react";

import "./PortfolioNavbar.css";

import avatar from "./../../../img/avatar.png";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-left">
        <a href="#" id="menu-toggle">
          <i className="las la-bars"></i>
        </a>

        <p>Панель приборов</p>
      </div>

      <div className="navbar-right">
        <a href="">
          <i className="las la-search"></i>
        </a>
        <a href="">
          <i className="las la-envelope"></i>
        </a>
        <a href="">
          <i className="las la-bell"></i>
        </a>
        <div className="navbar-avatar">
          <a href="">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
          </a>
          <a href="">Berry Armstrong</a>
        </div>
      </div>
    </nav>
  );
};
