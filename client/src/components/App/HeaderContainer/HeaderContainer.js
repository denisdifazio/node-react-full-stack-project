import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header/Header";
import { APP_NAME } from "../../../utils/constants";
import Payments from "../Payments/Payments";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <Header
        title={APP_NAME}
        titleLink={this.props.auth ? "/surveys" : "/"}
        render={this.renderContent}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(HeaderContainer);
