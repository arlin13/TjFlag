import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TournamentForm from "./TournamentForm";
import TournamentFormReview from "./TournamentFormReview";

class TournamentNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TournamentFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <TournamentForm
        onTournamentSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "tournamentForm"
})(TournamentNew);
