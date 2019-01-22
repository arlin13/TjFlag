import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTournament } from "../../actions";
import "../../style/index.css";

class TournamentDetails extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const tournamentId = search.substring(
      search.indexOf("=") + 1,
      search.length
    );
    this.props.fetchTournament(tournamentId);
  }

  render() {
    const tournament = this.props.tournaments;
    return (
      <div className="container row">
        <div className="col s12 left">
          <a href={"/tournaments"}>
            <div className="valign-wrapper top-bottom-padding">
              <i className="material-icons">arrow_back</i>
              Lista de torneos
            </div>
          </a>
        </div>
        <div className="col s12">
          <h3 className="center">Torneo {tournament.name}</h3>
          <div id="tournamentBasicInfo" className="top-bottom-margin">
            <h6>INFORMACION GENERAL</h6>
            <div className="divider" />
            <label>Ciudad: {tournament.city}</label>
            <br />
            <label>Modalidad: {tournament.modality}</label>
            <br />
            <label>Categoria: {tournament.category}</label>
            <br />
            <label>Rama: {tournament.mode}</label>
          </div>
          <div id="tournamentStandings" className="top-bottom-padding">
            <h6>TABLAS DE POSICIONES</h6>
            <div className="divider" />
            <table>
              <thead>
                <tr>
                  <th>Posicion</th>
                  <th>Equipo</th>
                  <th>JJ</th>
                  <th>JG</th>
                  <th>JP</th>
                  <th>Favor</th>
                  <th>Contra</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Osas</td>
                  <td>10</td>
                  <td>9</td>
                  <td>1</td>
                  <td>418</td>
                  <td>183</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Friends</td>
                  <td>10</td>
                  <td>8</td>
                  <td>2</td>
                  <td>326</td>
                  <td>191</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="tournamentGames" className="top-bottom-padding">
            <h6>PROXIMOS JUEGOS</h6>
            <div className="divider" />
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Equipo A</th>
                  <th>Equipo B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td>12/02/2019</td>
                  <td>7:00 pm</td>
                  <td>Osas</td>
                  <td>Friends</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="tournamentPlayers" className="top-bottom-padding">
            <h6>EQUIPOS</h6>
            <div className="divider" />
            <div className="col s12 center">
              <div className="col s12 m6">Equipo 1</div>
              <div className="col s12 m6">Equipo 2</div>
              <div className="col s12 m6">Equipo 3</div>
              <div className="col s12 m6">Equipo 4</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ tournaments }) {
  return { tournaments };
}

export default connect(
  mapStateToProps,
  { fetchTournament }
)(TournamentDetails);
