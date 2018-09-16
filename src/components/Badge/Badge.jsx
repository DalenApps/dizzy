import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { variantProps } from '../../helpers';

class Badge extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    variant: variantProps
  };
  static defaultProps = {
    className: '',
    variant: 'primary'
  };
  render() {
    const { className, children } = this.props;
    return (
      <span className={cx('dz-badge', [`dz-badge-${variant}`], className)}>
        {children}
      </span>
    );
  }
}

export default Badge;
