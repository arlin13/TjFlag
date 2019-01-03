import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Payments from "./Payments";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

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
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="brand-logo"
          >
            Tj Flag
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

document.addEventListener("DOMContentLoaded", function() {
  var sideNavElems = document.querySelectorAll(".sidenav");
  var datePickerElems = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datePickerElems, {});
  M.Sidenav.init(sideNavElems, {
    inDuration: 350,
    outDuration: 350,
    edge: "left"
  });
});

export default connect(mapStateToProps)(Header);
