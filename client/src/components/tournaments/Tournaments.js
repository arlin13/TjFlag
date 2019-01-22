import React from "react";
import { Link } from "react-router-dom";
import TournamentList from "./TournamentList";

const Tournaments = () => {
  return (
    <div className="container row">
      <div className="col s12">
        <h5 className="center">TORNEOS</h5>
      </div>
      <div className="col s12">
        <div style={{ margin: "10px" }}>
          <Link
            to="/tournaments/new"
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
        <label htmlFor="autocomplete-input">Buscar torneos</label>
      </div>
      <div className="col s12">
        <TournamentList />
      </div>
    </div>
  );
};

export default Tournaments;
