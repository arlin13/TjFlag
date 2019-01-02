import React from "react";
import { Link } from "react-router-dom";
import TeamList from "./TeamList";

const Teams = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div style={{ padding: "10px" }}>
          <Link
            to="/teams/new"
            className="waves-effect waves-light btn-small right"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
      <div className="col s12">
        <h5>Equipos:</h5>
      </div>
      <div className="col s12">
        <TeamList />
      </div>
    </div>
  );
};

export default Teams;
