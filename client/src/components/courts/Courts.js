import React from "react";
import { Link } from "react-router-dom";
import CourtList from "./CourtList";

const Courts = () => {
  return (
    <div className="container row">
      <div className="col s12">
        <h5>CANCHAS</h5>
      </div>
      <div className="col s12">
        <div style={{ margin: "10px" }}>
          <Link
            to="/courts/new"
            className="waves-effect waves-light btn-small right"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
      <div className="input-field col s12">
        <i className="material-icons prefix">search</i>
        <input
          type="text"
          id="autocomplete-input"
          className="autocomplete white-text"
        />
        <label htmlFor="autocomplete-input">Buscar canchas</label>
      </div>
      <div className="col s12">
        <CourtList />
      </div>
    </div>
  );
};

export default Courts;
