import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const logo_100px = require("../images/Logo_TJFLAG_Color_100px.png");
const football_300px = require("../images/Football_300px.jpg");

class Header extends Component {
  renderSideNavTopContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="dividerTop">
            <div className="divider" />
          </li>,
          <li key="tjFlag">
            <div className="center bold">TJ Flag</div>
          </li>
        ];
      default:
        return [
          <li key="user-view">
            <div className="user-view">
              <div className="background">
                <img alt="football_300px" src={football_300px} />
              </div>
              <span className="white-text name">Arlin Grijlba</span>
              <span className="white-text email">arlin.grijalba@gmail.com</span>
            </div>
          </li>
        ];
    }
  }
  renderTopNavContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="logIn">
            <a href="/auth/google">Login With Google</a>
          </li>
        ];
      default:
        return [
          <li key="logOut">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="nav-extended" style={{ padding: "10px" }}>
        <div className="nav-wrapper">
          <Link to={"/"} className="brand-logo">
            <img className="responsive-img" src={logo_100px} alt="logo" />
          </Link>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li key="tournaments">
              <a href="/tournaments">Torneos</a>
            </li>
            <li key="teams">
              <a href="/teams">Equipos</a>
            </li>
            <li key="players">
              <a href="/players">Jugadores</a>
            </li>
            <li key="courts">
              <a href="/courts">Canchas</a>
            </li>
            {this.renderTopNavContent()}
          </ul>
          <ul className="sidenav #e57373 red lighten-2" id="mobile-demo">
            {this.renderSideNavTopContent()}
            <li key="divider1">
              <div className="divider" />
            </li>
            <li key="teams">
              <a href="/teams">Equipos</a>
            </li>
            <li key="players">
              <a href="/players">Jugadores</a>
            </li>
            <li key="courts">
              <a href="/courts">Canchas</a>
            </li>
            <li key="divider2">
              <div className="divider" />
            </li>
            <li key="games">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">Proximos juegos</div>
                  <div className="collapsible-body">
                    <ul className="#e57373 red lighten-2">
                      <li>
                        <a href="/games">Tijuana</a>
                      </li>
                      <li>
                        <a href="/games">Ensenada</a>
                      </li>
                      <li>
                        <a href="/games">Mexicali</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li key="divider3">
              <div className="divider" />
            </li>
            <li key="tournaments">
              <a href="/tournaments">Torneos</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
