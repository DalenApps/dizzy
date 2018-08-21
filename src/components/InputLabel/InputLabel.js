import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InputLabel.css";

class InputLabel extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ""
  };

  render() {
    const { className, children } = this.props;
    return (
      <label className={`dz-input-label ${className ? className : ""}`}>
        {children}
      </label>
    );
  }
}

export default InputLabel;
