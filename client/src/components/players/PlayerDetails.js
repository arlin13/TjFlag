import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../../actions";

class PlayerDetails extends Component {
  componentDidMount() {
    this.props.fetchPlayer();
  }

  render() {
    return <h1>Player details!</h1>;
  }
}

function mapStateToProps({ player }) {
  return { player };
}

export default connect(
  mapStateToProps,
  { fetchPlayer }
)(PlayerDetails);
