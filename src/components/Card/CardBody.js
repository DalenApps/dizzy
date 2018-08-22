import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.scss';
class CardBody extends Component {
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
    return <div className={`dz-card-body ${className}`}>{children}</div>;
  }
}

export default CardBody;
