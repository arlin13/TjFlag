import React from "react";
const img_el_flag_nos_une = require("../images/ElFlagNosUne.jpg");

const Landing = () => {
  return (
    <div style={{ textAlign: "center", padding: "25px" }}>
      <div className="row">
        <div className="col s12" style={{ padding: "10px" }}>
          <img
            className="responsive-img"
            src={img_el_flag_nos_une}
            alt="logo"
          />
        </div>
        <div className="col s4">Tijuana</div>
        <div className="col s4">Ensenada</div>
        <div className="col s4">Mexicali</div>
        <div className="divider" />
      </div>
    </div>
  );
};

export default Landing;
