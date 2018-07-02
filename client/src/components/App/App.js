import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import Landing from "./Landing/Landing";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Dashboard from "./Dashboard/Dashboard";
import SurveyNew from "./SurveyNew/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <HeaderContainer />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
