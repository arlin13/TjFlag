import React from "react";
import { Link } from "react-router-dom";
import PlayerList from "./PlayerList";

const Players = () => {
  return (
    <div className="container row">
      <div className="col s12">
        <h5 className="center">JUGADORES</h5>
      </div>
      <div className="col s12">
        <div style={{ margin: "10px" }}>
          <Link
            to="/players/new"
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
        <label htmlFor="autocomplete-input">Buscar jugador</label>
      </div>
      <div className="col s12">
        <PlayerList />
      </div>
    </div>
  );
};

export default Players;
