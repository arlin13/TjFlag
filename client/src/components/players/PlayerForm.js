import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PlayerField from "./PlayerField";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import { connect } from "react-redux";
import { fetchTeamsBasic } from "../../actions";
import "../../style/index.css";

class PlayerForm extends Component {
  componentDidMount() {
    this.props.fetchTeamsBasic();
  }

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

  renderTeamsList() {
    return this.props.teams.map(team => {
      return (
        <div key={team._id} className="col s6 l3">
          <p>
            <label>
              <input type="checkbox" />
              <span>{team.name}</span>
            </label>
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row top-bottom-margin">
        <form onSubmit={this.props.handleSubmit(this.props.onPlayerSubmit)}>
          {this.renderFields()}
          <label>Equipos</label>
          <div id="teamListDiv" className="row">
            {this.renderTeamsList()}
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

  // _.each(formFields, ({ name }) => {
  //   if (!values[name]) {
  //     errors[name] = "Requerido";
  //   }
  // });

  return errors;
}

function mapStateToProps({ teams }) {
  return { teams };
}

PlayerForm = connect(
  mapStateToProps,
  { fetchTeamsBasic }
)(PlayerForm);

export default reduxForm({
  validate,
  form: "playerForm",
  destroyOnUnmount: false
})(PlayerForm);
