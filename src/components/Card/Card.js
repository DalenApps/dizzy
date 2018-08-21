import React, { Component } from "react";
import { CardHeader } from "./";
import "./Card.css";
import PropTypes from 'prop-types';
class Card extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ""
  };
  render() {
    const { className, children } = this.props;
    return <div className={`dz-card ${className}`}>{children}</div>;
  }
}

export default Card;
