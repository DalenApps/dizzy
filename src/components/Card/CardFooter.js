import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
class CardFooter extends Component {
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
    return <div className={`dz-card-footer ${className}`}>{children}</div>;
  }
}

export default CardFooter;
