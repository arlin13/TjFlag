import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
const img_el_flag_nos_une = require("../images/ElFlagNosUne.jpg");

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", padding: "25px" }}>
        <div className="row">
          <div>
            <img
              className="responsive-img"
              src={img_el_flag_nos_une}
              alt="logo"
            />
          </div>
          <div className="col s4">
            <a style={{ color: "#F67645" }} href="/games">
              TIJUANA
            </a>
          </div>
          <div className="col s4">
            <a style={{ color: "#F67645" }} href="/games">
              ENSENADA
            </a>
          </div>
          <div className="col s4">
            <a style={{ color: "#F67645" }} href="/games">
              MEXICALI
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
