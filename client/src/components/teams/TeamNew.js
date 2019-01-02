import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TeamForm from "./TeamForm";
import TeamFormReview from "./TeamFormReview";

class TeamNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TeamFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <TeamForm onTeamSubmit={() => this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "teamForm"
})(TeamNew);
