import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions";

class PlayerList extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
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
          <td>
            <Link to={"/players/details/?playerId=" + player._id}>Ver mas</Link>
          </td>
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
