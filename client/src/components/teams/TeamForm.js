import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class TeamForm extends Component {
  renderFields() {
    return (
      <div>
        <label>Nombre del equipo: </label>
        <input type="text" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onTeamSubmit)}>
          {this.renderFields()}
          <Link to="/teams" className="red btn-flat white-text">
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Save
            <i className="material-icons right">save</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "teamForm" })(TeamForm);
