import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCourts } from "../../actions";

class CourtList extends Component {
  componentDidMount() {
    this.props.fetchCourts();
  }

  renderCourts() {
    return this.props.courts.map(court => {
      return (
        <a
          href={"/courts/" + court.name}
          className="collection-item"
          key={court.name}
        >
          {court.name}
        </a>
      );
    });
  }

  renderCourtsTable() {
    var number = 1;
    return this.props.courts.map(court => {
      return (
        <tr key={court._id}>
          <td>{number++}</td>
          <td>{court.name}</td>
          <td>{court.city}</td>
          <td>{court.address}</td>
          <td>
            <Link to={"/courts/details/?courtId=" + court._id}>Ver mas</Link>
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
              <th>Ciudad</th>
              <th>Direccion</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderCourtsTable()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ courts }) {
  return { courts };
}

export default connect(
  mapStateToProps,
  { fetchCourts }
)(CourtList);
