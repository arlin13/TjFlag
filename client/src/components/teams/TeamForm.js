import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TeamField from "./TeamField";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions";

class TeamForm extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={TeamField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  renderPlayersList() {
    return this.props.players.map(player => {
      return (
        <p key={player._id}>
          <label>
            <input type="checkbox" />
            <span>
              {player.name} {player.lastName}
            </span>
          </label>
        </p>
      );
    });
  }

  render() {
    return (
      <div className="row top-bottom-margin">
        <form onSubmit={this.props.handleSubmit(this.props.onTeamSubmit)}>
          {this.renderFields()}
          <a className="modal-trigger right" href="#modal1">
            + Agregar jugadores
          </a>
          <label>Jugadores</label>
          <input type="text" />
          <div id="modal1" className="modal">
            <div className="modal-content black-text">
              <h4>Jugadores</h4>
              <p>Selecciona los jugadores</p>
              {this.renderPlayersList()}
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-close waves-effect waves-green btn-flat"
              >
                OK
              </a>
            </div>
          </div>

          <Link to="/teams" className="red btn-flat btn-small white-text">
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

function mapStateToProps({ players }) {
  return { players };
}

TeamForm = connect(
  mapStateToProps,
  { fetchPlayers }
)(TeamForm);

export default reduxForm({
  validate,
  form: "teamForm",
  destroyOnUnmount: false
})(TeamForm);

// export default reduxForm({
//   validate,
//   form: "teamForm",
//   destroyOnUnmount: false
// })(TeamForm);
