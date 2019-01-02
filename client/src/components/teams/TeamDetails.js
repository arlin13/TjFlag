import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../../actions";

class TeamDetails extends Component {
  componentDidMount() {
    this.props.fetchTeams();
  }

  renderTeams() {
    return null;
  }

  render() {
    return (
      <div>
        <h4>Team details</h4>
        // <div>{this.renderTeams()}</div>
      </div>
    );
  }
}

function mapStateToProps({ team }) {
  return team;
}

export default connect(
  mapStateToProps,
  { fetchTeams }
)(TeamDetails);
