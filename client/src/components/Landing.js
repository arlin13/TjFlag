import React from "react";
const logo_200px = require("../images/Logo_TJFLAG_Color_200px.png");

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={logo_200px} style={{ padding: "20px" }} alt="logo" />
      <div className="row">
        <div className="col s4">Tijuana</div>
        <div className="col s4">Ensenada</div>
        <div className="col s4">Mexicali</div>
      </div>
    </div>
  );
};

export default Landing;
