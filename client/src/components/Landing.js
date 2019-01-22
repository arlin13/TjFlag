import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../style/index.css";
const img_el_flag_nos_une = require("../images/ElFlagNosUne.jpg");
const img_logo_GF = require("../images/Logo_GF.png");
const img_logo_LEGENDS = require("../images/Logo_LEGENDS.png");
const img_logo_LOSLAGOS = require("../images/Logo_LOSLAGOS.png");
const img_logo_STOLI = require("../images/Logo_STOLI.png");

class Landing extends Component {
  render() {
    return (
      <div className="container top-bottom-padding">
        <div className="row">
          <div className="col s12">
            <img
              className="responsive-img"
              src={img_el_flag_nos_une}
              alt="logo"
            />
          </div>
          <div className="col s4 cityDiv">
            <a style={{ color: "#F67645" }} href="/games">
              TIJUANA
            </a>
          </div>
          <div className="col s4 cityDiv">
            <a style={{ color: "#F67645" }} href="/games">
              ENSENADA
            </a>
          </div>
          <div className="col s4 cityDiv">
            <a style={{ color: "#F67645" }} href="/games">
              MEXICALI
            </a>
          </div>
          <div className="col s12">
            <h3 className="center">PATROCINADORES</h3>
            <div className="carousel">
              <a className="carousel-item" href="#GF">
                <img
                  className="responsive-img"
                  src={img_logo_GF}
                  alt="logo_GF"
                />
              </a>
              <a className="carousel-item" href="#LEGENDS">
                <img
                  className="responsive-img"
                  src={img_logo_LEGENDS}
                  alt="logo_GF"
                />
              </a>
              <a className="carousel-item" href="#LOSLAGOS">
                <img
                  className="responsive-img"
                  src={img_logo_LOSLAGOS}
                  alt="logo_GF"
                />
              </a>
              <a className="carousel-item" href="#STOLI!">
                <img
                  className="responsive-img"
                  src={img_logo_STOLI}
                  alt="logo_GF"
                />
              </a>
            </div>
          </div>
          <div className="col s12 top-bottom-padding">
            <h3 className="center">CUMPLEAÑEROS</h3>
            <h4 className="center" style={{ margin: "-20px 0 0 0" }}>
              DE LA SEMANA
            </h4>
            <p>TODO</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
