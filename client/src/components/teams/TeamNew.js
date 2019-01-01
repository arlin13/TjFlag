import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TeamForm from "./TeamForm";

class TeamNew extends Component {
  render() {
    return <TeamForm onTeamSubmit={() => console.log("Agregando equipo")} />;
  }
}

export default reduxForm({
  form: "teamForm"
})(TeamNew);
