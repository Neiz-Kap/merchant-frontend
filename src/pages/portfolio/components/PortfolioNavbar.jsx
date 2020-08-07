import React from "react";

import "./PortfolioNavbar.css";

import { connect } from "react-redux";

import avatar from "./../../../img/avatar.png";

class PortfolioNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileMenu: false,
    }
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    console.log(e.target)
    if (!e.target.matches('.dropdown-block-menu *')) {
      this.setState({ showProfileMenu: false });
    }
  }

  NavbarDropDown = (e) => {
    e.preventDefault();
    console.log('show')
    this.setState({ showProfileMenu: !this.state.showProfileMenu });
    console.log(this.state.showProfileMenu)
  }

  render() {
    const { data } = this.props;
    const { showProfileMenu } = this.state;

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
            <div className="navbar-avatar" onClick={this.NavbarDropDown}>
              <a href="#">
                <div className="avatar">
                  <img src={avatar} alt="avatar" />
                </div>
              </a>
              {data ? (
                <a href="#">
                  {data.firstName} {data.lastName}
                </a>
              ) : (
                <a href="#">Загрузка...</a>
              )}
            </div>
          </div>
          <nav style={ { display: showProfileMenu ? 'block' : 'none' } } className="dropdown-block-menu">
            <div className="dropdown-bg-info">
              <div className="dropdown-wrapper">
                <div className="dropdown-info">
                  <div className="avatar-menu">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="dropdown-text">
                    {data ? (
                      <a href="#">
                        {data.firstName} {data.lastName}
                      </a>
                    ) : (
                      <a href="#">Jeka Jeka</a>
                    )}
                    <span className="dropdown-email">
                      b.armstrong@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-wrapper-ul">
              <ul>
                <li>
                  <i className="las la-user"></i>
                  <a href="">Your profile</a>
                </li>
                <li>
                  <i className="las la-cog"></i>
                  <a href="">Settings</a>
                </li>
                <li>
                  <i class="las la-sign-out-alt"></i>
                  <a href="">Sign out</a>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.profile;

  return {
    data,
  };
}

const connectedPortfolioNavbar = connect(mapStateToProps)(PortfolioNavbar);
export default connectedPortfolioNavbar;
