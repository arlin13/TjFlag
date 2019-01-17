import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import CourtField from "./CourtField";
import { Link } from "react-router-dom";
import formFields from "./formFields";

class CourtForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={CourtField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ margin: "20px 0px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onCourtSubmit)}>
          {this.renderFields()}
          <Link to="/courts" className="red btn-flat btn-small white-text">
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
  form: "courtForm",
  destroyOnUnmount: false
})(CourtForm);
