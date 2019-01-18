import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../../actions";

class PlayerDetails extends Component {
  componentDidMount() {
    this.props.fetchPlayer();
  }

  render() {
    return (
      <div className="col s12">
        <h1>Player details!</h1>
        <p>{this.props.player}</p>
      </div>
    );
  }
}

function mapStateToProps({ player }) {
  return { player };
}

export default connect(
  mapStateToProps,
  { fetchPlayer }
)(PlayerDetails);
