import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../../actions";
import "../../style/index.css";

class PlayerDetails extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const playerId = search.substring(search.indexOf("=") + 1, search.length);
    this.props.fetchPlayer(playerId);
  }

  render() {
    const player = this.props.players;
    return (
      <div className="container row">
        <div className="col s12 left">
          <a href={"/players"}>
            <div className="valign-wrapper top-botom-margin">
              <i className="material-icons">arrow_back</i>
              Lista de jugadores
            </div>
          </a>
        </div>
        <div className="col s12">
          <h3 className="center">
            # {player.number} {player.name} {player.lastName}
          </h3>
          <div id="playerBasicInfo" className="top-botom-margin">
            <h6>INFORMACION GENERAL</h6>
            <div className="divider" />
            <label>Division: {player.division}</label>
            <br />
            <label>
              Fecha de nacimiento:{" "}
              {new Date(player.dateOfBirth).toLocaleDateString()}
            </label>
            <br />
            <label>Ciudad: {player.city}</label>
          </div>
          <div id="playerTeamsInfo" className="top-botom-margin">
            <h6>EQUIPOS</h6>
            <div className="divider" />
            <label>Equipos: </label>
            <label>{player.teams}</label>
          </div>
          <div id="playerStatsInfo" className="top-botom-margin">
            <h6>ESTADISTICAS</h6>
            <div className="divider" />
            <table className="striped centered">
              <thead>
                <tr>
                  <th />
                  <th>Pases completos</th>
                  <th>Pases TD</th>
                  <th>Pases atrapados</th>
                  <th>Tacleos</th>
                  <th>Intercepciones</th>
                  <th>Sacks</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td>4</td>
                  <td>0</td>
                  <td>2</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td />
                  <td>6</td>
                  <td>2</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td />
                  <td>3</td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="playerAwardInfo" className="top-botom-margin">
            <h6>PREMIOS</h6>
            <div className="divider" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ players }) {
  return { players };
}

export default connect(
  mapStateToProps,
  { fetchPlayer }
)(PlayerDetails);
