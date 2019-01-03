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
        <a
          href={"/players/" + player.name}
          className="collection-item"
          key={player.name}
        >
          {player.name}
        </a>
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
