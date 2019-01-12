import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PlayerField from "./PlayerField";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import "../../style/index.css";

class PlayerForm extends Component {
  componentDidMount() {
    console.log("player form did mount");
  }

  renderFields() {
    return _.map(formFields, ({ label, name, type, className }) => {
      return (
        <Field
          key={name}
          component={PlayerField}
          type="text"
          label={label}
          name={name}
          className={className}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ margin: "20px 0px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onPlayerSubmit)}>
          <div className="row">
            {this.renderFields()}
            <div className="col s12 m12">
              <label>Equipos</label>
              <input type="text" style={{ marginTop: "5px", color: "white" }} />
            </div>
            <br />
            <div className="input-field col s12">
              <i className="material-icons prefix">textsms</i>
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
              <label htmlFor="autocomplete-input">Autocomplete</label>
            </div>
          </div>
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

  _.each(formFields, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = "Requerido";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "playerForm",
  destroyOnUnmount: false
})(PlayerForm);
