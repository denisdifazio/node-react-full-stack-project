import React from "react";
import { connect } from "react-redux";
import { FIELDS } from "../../../../utils/constants";
import * as actions from "../../../../actions";
import { withRouter } from "react-router";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = FIELDS.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="teal btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps({ form: { surveyForm } }) {
  return { formValues: surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
