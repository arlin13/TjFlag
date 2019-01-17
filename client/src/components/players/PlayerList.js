import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions";

class PlayerList extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  renderPlayers() {
    return this.props.players.map(player => {
      return (
        <div className="card blue-grey darken-1" key={player._id}>
          <div className="card-content white-text">
            <span className="card-title">
              {player.name} {player.lastName}
            </span>
            <span className="left">Equipo: "Pendiente"</span>
            <span className="right"># {player.number}</span>
          </div>
          <div className="card-action">
            <p>Ver detalles</p>
          </div>
        </div>
      );
    });
  }

  renderPlayersTable() {
    var number = 1;
    return this.props.players.map(player => {
      return (
        <tr key={player._id}>
          <td>{number++}</td>
          <td># {player.number}</td>
          <td>{player.name}</td>
          <td>{player.lastName}</td>
          <td>{player.division}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col s12">
        <table className="highlight">
          <thead>
            <tr>
              <th />
              <th>Numero</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Division</th>
            </tr>
          </thead>
          <tbody>{this.renderPlayersTable()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ players }) {
  return { players };
}

export default connect(
  mapStateToProps,
  { fetchPlayers }
)(PlayerList);
