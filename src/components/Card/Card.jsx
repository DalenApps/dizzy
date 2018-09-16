import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { variantProps } from '../../helpers';
class Card extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    variant: variantProps,
    bordered: PropTypes.bool,
    filled: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    variant: 'white',
    bordered: false,
    filled: false
  };
  render() {
    const { className,filled, variant, bordered, children } = this.props;
    const contentClass = cx(
      'dz-card',
      [`dz-card-${variant}`],
      { 'dz-card-bordered': bordered },
      { 'dz-card-filled': filled },
      className
    );
    return <div className={contentClass}>{children}</div>;
  }
}

export default Card;
