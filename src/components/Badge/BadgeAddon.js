import React, { Component } from "react";
import "./badge.scss";
import PropTypes from "prop-types";

class BadgeAddon extends Component {
  static propTypes = {
    direction: PropTypes.string
  };
  static defaultProps = {
    direction: "left"
  };
  render() {
    const { className, direction, children } = this.props;
    return (
      <span
        className={`
        ${direction === "left" ? "badge-addon-left" : "badge-addon-right"} ${
          className ? className : ""
        }`}
      >
        {children}
      </span>
    );
  }
}

export default BadgeAddon;
