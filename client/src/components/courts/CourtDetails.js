import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourt } from "../../actions";
import "../../style/index.css";

class CourtDetails extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const courtId = search.substring(search.indexOf("=") + 1, search.length);
    this.props.fetchCourt(courtId);
  }

  render() {
    const court = this.props.courts;
    console.log("render court details");
    console.log(this.props);
    return (
      <div className="container row">
        <div className="col s12 left">
          <a href={"/courts"}>
            <div className="valign-wrapper top-bottom-padding">
              <i className="material-icons">arrow_back</i>
              Lista de canchas
            </div>
          </a>
        </div>
        <div className="col s12">
          <h3 className="center">{court.name}</h3>
          <div id="courtBasicInfo" className="top-bottom-margin">
            <h6>INFORMACION GENERAL</h6>
            <div className="divider" />
            <label>Ciudad: {court.city}</label>
            <br />
            <label>Direccion: {court.address}</label>
            <br />
            <label />
          </div>

          <div id="courtMap" className="top-bottom-padding">
            <h6>MAPA</h6>
            <div className="divider" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ courts }) {
  return { courts };
}

export default connect(
  mapStateToProps,
  { fetchCourt }
)(CourtDetails);
