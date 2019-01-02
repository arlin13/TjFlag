import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const TeamFormReview = ({ onCancel, formValues, submitTeam, history }) => {
  console.log("Inside of team form review");
  console.log(formValues);
  return (
    <div style={{ margin: "10px 0px" }}>
      <h5>Confirma los datos</h5>
      <div>
        <label>Nombre del equipo:</label>
        <p>{formValues}</p>
      </div>
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        Regresar
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitTeam(formValues, history)}
      >
        Agregar <i className="material-icons right">add</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.teamForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(TeamFormReview));
