import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../../actions";

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

  renderTeamsTable() {
    var number = 1;
    return this.props.teams.map(team => {
      return (
        <tr key={team._id}>
          <td>{number++}</td>
          <td>{team.name}</td>
          <td>{team.category}</td>
          <td>{team.mode}</td>
          <td>{team.city}</td>
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
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Rama</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>{this.renderTeamsTable()}</tbody>
        </table>
      </div>
      // <div>
      //   <ul className="collection">{this.renderTeams()}</ul>
      // </div>
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
