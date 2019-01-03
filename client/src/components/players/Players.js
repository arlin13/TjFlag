import React from "react";
import { Link } from "react-router-dom";
import PlayerList from "./PlayerList";

const Players = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div style={{ padding: "10px" }}>
          <Link
            to="/players/new"
            className="waves-effect waves-light btn-small right"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
      <div className="col s12">
        <h5>Jugadores:</h5>
      </div>
      <div className="col s12">
        <PlayerList />
      </div>
    </div>
  );
};

export default Players;
