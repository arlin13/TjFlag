import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../../actions";
// const img = require("../../images/Logo_TJFLAG_Color.png");

class TeamList extends Component {
  componentDidMount() {
    this.props.fetchTeams();
  }

  renderTeams() {
    return this.props.teams.map(team => {
      return (
        <a
          href={"/teams/" + team.name}
          className="collection-item"
          key={team.name}
        >
          {team.name}
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderTeams()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ teams }) {
  return { teams };
}

export default connect(
  mapStateToProps,
  { fetchTeams }
)(TeamList);
