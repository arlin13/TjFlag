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
            <div className="valign-wrapper top-bottom-padding">
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
            <br />
            <label>Coach: {team.coach}</label>
          </div>
          <div id="teamPlayers" className="top-bottom-padding">
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
          <div id="teamGames" className="top-bottom-padding">
            <h6>PROXIMOS JUEGOS</h6>
            <div className="divider" />
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Contra</th>
                  <th>Lugar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td>12/02/2019</td>
                  <td>7:00 pm</td>
                  <td>Equipo C</td>
                  <td>Cancha UABC</td>
                </tr>
                <tr>
                  <td />
                  <td>19/02/2019</td>
                  <td>6:00 pm</td>
                  <td>Equipo A</td>
                  <td>Cancha UABC</td>
                </tr>
                <tr>
                  <td />
                  <td>24/02/2019</td>
                  <td>6:00 pm</td>
                  <td>Equipo D</td>
                  <td>Unidad Deportiva</td>
                </tr>
              </tbody>
            </table>
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
