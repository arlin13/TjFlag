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
              <p className="grey-text text-lighten-4">
                Tijuana, Baja California, Mexico. Telefono: (664)325-3456 Email:
                tjflag@hotmail.com
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Redes sociales</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Instagram
                  </a>
                </li>
              </ul>
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
