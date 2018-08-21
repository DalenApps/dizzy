import React, { Component } from "react";
import "./Card.css";
import PropTypes from "prop-types";
class CardTools extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ""
  };
  render() {
    const { className, children } = this.props;
    return (
      <div className={`dz-card-header-tools ${className}`}>{children}</div>
    );
  }
}

export default CardTools;
