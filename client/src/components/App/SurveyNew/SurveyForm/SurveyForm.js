import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField/SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../../../utils/validateEmails";
import { FIELDS } from "../../../../utils/constants";

function renderFields() {
  return FIELDS.map(({ label, name }) => (
    <Field
      key={name}
      component={SurveyField}
      type="text"
      label={label}
      name={name}
    />
  ));
}

const SurveyForm = props => (
  <div>
    <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
      {renderFields()}
      <Link to="/surveys" className="red btn-flat white-text">
        Cancel
      </Link>
      <button className="teal btn-flat right white-text" type="submit">
        Next
        <i className="material-icons right">done</i>
      </button>
    </form>
  </div>
);

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  FIELDS.forEach(({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
