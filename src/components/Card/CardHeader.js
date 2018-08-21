import React, { Component } from "react";
import "./Card.css";
import PropTypes from "prop-types";
class CardHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  static defaultProps = {
    title: "Header",
    className: ''
  };

  render() {
    const { className, title, children } = this.props;
    return (
      <div className={`dz-card-header ${className}`}>
        <div className="dz-card-header-title">
          <p> {title}</p>
        </div>
        {children}
      </div>
    );
  }
}

export default CardHeader;
