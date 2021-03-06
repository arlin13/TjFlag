import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TournamentField from "./TournamentField";
import { Link } from "react-router-dom";
import formFields from "./formFields";

class TournamentForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={TournamentField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="row top-bottom-margin">
        <form onSubmit={this.props.handleSubmit(this.props.onTournamentSubmit)}>
          {this.renderFields()}
          <Link to="/tournaments" className="red btn-flat btn-small white-text">
            Cancelar
            <i className="material-icons right">cancel</i>
          </Link>
          <button
            type="submit"
            className="teal btn-flat btn-small right white-text"
          >
            Siguiente
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "tournamentForm",
  destroyOnUnmount: false
})(TournamentForm);
