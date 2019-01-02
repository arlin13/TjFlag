import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class TeamForm extends Component {
  renderFields() {
    return (
      <div>
        <h5>Agregar equipo</h5>
        <label>Nombre: </label>
        <input type="text" />
      </div>
    );
  }

  render() {
    return (
      <div style={{ margin: "10px 0px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onTeamSubmit)}>
          {this.renderFields()}
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

export default reduxForm({ form: "teamForm", destroyOnUnmount: false })(
  TeamForm
);
