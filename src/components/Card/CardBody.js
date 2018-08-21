import React, { Component } from "react";
import "./Card.css";
import PropTypes from "prop-types";
class CardBody extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ""
  };
  render() {
    const { className, children } = this.props;
    return <div className={`dz-card-body ${className}`}>{children}</div>;
  }
}

export default CardBody;
