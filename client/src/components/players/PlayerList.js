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
            <a>Ver detalles</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderPlayers()}</ul>
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
