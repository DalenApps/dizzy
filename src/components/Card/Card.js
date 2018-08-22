import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.scss';
class Card extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: ''
  };
  render() {
    const { className, children } = this.props;
    return <div className={`dz-card ${className}`}>{children}</div>;
  }
}

export default Card;
