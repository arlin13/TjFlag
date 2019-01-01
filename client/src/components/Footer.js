import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  renderContent() {}

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Contactanos</h5>
              <div className="grey-text text-lighten-4">
                Telefono: (664)325-3456
              </div>
              <div className="grey-text text-lighten-4">
                Email: tjflag@hotmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">
              ...
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

// export default Footer;
export default connect()(Footer);
