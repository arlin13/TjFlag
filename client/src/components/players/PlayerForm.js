import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PlayerField from "./PlayerField";
import { Link } from "react-router-dom";
import formFields from "./formFields";

class PlayerForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={PlayerField}
          type="text"
          className={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ margin: "10px 0px" }}>
        <p>Datepicker</p>
        <input type="text" class="datepicker" />

        <form onSubmit={this.props.handleSubmit(this.props.onPlayerSubmit)}>
          {this.renderFields()}
          <Link to="/players" className="red btn-flat btn-small white-text">
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
  form: "playerForm",
  destroyOnUnmount: false
})(PlayerForm);
