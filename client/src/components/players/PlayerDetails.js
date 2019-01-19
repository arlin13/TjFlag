import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlayer } from "../../actions";

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
          <Link to={"/players"} />
        </div>
        <div className="col s12">
          <h4 className="center">
            # {player.number} {player.name}
          </h4>
          <div className="divider" />
          <div id="playerBasicInfo">
            <h5>
              {player.name} {player.lastName}
            </h5>
            <h6>{player.division}</h6>
          </div>
          <div className="divider" />
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
