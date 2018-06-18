import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => (
  <nav>
    <div className="nav-wrapper blue">
      <Link to={props.titleLink} className="left brand-logo">
        {props.title}
      </Link>
      <ul className="right">{props.render()}</ul>
    </div>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default Header;
