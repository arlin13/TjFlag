import React, { Component } from "react";
import { reduxForm } from "redux-form";
import CourtForm from "./CourtForm";
import CourtFormReview from "./CourtFormReview";

class CourtNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <CourtFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <CourtForm
        onCourtSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "courtForm"
})(CourtNew);
