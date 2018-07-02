import React, { Component } from "react";
import SurveyForm from "./SurveyForm/SurveyForm";
import SurveyFormReview from "./SurveyFormReview/SurveyFormReview";
import { reduxForm } from "redux-form";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    const { showFormReview } = this.state;

    if (showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyNew);
