import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeam } from "../../actions";
import "../../style/index.css";

class TeamDetails extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const teamId = search.substring(search.indexOf("=") + 1, search.length);
    this.props.fetchTeam(teamId);
  }

  render() {
    const team = this.props.teams;
    return (
      <div className="container row">
        <div className="col s12 left">
          <a href={"/teams"}>
            <div className="valign-wrapper top-botom-margin">
              <i className="material-icons">arrow_back</i>
              Lista de equipos
            </div>
          </a>
        </div>
        <div className="col s12">
          <h3 className="center">{team.name}</h3>
          <div id="teamBasicInfo" className="top-bottom-margin">
            <h6>INFORMACION GENERAL</h6>
            <div className="divider" />
            <label>Ciudad: {team.city}</label>
            <br />
            <label>Categoria: {team.category}</label>
            <br />
            <label>Rama: {team.mode}</label>
          </div>
          <div id="teamPlayers" className="top-botom-margin">
            <h6>JUGADORES</h6>
            <div className="divider" />
            <div className="col s12 center">
              <div className="col s12 m6">Jugador 1</div>
              <div className="col s12 m6">Jugador 2</div>
              <div className="col s12 m6">Jugador 3</div>
              <div className="col s12 m6">Jugador 4</div>
              <div className="col s12 m6">Jugador 5</div>
              <div className="col s12 m6">Jugador 6</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ teams }) {
  return { teams };
}

export default connect(
  mapStateToProps,
  { fetchTeam }
)(TeamDetails);
