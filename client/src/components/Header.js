import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const logo_100px = require("../images/Logo_TJFLAG_Color_100px.png");

// import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="/teams">Equipos</a>
          </li>,
          <li key="2">
            <a href="/players">Jugadores</a>
          </li>,
          <li key="3">
            <a href="/stats">Estadisticas</a>
          </li>,
          <li key="4">
            <a href="/auth/google">Login With Google</a>
          </li>
        ];
      default:
        return [
          // <li key="1">
          //   <Payments />
          // </li>,
          // <li key="2" style={{ margin: "0 20px" }}>
          //   Credits: {this.props.auth.credits}
          // </li>,
          <li key="3">
            <a href="/teams">Equipos</a>
          </li>,
          <li key="4">
            <a href="/players">Jugadores</a>
          </li>,
          <li key="5">
            <a href="/stats">Estadisticas</a>
          </li>,
          <li key="6">
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
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
          <ul className="sidenav" id="mobile-demo">
            {this.renderContent()}
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
