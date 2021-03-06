import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const PlayerFormReview = ({ onCancel, formValues, submitPlayer, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    console.log(formValues);
    return (
      <div key={name}>
        <label>{label}</label>
        <label>{formValues[name]}</label>
      </div>
    );
  });

  return (
    <div style={{ margin: "10px 0px" }}>
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
        onClick={() => submitPlayer(formValues, history)}
      >
        Agregar <i className="material-icons right">add</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.playerForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(PlayerFormReview));
