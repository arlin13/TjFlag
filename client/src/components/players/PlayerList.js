import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions";

class PlayerList extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  // <a
  //   href={"/players/" + player.name}
  //   className="collection-item"
  //   key={player.name}
  // >
  //   {player.name}
  // </a>

  renderPlayers() {
    return this.props.players.map(player => {
      return (
        <div className="card blue-grey darken-1" key={player._id}>
          <div className="card-content white-text">
            <span className="card-title">
              {player.name} {player.lastName}
            </span>
            <p>Equipo: "Pendiente"</p>
          </div>
          <div className="card-action">
            <button># {player.number}</button>
            <button className="right">Ver detalles</button>
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
