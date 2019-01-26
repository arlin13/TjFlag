import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import "../../style/index.css";

const TeamFormReview = ({ onCancel, formValues, submitTeam, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="top-bottom-margin">
      <h5>Confirma los datos</h5>
      {reviewFields}
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
  console.log("mapStateToProps");
  console.log(state);
  console.log(state.form.teamForm.values);
  return {
    formValues: state.form.teamForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(TeamFormReview));
