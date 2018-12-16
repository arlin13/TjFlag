import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    console.log("Im inside of class Header -> renderContent");
    console.log("Value of props");
    console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with Google</a>
          </li>
        );
      case true:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
      default:
        return <li> Not sure what is happening</li>;
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            href=""
          >
            Tj Flag
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
// ???
// const mapStateToProps = ({auth}) => {
//   return { auth };
// };

export default connect(mapStateToProps)(Header);
