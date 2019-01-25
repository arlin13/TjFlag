import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TeamField from "./TeamField";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import { connect } from "react-redux";
import { fetchPlayersBasic } from "../../actions";
import "../../style/index.css";

class TeamForm extends Component {
  componentDidMount() {
    this.props.fetchPlayersBasic();
  }

  onChange(playerName, event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    var isChecked = value === true ? " was checked" : " was unchecked";
    console.log("onclick test from player: " + playerName + isChecked);
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
        <div key={player._id} className="col s6 l3">
          <label>
            <input
              name="isGoing"
              type="checkbox"
              onChange={this.onChange.bind(this, player.name)}
            />
            <span>
              {player.name} {player.lastName}
            </span>
          </label>
          <br />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row top-bottom-margin">
        <form onSubmit={this.props.handleSubmit(this.props.onTeamSubmit)}>
          {this.renderFields()}
          <label>Jugadores</label>
          <div id="playerListDiv" className="row">
            {this.renderPlayersList()}
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
  { fetchPlayersBasic }
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
