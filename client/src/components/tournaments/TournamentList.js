import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTournaments } from "../../actions";

class TournamentList extends Component {
  componentDidMount() {
    this.props.fetchTournaments();
  }

  renderTournament() {
    return this.props.tournaments.map(tournament => {
      return (
        <a
          href={"/tournaments/" + tournament.name}
          className="collection-item"
          key={tournament.name}
        >
          {tournament.name}
        </a>
      );
    });
  }

  renderTournamentTable() {
    var number = 1;
    return this.props.tournaments.map(tournament => {
      return (
        <tr key={tournament._id}>
          <td>{number++}</td>
          <td>{tournament.name}</td>
          <td>{tournament.category}</td>
          <td>{tournament.mode}</td>
          <td>{tournament.city}</td>
          <td>
            <Link to={"/tournaments/details/?tournamentId=" + tournament._id}>
              Ver mas
            </Link>
          </td>
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
          <tbody>{this.renderTournamentTable()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ tournaments }) {
  return { tournaments };
}

export default connect(
  mapStateToProps,
  { fetchTournaments }
)(TournamentList);
