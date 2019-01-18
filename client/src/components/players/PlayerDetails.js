import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../../actions";

class PlayerDetails extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const playerId = search.substring(search.indexOf("=") + 1, search.length);
    const player = this.props.fetchPlayer(playerId);
    console.log(player);
  }

  renderPlayer() {
    return this.props.player;
  }

  render() {
    return (
      <div className="container row">
        <div className="col s12">
          <h5 className="center">Player details!</h5>
          <p>{this.renderPlayer()}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(algo) {
  console.log("mapStateToProps");
  console.log(algo);
  return "mapStateToProps";
}

export default connect(
  mapStateToProps,
  { fetchPlayer }
)(PlayerDetails);
