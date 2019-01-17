import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PlayerField from "./PlayerField";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import "../../style/index.css";

class PlayerForm extends Component {
  renderFields() {
    return _.map(
      formFields,
      ({ name, label, elementType, elementConfig, className }) => {
        return (
          <Field
            key={name}
            name={name}
            label={label}
            elementType={elementType}
            elementConfig={elementConfig}
            component={PlayerField}
            className={className}
          />
        );
      }
    );
  }

  render() {
    return (
      <div style={{ margin: "20px 0px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onPlayerSubmit)}>
          <div className="row">{this.renderFields()}</div>
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

  // _.each(formFields, ({ name }) => {
  //   if (!values[name]) {
  //     errors[name] = "Requerido";
  //   }
  // });

  return errors;
}

export default reduxForm({
  validate,
  form: "playerForm",
  destroyOnUnmount: false
})(PlayerForm);
